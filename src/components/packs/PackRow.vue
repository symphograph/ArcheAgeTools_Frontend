<template>
  <tr>
    <td class="ptCol1" colspan="2">
      <q-item dense :to="/item/ + pRoute.itemId">
        <q-item-section avatar>
          <q-avatar size="1.5em" style="position: absolute; top: -0.3em; left: 0.5em; z-index: 99">
            <img :src="'/img/packtypes/' + pRoute.Pack.typeId + '.png'" alt="">
          </q-avatar>
          <ItemIcon
            :amount="freshPercent + '%'"
            :icon="pRoute.Pack.icon"
            :grade="pRoute.Pack.grade"
            :size="'60px'"
          ></ItemIcon>
        </q-item-section>
        <q-item-section top>
          <q-item-label lines="2" class="packName">
            {{ pRoute.Pack.name }}
          </q-item-label>
          <q-item-label caption class="mobile-hide">
            {{ pRoute.Freshness.name }}
          </q-item-label>
          <q-item-label caption class="mobile-only">
            {{ pRoute.ZoneFrom.name }}
          </q-item-label>
          <q-item-label caption class="mobile-only">
            {{ pRoute.ZoneTo.name }}
          </q-item-label>
        </q-item-section>
      </q-item>
    </td>
    <td class="mobile-hide" style="text-align: center">
      <q-item-label caption style="text-align: center">
        {{ pRoute.ZoneFrom.name }}
      </q-item-label>
    </td>
    <td class="mobile-hide" style="text-align: center">
      <q-item-label caption>
        {{ pRoute.ZoneTo.name }}
      </q-item-label>
    </td>
    <td style="text-align: center">
      <q-item-label lines="1" style="align-content: center">
        <q-tooltip class="bg-tooltip">
          <SalaryCard :siol="ptSettings.siol"
                      :ratePercent="ptSettings.ratePercent"
                      :freshPercent="freshPercent"
                      :dbPrice="pRoute.dbPrice"
                      :currencyId="pRoute.currencyId"
                      :goldSalary="goldSalary"
                      :factoryPrice="factoryPrice"
                      :flatSalary="flatSalary"
                      :finalSalary="finalSalary"
          ></SalaryCard>
        </q-tooltip>
        <PriceImager :price="finalSalary" :currencyId="pRoute.currencyId"></PriceImager>
      </q-item-label>
    </td>
    <td v-if="ptSettings.addProfit && !progress" style="text-align: right">
      <q-item-label>
        <PriceImager :price="profit" :currency-id="500"></PriceImager>
      </q-item-label>
      <q-item-label caption>
        <PriceImager :price="profitPerLabor" :currency-id="500"></PriceImager>/
        <img style="width: 1em"  src="/img/valuta/2.png">
      </q-item-label>
    </td>
  </tr>
</template>

<script setup>

import {computed, inject, ref} from "vue";
import ItemIcon from "components/ItemIcon.vue";
import PriceImager from "components/price/PriceImager.vue";
//import {profit} from "src/myFuncts.js";
import SalaryCard from "components/packs/SalaryCard.vue";

const props = defineProps({
  pRoute: ref(null)
})

const ptSettings = inject('ptSettings')
const progress = inject('progress')

// const addProfit = inject('addProfit')
// const siol = inject('siol')
// const ratePercent = inject('ratePercent')
// const condition = inject('condition')
const currencyPrices = inject('currencyPrices')



const freshLvlKey = computed(() => {
  if(ptSettings.value.condition){
      return props.pRoute.Freshness.bestLvl
  }
  return props.pRoute.Freshness.worstLvl
})

const freshPercent = computed(() => {
  return props.pRoute.Freshness.FreshLvls[freshLvlKey.value].percent
})

const flatSalary = computed(() => {
  return Math.round(props.pRoute.dbPrice / 130 * 100)
})

const siolPercent = computed(()=> {
  return ptSettings.value.siol && (props.pRoute.currencyId === 500) ? 5 : 0
})

const factoryPrice = computed(()=>{
  let result = flatSalary.value * (ptSettings.value.ratePercent / 100)
  return  result * (1 + siolPercent.value / 100)
})

const finalSalary = computed(()=> {
  let salary = factoryPrice.value * (1 + (freshPercent.value / 100))
  salary *= 1.02 // Стандартная надбавка 2%

  if(props.pRoute.currencyId !== 500){
    salary /= 100
  }
  return Math.round(salary)
})

const goldSalary = computed(() => {
  if(props.pRoute.currencyId === 500){
    return finalSalary.value
  }
  let gold = finalSalary.value * currencyPrices.value[props.pRoute.currencyId].price * 0.9
  return Math.round(gold)
})

const profit = computed(() => {
  return goldSalary.value - props.pRoute.Pack.craftPrice
})

const profitPerLabor = computed(() => {
  return Math.round(profit.value / props.pRoute.Pack.laborNeed)
})
</script>

<style scoped>
.packName{
  width: 12em;
  font-size: 13px;
}
.bg-tooltip {
  width: 250px;
}
</style>
