<script setup>

import ZoneFromSelect from "components/packs/ZoneFromSelect.vue";
import {api} from "boot/axios";
import {notifyError} from "src/js/myFuncts";
import {onMounted, ref, provide, computed, watch} from "vue";
import {useQuasar} from "quasar";
import ZoneToSelect from "components/packs/ZoneToSelect.vue";
import SideButtons from "components/packs/SideButtons.vue";
import PackSelect from "components/packs/PackSelect.vue";
import SalaryCard from "components/packs/SalaryCard.vue";
import FreshSelect from "components/packs/FreshSelect.vue";
import NavButton from "components/NavButton.vue";
import SideSelect from "components/packs/SideSelect.vue";

const q = useQuasar()
const apiUrl = String(process.env.API)

const zones = ref({})
const allZonesTo = ref([])
const ptSettings = ref({
  zoneFromId: 0,
  zoneToId: 0,
  side: 0,
  siol: false,
  ratePercent: 130
})
provide('ptSettings', ptSettings)

const disabled = computed(() => {
  return listInProgress.value
})
provide('disabled', disabled)
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

const selectedPack = ref(null)
provide('selectedPack', selectedPack)

const selectedFresh = ref(null)
provide('selectedFresh', selectedFresh)
const packList = ref([])
const Lost = ref([])
const currencyPrices = ref([])
provide('currencyPrices', currencyPrices)

const filteredByFrom = computed(() => {
  if(!packList.value.length){
    return []
  }
  let arr = [...packList.value]
  if(!ptSettings.value.zoneFromId) return arr
  return arr.filter(el => el.zoneFromId === ptSettings.value.zoneFromId)
})

const filteredPackList = computed(() => {
  let arr = [...filteredByFrom.value]
  if(!ptSettings.value.zoneToId) return arr
  return arr.filter(el => el.zoneToId === ptSettings.value.zoneToId)
})
provide('filteredPackList', filteredPackList)

const listInProgress = ref(false)
provide('loading', listInProgress)

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
        zonesFrom.value = []
      })
}

function loadList() {
  listInProgress.value = true
  //packList.value = []
  api.post(apiUrl + 'api/pack.php', {

    params: {
      method: 'list',
      side: ptSettings.value.side,
      addProfit: false,
    }
  })
      .then((response) => {
        if(!!!response?.data?.result){
          throw new Error();
        }
        packList.value = response?.data?.data?.Packs ?? []
        //Lost.value = response?.data?.data?.Lost ?? []
        currencyPrices.value = response?.data?.data?.currencyPrices ?? []

      })
      .catch((error) => {
        progress.value = false
        q.notify(notifyError(error, 'Ой! Packs Не работает :('))
        packList.value = []
        Lost.value = []
      }).finally(()=>{
    listInProgress.value = false
  })
}

function onSelectPack() {
  //console.log(selectedPack.value)
  ptSettings.value.zoneFromId = selectedPack.value.zoneFromId
  ptSettings.value.zoneToId = selectedPack.value.zoneToId
  selectedFresh.value = selectedPack.value.Freshness.FreshLvls[selectedPack.value.Freshness.bestLvl]
}

function onSelectedFrom() {
  selectedPack.value = null
}

function onSelectedTo() {

  if(!selectedPack.value) return;
  if(!ptSettings.value.zoneToId) {
    selectedPack.value = null
    return;
  }
  const fff = filteredByFrom.value.find((el) =>
    el.itemId === selectedPack.value.itemId
    &&
    el.zoneToId === ptSettings.value.zoneToId
  )
  if(fff) {
    selectedPack.value = fff
  }
}

function onSideSelected(){
  ptSettings.value.zoneFromId = 0
  ptSettings.value.zoneToId = 0
  selectedPack.value = null
  loadList()
}


const freshLvlKey = computed(() => {
  if(ptSettings.value.condition){
    return selectedPack.value.Freshness.bestLvl
  }
  return selectedPack.value.Freshness.worstLvl
})

const freshPercent = computed(() => {
  return selectedFresh.value.percent
})

const flatSalary = computed(() => {
  return Math.round(selectedPack.value.dbPrice / 130 * 100)
})

const siolPercent = computed(()=> {
  return ptSettings.value.siol && (selectedPack.value.currencyId === 500) ? 5 : 0
})

const factoryPrice = computed(()=>{
  let result = flatSalary.value * (ptSettings.value.ratePercent / 100)
  return  result * (1 + siolPercent.value / 100)
})

const finalSalary = computed(()=> {
  let salary = factoryPrice.value * (1 + (freshPercent.value / 100))
  salary *= 1.02 // Стандартная надбавка 2%

  if(selectedPack.value.currencyId !== 500){
    salary /= 100
  }
  return Math.round(salary)
})

const goldSalary = computed(() => {
  if(selectedPack.value.currencyId === 500){
    return finalSalary.value
  }
  let gold = finalSalary.value * currencyPrices.value[selectedPack.value.currencyId].price * 0.9
  return Math.round(gold)
})

const profit = computed(() => {
  return goldSalary.value - props.pRoute.Pack.craftPrice
})

const profitPerLabor = computed(() => {
  return Math.round(profit.value / selectedPack.value.Pack.laborNeed)
})


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

onMounted(()=> {
  loadZones()
})
</script>

<template>
<div class="paculatorArea">
  <q-card class="packCard">
    <q-card-section>
      <SideSelect @selected="onSideSelected"></SideSelect>
      <div>
        <ZoneFromSelect @onSelect="onSelectedFrom()"></ZoneFromSelect>
        <ZoneToSelect @onSelect="onSelectedTo()"></ZoneToSelect>
      </div>
    </q-card-section>

    <q-linear-progress :animation-speed="200"  color="green" :indeterminate="disabled"></q-linear-progress>
    <q-btn v-if="false" icon="help" @click.stop.prevent="() => { console.log(packList)}"></q-btn>

    <q-card-section>
      <PackSelect v-if="filteredPackList.length" @onSelect="onSelectPack"></PackSelect>
    </q-card-section>
    <q-card-section v-if="selectedPack">
      <div style="display: flex; justify-content: space-evenly">
        <div>
          <q-input v-model="ptSettings.ratePercent"
                   class="Input"
                   dense
                   style="width: 9em; height: max-content; margin: 0"
                   suffix="%"
                   borderless
                   type="number"
                   step="5"
                   max="130"
                   min="50"
          ></q-input>

        </div>

        <FreshSelect></FreshSelect>
      </div>

    </q-card-section>
    <q-card-section v-if="selectedPack">
      <SalaryCard :siol="ptSettings.siol"
                  :ratePercent="ptSettings.ratePercent"
                  :freshPercent="selectedFresh.percent"
                  :dbPrice="selectedPack.dbPrice"
                  :currencyId="selectedPack.currencyId"
                  :goldSalary="goldSalary"
                  :factoryPrice="factoryPrice"
                  :flatSalary="flatSalary"
                  :finalSalary="finalSalary"
      ></SalaryCard>
    </q-card-section>
  </q-card>

  <q-card class="packCard">eee</q-card>
</div>
</template>

<style scoped>
.paculatorArea {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.packCard {
  background-color: rgba(211, 238, 144, 0.06);
  box-shadow: 0 0 1em 0 rgb(0 0 0 / 9%);
  padding: 1em;
  width: 100%;
  max-width: 400px;
}

.sideBtnCard {
  display: flex;
  justify-content: space-between;
  box-shadow: rgb(92 123 44) 0 0 10px 0;
  padding: 0.5em 1em;
  border-radius: 1em;
  width: 14em;
}
</style>
