<script setup>
import {computed, inject, onMounted, provide, ref, watch} from "vue";
import {api} from "boot/axios";
import {useQuasar} from "quasar";
import ZoneFromSelect from "components/packs/ZoneFromSelect.vue";
import ZoneToSelect from "components/packs/ZoneToSelect.vue";
import TypeSelect from "components/packs/TypeSelect.vue";
import NavButton from "components/NavButton.vue";
import {useRouter} from "vue-router";
import DialogWindow from "components/DialogWindow.vue";
import {notifyError} from "src/js/myFuncts";
import SelectSort from "components/packs/SelectSort.vue";
import SideButtons from "components/packs/SideButtons.vue";

const q = useQuasar()
const apiUrl = String(process.env.API)
const router = useRouter()
const inputClass = ref('Input')
const curAccount = inject('curAccount')


const emit = defineEmits(['sideSelected'])

const packList = inject('packList')
const Lost = inject('Lost')



const ptSettings = inject('ptSettings')

const progress = inject('progress')
const disabled = inject('disabled')
const zones = ref({})
const allZonesTo = ref([])

const zonesFrom = computed(()=>{
  if (!Object.keys(zones.value).length || !ptSettings.value.side){
    return [{id: 0, name: 'Все'}]
  }
  let zfrom = [...zones.value[ptSettings.value.side]]
  zfrom.unshift({id:0, name: "Все", ZonesTo: allZonesTo.value[ptSettings.value.side]})
  return zfrom
})
provide('zonesFrom', zonesFrom)

const zonesTo = computed(() => {
  if (!zonesFrom.value.length  || !ptSettings.value.side){
    return [{id: 0, name: 'Все'}]
  }
  let obj = [...zonesFrom.value]
  obj = obj.find(el => el.id === ptSettings.value.zoneFromId)
  if (!obj || !obj.ZonesTo){
    return []
  }
  return  obj.ZonesTo
})
provide('zonesTo', zonesTo)

const currencyPrices = inject('currencyPrices')

watch(() => ptSettings.value.zoneFromId, ()=>{
  if(ptSettings.value.zoneFromId && zonesTo.value){
    if(ptSettings.value.zoneFromId === ptSettings.value.zoneToId){
      ptSettings.value.zoneToId= zonesTo.value[0].id
    }
    if(zonesTo.value.length === 2){
      ptSettings.value.zoneToId = zonesTo.value[1].id
    }

    return true
  }

  ptSettings.value.zoneToId = 0
})

watch(()=>ptSettings.value.addProfit, () => {
  Lost.value = []
  if(ptSettings.value.addProfit && !progress.value){
    loadList()
  }
})

watch(()=>ptSettings.value.side, ()=>{
  if(ptSettings.value.side){
    ptSettings.value.zoneFromId = 0
    ptSettings.value.zoneToId = 0
    loadList()
  }
})
onMounted(()=> {
  loadZones()
})

function addProfitActive(){
  if(!!!curAccount.value.settings.serverGroupId){
    ptSettings.value.addProfit = false
    goToSettings()
    return false
  }
  if(!ptSettings.value.side){
    q.notify({
      color: 'negative',
      position: 'center',
      message: 'Материк не выбран',
      icon: 'report_problem',
      timeout: 100,
      closeBtn: 'x'
    })
    return false
  }
  ptSettings.value.addProfit = !ptSettings.value.addProfit
  if (ptSettings.value.addProfit){
    ptSettings.value.sort = 'byProfit'
  }

}

function goToSettings () {
  q.dialog({
    component: DialogWindow,
    componentProps: {
      text: 'Сервер не указан.<br>Перейти в настройки?',
      okBtnText: 'В настройки',
      cancelBtnText: 'Не сейчас'
      // ...more..props...
    },
    cancel: true,
    persistent: true
  }).onOk(() => {
    // console.log('>>>> OK')
  }).onOk(() => {
    router.push('/account')
    // console.log('>>>> second OK catcher')
  }).onCancel(() => {
    //emit('Cancel')
    // console.log('>>>> Cancel')
  }).onDismiss(() => {
    //emit('Dismiss')
    // console.log('I am triggered on both OK and Cancel')
  })
}

