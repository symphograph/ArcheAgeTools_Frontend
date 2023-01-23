<template>
  <div class="menuArea">
    <div class="menuRow" style="justify-content: space-evenly">
      <div class="sideBtnCard">
        <template v-for="sd in Sides" :key="sd.value">
          <NavButton :label="sd.label"
                     :active="side === sd.value"
                     :imgBtn="'/img/side/' + sd.value + '.png'"
                     @click="side = sd.value"
          ></NavButton>
        </template>
      </div>
      <h1>Паки 8.0</h1>
      <div style="display: flex;">
        <q-input v-model="ratePercent"
                 class="Input"
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
                   :active="siol"
                   imgBtn="/img/siol.png"
                   @click="siol = !siol"
        ></NavButton>
      </div>
      <div style="display: flex">
        <TypeSelect></TypeSelect>
        <NavButton label="+Профит"
                   :active="addProfit"
                   :imgBtn="'/img/profit.png'"
                   :isDisabled="!!!curAccount.AccSets.serverGroup"
                   toolText="Расчитывать прибыль.<br>
                    Если вы не указали профессии и цены в настройках, это совершенно бесполезная опция"
                   @onClick="addProfitActive"
        ></NavButton>
      </div>
    </div>
    <div class="menuRow">

      <div class="menuSection">

        <div>
          <q-tooltip v-if="!side">Материк не выбран</q-tooltip>
          <q-tooltip v-else-if="disabled">Категории не выбраны</q-tooltip>
          <ZoneFromSelect v-if="Object.keys(zones).length"></ZoneFromSelect>
          <ZoneToSelect v-if="Object.keys(zones).length"></ZoneToSelect>
        </div>
        <div>
          <div>
            <q-radio v-model="condition" label="Зрелые" :val="0"></q-radio>
          </div>
          <div>
            <q-radio v-model="condition" label="Протухшие" :val="1"></q-radio>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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

const q = useQuasar()
const apiUrl = String(process.env.API)
const token = inject('token')
const router = useRouter()
const inputClass = ref('Input')
const curAccount = inject('curAccount')

const emit = defineEmits(['sideSelected'])

const packList = inject('packList')
const Lost = inject('Lost')

const side = inject('side')
const zoneFromId = inject('zoneFromId')
const zoneToId = inject('zoneToId')
const disabled = inject('disabled')
const ratePercent = inject('ratePercent')
const siol = inject('siol')
const addProfit = inject('addProfit')
const sort = inject('sort')
const condition = inject('condition')
const progress = inject('progress')

const zones = ref({})
const allZonesTo = ref([])

const Sides = [
  {
    label: 'Запад',
    value: 1
  },
  {
    label: 'Север',
    value: 3
  },
  {
    label: 'Восток',
    value: 2
  }
]
provide('Sides', Sides)

const zonesFrom = computed(()=>{
  if (!Object.keys(zones.value).length || !side.value){
    return [{id: 0, name: 'Все'}]
  }
  let zfrom = [...zones.value[side.value]]
  zfrom.unshift({id:0, name: "Все", ZonesTo: allZonesTo.value[side.value]})
  return zfrom
})
provide('zonesFrom', zonesFrom)

const zonesTo = computed(() => {
  if (!zonesFrom.value.length  || !side.value){
    return [{id: 0, name: 'Все'}]
  }
  let obj = [...zonesFrom.value]
  obj = obj.find(el => el.id === zoneFromId.value)
  if (!obj || !obj.ZonesTo){
    return []
  }
  return  obj.ZonesTo
})
provide('zonesTo', zonesTo)

const currencyPrices = inject('currencyPrices')

watch(zoneFromId, ()=>{
  if(zoneFromId.value && zonesTo.value){
    if(zoneFromId.value === zoneToId.value){
      zoneToId.value = zonesTo.value[0].id
    }
    if(zonesTo.value.length === 2){
      zoneToId.value = zonesTo.value[1].id
    }

    return true
  }

  zoneToId.value = 0
})

watch(addProfit, () => {
  Lost.value = []
  if(addProfit.value){
    loadList()
  }
})

watch(side, ()=>{
  if(side.value){
    zoneFromId.value = 0
    zoneToId.value = 0
    loadList()
  }
})
onMounted(()=> {
  loadZones()
})

function addProfitActive(){
  if(!!!curAccount.value.AccSets.serverGroup){
    addProfit.value = false
    goToSettings()
    return false
  }
  if(!side.value){
    q.notify({
      color: 'negative',
      position: 'center',
      message: 'Материк не выбран',
      icon: 'report_problem',
      timeout: 100,
      closeBtn: 'Закрыть'
    })
    return false
  }
  addProfit.value = !addProfit.value
  if (addProfit.value){
    sort.value = 'byProfit'
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

  progress.value = true
  api.post(apiUrl + 'api/get/packs.php', {
    params: {
      token: token.value,
      side: side.value,
      addProfit: addProfit.value,
      siol: siol.value,
      condition: condition.value
    }
  })
    .then((response) => {
      progress.value = false
      if (response.data.error) {
        q.notify({
          color: 'negative',
          position: 'center',
          message: response.data.error,
          icon: 'report_problem',
          closeBtn: 'Закрыть'
        })
        packList.value = []
        Lost.value = []
      }
      if (response.data.result) {
        packList.value = response.data.data.Packs
        Lost.value = response.data.data.Lost
        currencyPrices.value = response.data.data.currencyPrices
      }
    })
    .catch(() => {
      progress.value = false
      q.notify({
        color: 'negative',
        position: 'center',
        message: 'Сервер не отвечает',
        icon: 'report_problem',
        closeBtn: 'Закрыть'
      })
      packList.value = []
      Lost.value = []
    })
}
function loadZones() {

  api.post(apiUrl + 'api/get/zones.php', {
    params: {
      token: token.value
    }
  })
    .then((response) => {
      if (response.data.error) {
        q.notify({
          color: 'negative',
          position: 'center',
          message: response.data.error,
          icon: 'report_problem',
          closeBtn: 'Закрыть'
        })
        zones.value = {}
      }
      if (response.data.result) {
        allZonesTo.value = response.data.data.allZonesTo
        zones.value = response.data.data.zonesFrom
      }
    })
    .catch(() => {
      q.notify({
        color: 'negative',
        position: 'center',
        message: 'Сервер не отвечает',
        icon: 'report_problem',
        closeBtn: 'Закрыть'
      })
      zones.value = {}
    })
}
</script>

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
