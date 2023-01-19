<template>
  <q-list dense v-if="false && packList.length">
    <template v-if="false">
      <q-item dense>
        <q-item-section avatar class="ptCol1">
          <q-radio label="Тип" v-model="sort" val="byType"></q-radio>
        </q-item-section>
        <q-item-section avatar class="ptCol2" style="text-align: center">
          <q-radio label="Имя пака" v-model="sort" val="byName"></q-radio>
        </q-item-section>
        <q-item-section thumbnail class="ptCol3">
          <q-radio label="Откуда" v-model="sort" val="byFrom"></q-radio>
        </q-item-section>
        <q-item-section class="ptCol4">
          <q-radio label="Куда" v-model="sort" val="byTo"></q-radio>
        </q-item-section>
        <q-item-section class="ptCol5">
          <q-radio label="Выручка" v-model="sort" val="byProceeds"></q-radio>
        </q-item-section>
        <q-item-section side class="ptCol6">
          <q-radio label="Прибыль" v-model="sort" val="byProfit"></q-radio>
        </q-item-section>
        <q-item-section side class="ptCol7">
          <q-radio label="Прибыль на 1 ОР" v-model="sort" val="byLaborProfit"></q-radio>
        </q-item-section>
      </q-item>
      <template v-for="pRoute in sortedList" :key="pRoute.itemId + '_' + pRoute.zoneFromId + '_' + pRoute.zoneToId">
        <PackRow :p-route="pRoute"></PackRow>
      </template>
    </template>
  </q-list>

  <table v-if="packList.length" style="width: 100%">
    <thead style="position: sticky; top: 0">
    <tr>
      <th class="ptCol1">
        <q-radio label="Имя пака" val="byName" v-model="sort"></q-radio>
      </th>
      <th style="max-width: 150px" class="mobile-hide">
        <q-radio label="Откуда" val="byFrom" v-model="sort"></q-radio>
      </th>
      <th class="mobile-hide">
        <q-radio label="Куда" val="byTo" v-model="sort"></q-radio>
      </th>
      <th style="min-width: 100px">
        <q-radio label="Выручка" val="byProceeds" v-model="sort"></q-radio>
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
    В дочерних рецептах есть неизвестные цены.<br>
    Без них я не могу посчитать и сравнить."></LostList>
</template>

<script setup>

import PackRow from "components/packs/PackRow.vue";
import {computed, inject, ref} from "vue";
import {layoutFix, profit} from "src/myFuncts";
import ItemIcon from "components/ItemIcon.vue";
import PriceImager from "components/price/PriceImager.vue";
import LostList from "components/price/LostList.vue";

const packList = inject('packList')
const Lost = inject('Lost')

const sort = ref('byName')
const addProfit = inject('addProfit')

const filteredList = computed(() => {
  return packList.value
})

const byTypeOnly = (a, b) => a.Pack.typeId - b.Pack.typeId
const byNameOnly = (a, b) => a.Pack.name.localeCompare(b.Pack.name, 'ru')
const byFromOnly = (a, b) => a.ZoneFrom.name.localeCompare(b.ZoneFrom.name, 'ru')
const byToOnly = (a, b) => a.ZoneTo.name.localeCompare(b.ZoneTo.name, 'ru')
const byProceedsOnly = (a, b) => b.dbPrice - a.dbPrice
const byProfitOnly = (a, b) => profit(b.dbPrice) - profit(a.dbPrice)

const byType = (a, b) => byTypeOnly(a, b) || byName(a, b)
const byName = (a, b) => byNameOnly(a, b) || byProceedsOnly(a, b)
const byFrom = (a, b) => byFromOnly(a, b) || byProceedsOnly(a, b)
const byTo = (a, b) => byToOnly(a, b) || byProceedsOnly(a, b)
const byProceeds = (a, b) => byProceedsOnly(a, b)

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
    case 'byProceeds':
      return [...filteredList.value].sort(byProceeds)
    case 'byProfit':
      return [...filteredList.value].sort(byProfitOnly)
    default:
      return filteredList.value
  }
})

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
