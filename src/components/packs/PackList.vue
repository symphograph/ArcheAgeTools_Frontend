<template>
  <table v-if="packList.length" style="width: 100%">
    <thead style="position: sticky; top: 0">
      <tr>
        <th style="max-width: 2em; text-align: left">
          <q-radio label="Тип" val="byType" v-model="sort"></q-radio>
        </th>
        <th style="text-align: left">
          <q-radio label="Имя пака" val="byName" v-model="sort"></q-radio>
        </th>
        <th style="max-width: 150px" class="mobile-hide">
          <q-radio label="Откуда" val="byFrom" v-model="sort"></q-radio>
        </th>
        <th class="mobile-hide">
          <q-radio label="Куда" val="byTo" v-model="sort"></q-radio>
        </th>
        <th style="min-width: 100px">
          <q-radio label="Выручка" val="byFinalSalary" v-model="sort"></q-radio>
        </th>
        <th v-if="addProfit" style="min-width: 100px">
          <q-radio label="Прибыль" val="byProfit" v-model="sort"></q-radio>
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
import {finalSalary, goldSalary, layoutFix, profit} from "src/myFuncts";
import ItemIcon from "components/ItemIcon.vue";
import PriceImager from "components/price/PriceImager.vue";
import LostList from "components/price/LostList.vue";

const packList = inject('packList')
const Lost = inject('Lost')

const sort = inject('sort')
const siol = inject('siol')
const ratePercent = inject('ratePercent')
const condition = inject('condition')
const addProfit = inject('addProfit')
const selectedTypes = inject('selectedTypes')
const zoneFromId = inject('zoneFromId')
const zoneToId = inject('zoneToId')

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
  if(zoneFromId.value){
    list = list.filter(pRoute => pRoute.zoneFromId === zoneFromId.value)
  }
  if(zoneToId.value){
    list = list.filter(pRoute => pRoute.zoneToId === zoneToId.value)
  }
  return list
})

function freshLvlKey(pRoute) {
  if(condition.value){
    return pRoute.Freshness.bestLvl
  }
  return pRoute.Freshness.worstLvl
}

function getGoldSalary(pRoute){
  let finSalary =   finalSalary(
    pRoute.dbPrice,
    siol.value,
    ratePercent.value,
    pRoute.Freshness.FreshLvls[freshLvlKey(pRoute)].percent,
    pRoute.currencyId
  )
  return goldSalary(finSalary, currencyPrices.value, pRoute.currencyId)
}
// Sorting____________________________________________________________________________
const byTypeOnly = (a, b) => a.Pack.typeId - b.Pack.typeId
const byNameOnly = (a, b) => a.Pack.name.localeCompare(b.Pack.name, 'ru')
const byFromOnly = (a, b) => a.ZoneFrom.name.localeCompare(b.ZoneFrom.name, 'ru')
const byToOnly = (a, b) => a.ZoneTo.name.localeCompare(b.ZoneTo.name, 'ru')
const byFinalSalary = (a, b) => getGoldSalary(b) - getGoldSalary(a)
const byProfit = (a, b) => profit(getGoldSalary(b), b.Pack.craftPrice) - profit(getGoldSalary(a), a.Pack.craftPrice)

const byType = (a, b) => byTypeOnly(a, b) || byName(a, b)
const byName = (a, b) => byNameOnly(a, b) || byFinalSalary(a, b)
const byFrom = (a, b) => byFromOnly(a, b) || byFinalSalary(a, b)
const byTo = (a, b) => byToOnly(a, b) || byFinalSalary(a, b)


const sortedList = computed(() => {
  if (!filteredList.value.length) {
    return []
  }
  switch (sort.value) {
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