function loadList() {
  if(progress.value) return

  progress.value = true
  api.post(apiUrl + 'api/pack.php', {
    params: {
      method: 'list',
      side: ptSettings.value.side,
      addProfit: ptSettings.value.addProfit,
      siol: ptSettings.value.siol,
      //condition: ptSettings.value.condition
    }
  })
      .then((response) => {
        if(!response?.data?.result) throw new Error()

        packList.value = response?.data?.data?.Packs ?? []
        Lost.value = response?.data?.data?.Lost ?? []
        currencyPrices.value = response?.data?.data?.currencyPrices ?? []

      })
      .catch((error) => {
        q.notify(notifyError(error))
        packList.value = []
        Lost.value = []
      })
    .finally(() => {
      progress.value = false
    })
}

function loadZones() {

  api.post(apiUrl + 'api/options.php', {
    params: {
      method: 'getZones'
    }
  })
      .then((response) => {
        if(!!!response?.data?.result){
          throw new Error();
        }
        allZonesTo.value = response?.data?.data?.allZonesTo ?? []
        zones.value = response?.data?.data?.zonesFrom ?? []
      })
      .catch((error) => {
        q.notify(notifyError(error, 'Ой! Zones Не работает :('))
        zones.value = {}
      })
}
</script>

<template>
  <div class="menuArea">
    <div class="menuRow" style="justify-content: space-evenly">
      <div class="sideBtnCard">
        <SideButtons></SideButtons>
      </div>
      <h1>Паки 8.0</h1>
      <div style="display: flex;">
        <q-input v-model="ptSettings.ratePercent"
                 class="Input"
                 :loading="progress"
                 dense
                 style="width: 9em; height: 3em; margin: 1em"
                 suffix="%"
                 borderless
                 type="number"
                 step="5"
                 max="130"
                 min="50"
        ></q-input>
        <NavButton label="Сиоль"
                   :active="ptSettings.siol"
                   imgBtn="/img/siol.png"
                   @click="ptSettings.siol = !ptSettings.siol"
        ></NavButton>
      </div>
      <div style="display: flex">
        <TypeSelect></TypeSelect>
        <NavButton label="+Профит"
                   :active="ptSettings.addProfit"
                   :imgBtn="'/img/profit.png'"
                   :isDisabled="!!!curAccount.settings.serverGroupId"
                   toolText="Расчитывать прибыль.<br>
                    Если вы не указали профессии и цены в настройках, это совершенно бесполезная опция"
                   @onClick="addProfitActive"
        ></NavButton>
      </div>
    </div>
    <div class="menuRow">

      <div class="menuSection">
        <div>
          <q-tooltip v-if="!ptSettings.side">Материк не выбран</q-tooltip>
          <q-tooltip v-else-if="disabled">Категории не выбраны</q-tooltip>
          <ZoneFromSelect v-if="Object.keys(zones).length"></ZoneFromSelect>
          <ZoneToSelect v-if="Object.keys(zones).length"></ZoneToSelect>
        </div>
        <div>
          <div>
            <q-radio v-model="ptSettings.condition" label="Зрелые" :val="1"></q-radio>
          </div>
          <div>
            <q-radio v-model="ptSettings.condition" label="Протухшие" :val="0"></q-radio>
          </div>
        </div>
      </div>
      <div class="menuSection">
        <SelectSort></SelectSort>
      </div>
    </div>
  </div>
</template>

<style scoped>
.menuArea {
  display: flex;
  flex-wrap: wrap;
  padding: 2em;
  font-size: 13px;
}
.navigator {
  flex-wrap: wrap;
}
.menuRow {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
}

.sideBtnCard {
  display: flex;
  justify-content: space-between;
  box-shadow: rgb(92 123 44) 0 0 10px 0;
  padding: 0.5em 1em;
  border-radius: 0.5em;
  width: 14em;
}



.menuSection {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.menuSection>div {
  margin: 0.5em 1em;
}
</style>
