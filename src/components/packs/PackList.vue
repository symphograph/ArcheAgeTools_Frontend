<script setup>

import PackRow from "components/packs/PackRow.vue";
import {computed, inject, nextTick, ref, watch} from "vue";
import {finalSalary, goldSalary, profit} from "src/myJS/price";
import LostList from "components/price/LostList.vue";


const packList = inject('packList')
const Lost = inject('Lost')
const ptSettings = inject('ptSettings')
const selectedTypes = inject('selectedTypes')
const progress = inject('progress')

const selTypeIds = computed(() => {
  return selectedTypes.value.map((el) => {
    return el.id
  })
})

const currencyPrices = inject('currencyPrices')

const sortedList = ref([]);

const filteredList = computed(() => {
  if (!selTypeIds.value.length) {
    return []
  }
  let list = [...packList.value]
  list = list.filter(pRoute => selTypeIds.value.includes(pRoute.Pack.typeId))
  if (ptSettings.value.zoneFromId) {
    list = list.filter(pRoute => pRoute.zoneFromId === ptSettings.value.zoneFromId)
  }
  if (ptSettings.value.zoneToId) {
    list = list.filter(pRoute => pRoute.zoneToId === ptSettings.value.zoneToId)
  }
  return list
})

function freshLvlKey(pRoute) {
  if (ptSettings.value.condition) {
    return pRoute.Freshness.bestLvl
  }
  return pRoute.Freshness.worstLvl
}

function getGoldSalary(pRoute) {
  let finSalary = finalSalary(
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

/*
const byFinalSalary = (a, b) => getGoldSalary(b) - getGoldSalary(a)
const byProfit = (a, b) => profit(getGoldSalary(b), b.Pack.craftPrice) - profit(getGoldSalary(a), a.Pack.craftPrice)
const byProfitPerLabor = (a, b) => profitPerLabor(b) - profitPerLabor(a)
*/

const byType = (a, b) => byTypeOnly(a, b) || byName(a, b)
const byName = (a, b) => byNameOnly(a, b) || byFinalSalary(a, b)
const byFrom = (a, b) => byFromOnly(a, b) || byFinalSalary(a, b)
const byTo = (a, b) => byToOnly(a, b) || byFinalSalary(a, b)


// Функции сортировки, использующие кэшированные значения
const byFinalSalary = (a, b) => b.cachedValues.goldSalary - a.cachedValues.goldSalary;
const byProfit = (a, b) => b.cachedValues.profitValue - a.cachedValues.profitValue;
const byProfitPerLabor = (a, b) => b.cachedValues.profitPerLabor - a.cachedValues.profitPerLabor;


const sortedListOld = computed(() => {
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

async function computeSortedList() {
  console.log('computeSortedList')
  progress.value = true;
  console.log('progress', progress.value)
  await nextTick(); // Обновить UI перед началом вычислений

  // Выполняем тяжелые вычисления
  const list = filteredList.value.map((pRoute) => {
    pRoute.cachedValues = computeCachedValues(pRoute);
    return pRoute;
  });

  let result = [];
  switch (ptSettings.value.sort) {
    case 'byType':
      result = [...list].sort(byType);
      break;
    case 'byName':
      result = [...list].sort(byName);
      break;
    case 'byFrom':
      result = [...list].sort(byFrom);
      break;
    case 'byTo':
      result = [...list].sort(byTo);
      break;
    case 'byFinalSalary':
      result = [...list].sort(byFinalSalary);
      break;
    case 'byProfit':
      result = [...list].sort(byProfit);
      break;
    case 'byProfitPerLabor':
      result = [...list].sort(byProfitPerLabor);
      break;
    default:
      result = list;
      break;
  }

  sortedList.value = result || [];
  progress.value = false;
  console.log('progress', progress.value)
}

// Наблюдаем за изменениями, требующими перерасчета
watch(
  [
    () => filteredList.value,
    () => ptSettings.value.sort,
    () => ptSettings.value.ratePercent,
    () => ptSettings.value.siol,
    () => ptSettings.value.condition,
    () => currencyPrices.value,
  ],
  () => {
    computeSortedList();
  },
  {immediate: true}
);

// _____________________________________________________________________________________________________________________

// Функция для вычисления и кэширования значений
function computeCachedValues(pRoute) {
  const freshLvlKey = ptSettings.value.condition ? pRoute.Freshness.bestLvl : pRoute.Freshness.worstLvl;

  const freshPercent = pRoute.Freshness.FreshLvls[freshLvlKey].percent;

  const flatSalary = Math.round(pRoute.dbPrice / 130 * 100);

  const siolPercent = ptSettings.value.siol && (pRoute.currencyId === 500) ? 5 : 0;

  const factoryPrice = flatSalary * (ptSettings.value.ratePercent / 100) * (1 + siolPercent / 100);

  let finalSalary = factoryPrice * (1 + (freshPercent / 100)) * 1.02;
  if (pRoute.currencyId !== 500) {
    finalSalary /= 100;
  }
  finalSalary = Math.round(finalSalary);

  let goldSalary = finalSalary;
  if (pRoute.currencyId !== 500) {
    goldSalary = Math.round(finalSalary * currencyPrices.value[pRoute.currencyId].price * 0.9);
  }

  const profitValue = goldSalary - pRoute.Pack.craftPrice;
  const profitPerLabor = Math.round(profitValue / pRoute.Pack.laborNeed);

  return {
    freshPercent,
    flatSalary,
    siolPercent,
    factoryPrice,
    finalSalary,
    goldSalary,
    profitValue,
    profitPerLabor,
  };
}


</script>

<template>
  <table v-if="packList.length > 100000000" style="width: 100%">
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
    <template v-if="false">
      <template v-for="pRoute in sortedList" :key="pRoute.itemId + '_' + pRoute.zoneFromId + '_' + pRoute.zoneToId">
        <PackRow :pRoute="pRoute"></PackRow>
      </template>
    </template>
    </tbody>
  </table>

  <q-virtual-scroll
    type="table"
    :items="sortedList"
    virtual-scroll-item-size="79"
    virtual-scroll-slice-size="79"
    :virtual-scroll-sticky-size-start="48"
    :virtual-scroll-sticky-size-end="132"
  >
    <template v-slot:before>
      <thead class="thead-sticky" style="position: sticky; top: 0">
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
    </template>

    <template v-slot="{ item, index }">
      <PackRow
        :pRoute="item"
        :idx="index"
        :key="item.itemId + '_' + item.zoneFromId + '_' + item.zoneToId"
      ></PackRow>
    </template>
  </q-virtual-scroll>


  <LostList v-if="Lost.length" :Lost="Lost" msg="<b>Расчет не получился.</b><br>
    Необходимо знать некоторые цены."></LostList>
</template>

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

.q-markup-table {
  background: none;
}
.thead-sticky{
  position: sticky;
  top: 0;
}
.thead-sticky tr > *,
.tfoot-sticky tr > * {
  position: sticky;
  opacity: 1;
  z-index: 1;
}

.thead-sticky tr:last-child > * {
  top: 0;
}

</style>
