<template>
  <table v-if="packList.length" style="width: 100%">
    <thead style="position: sticky; top: 0">
      <tr>
        <th style="max-width: 2em; text-align: left">

        </th>
        <th style="text-align: left">


        </th>
        <th style="max-width: 150px" class="mobile-hide">
          Откуда
        </th>
        <th class="mobile-hide">
          Куда

        </th>
        <th style="min-width: 100px">
          Выручка
        </th>
        <th v-if="ptSettings.addProfit" style="min-width: 100px; font-size: 12px; align-content: end">
          <div style="display: flex; justify-content: end">
            <q-item>
              <q-item-section>
                <q-item-label>Прибыль</q-item-label>
                <q-item-label caption>на 1ор</q-item-label>
              </q-item-section>
            </q-item>

          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <template v-for="pRoute in sortedList" :key="pRoute.itemId + '_' + pRoute.zoneFromId + '_' + pRoute.zoneToId">
        <PackRow :pRoute="pRoute"></PackRow>
      </template>
    </tbody>
  </table>
  <LostList v-if="Lost.length" :Lost="Lost" msg="<b>Расчет не получился.</b><br>
    Необходимо знать некоторые цены."></LostList>
</template>

<script setup>

import PackRow from "components/packs/PackRow.vue";
import {computed, inject, ref, watch} from "vue";
import {finalSalary, goldSalary, profit} from "src/myJS/price";
import LostList from "components/price/LostList.vue";


const packList = inject('packList')
const Lost = inject('Lost')
const ptSettings = inject('ptSettings')
const selectedTypes = inject('selectedTypes')

const selTypeIds = computed(() => {
  return selectedTypes.value.map((el)=> {
    return el.id
  })
})

const currencyPrices = inject('currencyPrices')

watch(selectedTypes, ()=>{
  //console.log(selTypeIds.value)
})

const filteredList = computed(() => {
  if(!selTypeIds.value.length){
    return []
  }
  let list = [...packList.value]
  list = list.filter(pRoute => selTypeIds.value.includes(pRoute.Pack.typeId))
  if(ptSettings.value.zoneFromId){
    list = list.filter(pRoute => pRoute.zoneFromId === ptSettings.value.zoneFromId)
  }
  if(ptSettings.value.zoneToId){
    list = list.filter(pRoute => pRoute.zoneToId === ptSettings.value.zoneToId)
  }
  return list
})

function freshLvlKey(pRoute) {
  if(ptSettings.value.condition){
    return pRoute.Freshness.bestLvl
  }
  return pRoute.Freshness.worstLvl
}

function getGoldSalary(pRoute){
  let finSalary =   finalSalary(
    pRoute.dbPrice,
    ptSettings.value.siol,
    ptSettings.value.ratePercent,
    pRoute.Freshness.FreshLvls[freshLvlKey(pRoute)].percent,
    pRoute.currencyId
  )
  return goldSalary(finSalary, currencyPrices.value, pRoute.currencyId)
}

function profitPerLabor(pRoute) {
  let profit2 = profit(getGoldSalary(pRoute), pRoute.Pack.craftPrice)
  return Math.round(profit2 / pRoute.Pack.laborNeed)
}
// Sorting____________________________________________________________________________
const byTypeOnly = (a, b) => a.Pack.typeId - b.Pack.typeId
const byNameOnly = (a, b) => a.Pack.name.localeCompare(b.Pack.name, 'ru')
const byFromOnly = (a, b) => a.ZoneFrom.name.localeCompare(b.ZoneFrom.name, 'ru')
const byToOnly = (a, b) => a.ZoneTo.name.localeCompare(b.ZoneTo.name, 'ru')
const byFinalSalary = (a, b) => getGoldSalary(b) - getGoldSalary(a)
const byProfit = (a, b) => profit(getGoldSalary(b), b.Pack.craftPrice) - profit(getGoldSalary(a), a.Pack.craftPrice)
const byProfitPerLabor = (a, b) => profitPerLabor(b) - profitPerLabor(a)

const byType = (a, b) => byTypeOnly(a, b) || byName(a, b)
const byName = (a, b) => byNameOnly(a, b) || byFinalSalary(a, b)
const byFrom = (a, b) => byFromOnly(a, b) || byFinalSalary(a, b)
const byTo = (a, b) => byToOnly(a, b) || byFinalSalary(a, b)


const sortedList = computed(() => {
  if (!filteredList.value.length) {
    return []
  }
  switch (ptSettings.value.sort) {
    case 'byType':
      return [...filteredList.value].sort(byType)
    case 'byName':
      return [...filteredList.value].sort(byName)
    case 'byFrom':
      return [...filteredList.value].sort(byFrom)
    case 'byTo':
      return [...filteredList.value].sort(byTo)
    case 'byFinalSalary':
      return [...filteredList.value].sort(byFinalSalary)
    case 'byProfit':
      return [...filteredList.value].sort(byProfit)
    case 'byProfitPerLabor':
      return [...filteredList.value].sort(byProfitPerLabor)
    default:
      return filteredList.value
  }
})
// __________________________________________________________________________________________


</script>

<style scoped>
table {
  width: 100%;
  padding: 1em;
  /*table-layout: fixed;*/
}

table td {
  /*width: max-content;*/
}
table th {
  font-weight: normal;
}
</style>
