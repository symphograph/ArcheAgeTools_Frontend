<template>
  <div class="menuArea">
    <div class="menuRow" style="justify-content: space-evenly">
      <h1>Паки 8.0</h1>
      <div style="display: flex;">
        <q-input v-model="percent"
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
      <TypeSelect></TypeSelect>
    </div>
    <div class="menuRow">
      <div class="menuSection">
        <div class="sideBtnCard">
          <template v-for="sd in Sides" :key="sd.value">
            <NavButton :label="sd.label"
                       :active="side === sd.value"
                       :imgBtn="'/img/side/' + sd.value + '.png'"
                       @click="side = sd.value"
            ></NavButton>
          </template>
        </div>
        <div>
          <q-tooltip v-if="!side">Материк не выбран</q-tooltip>
          <q-tooltip v-else-if="disabled">Категории не выбраны</q-tooltip>
          <ZoneFromSelect v-if="Object.keys(zones).length"></ZoneFromSelect>
          <ZoneToSelect v-if="Object.keys(zones).length"></ZoneToSelect>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SideSelect from "components/packs/SideSelect.vue";
import {computed, inject, onMounted, provide, ref, watch} from "vue";
import {api} from "boot/axios";
import {useQuasar} from "quasar";
import ZoneFromSelect from "components/packs/ZoneFromSelect.vue";
import ZoneToSelect from "components/packs/ZoneToSelect.vue";
import TypeSelect from "components/packs/TypeSelect.vue";
import NavButton from "components/NavButton.vue";

const q = useQuasar()
const apiUrl = String(process.env.API)
const token = inject('token')
const inputClass = ref('Input')

const emit = defineEmits(['sideSelected'])

const packList = inject('packList')

const side = inject('side')
const zones = ref({})
const allZonesTo = ref([])
const zoneFromId = inject('zoneFromId')
const zoneToId = inject('zoneToId')
const disabled = inject('disabled')
const siol = inject('siol')
const progress = inject('progress')

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

const percent = inject('percent')

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

watch(side, ()=>{
  if(side.value){
    loadList()
  }
})
onMounted(()=> {
  loadZones()
})

function loadList() {
  progress.value = true
  api.post(apiUrl + 'api/get/packs.php', {
    params: {
      token: token.value,
      side: side.value
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
      }
      if (response.data.result) {
        packList.value = response.data.data
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
