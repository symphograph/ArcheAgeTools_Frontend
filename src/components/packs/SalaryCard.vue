<template>
  <div>
    <q-list class="salaryCard">
      <q-item dense>
        <q-item-section>
          <q-item-label lines="1">Фактическая выручка</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-item-label caption>
            <PriceImager
              :price="finalSalary(dbPrice, siol, ratePercent, freshPercent, currencyId)"
              :currencyId="currencyId"
            ></PriceImager>
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-item dense>
        <q-item-section>
          <q-item-label lines="1">Основная плата</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-item-label caption>
            <PriceImager :price="flatSalary(dbPrice)"></PriceImager>
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-item dense>
        <q-item-section>
          <q-item-label>Льгота</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-item-label caption>{{ siol ? 5 : 0 }}%</q-item-label>
        </q-item-section>
      </q-item>
      <q-item dense>
        <q-item-section>
          <q-item-label>Ставка</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-item-label caption>{{ ratePercent }}%</q-item-label>
        </q-item-section>
      </q-item>
      <q-item dense>
        <q-item-section>
          <q-item-label>Срок годности</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-item-label caption>{{ 100 + freshPercent }}%</q-item-label>
        </q-item-section>
      </q-item>
      <q-item dense>
        <q-item-section>
          <q-item-label>Дополнительная надбавка</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-item-label caption>2%</q-item-label>
        </q-item-section>
      </q-item>
      <q-separator v-if="currencyId === 500"></q-separator>
      <q-item dense v-if="currencyId === 500">
        <q-item-section>
          <q-item-label>В списке фактории</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-item-label caption>
            <PriceImager
              :price="Math.round(factoryPrice(flatSalary(dbPrice), siol, ratePercent))"
            >
            </PriceImager>
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>

  </div>
</template>

<script setup>
import {ref} from "vue";
import PriceImager from "components/price/PriceImager.vue";

const props = defineProps({
  testP: ref('fdsafdfsafdf'),
  siol: ref(false),
  ratePercent: ref(130),
  freshPercent: ref(0),
  dbPrice: ref(0),
  currencyId: ref(0)
})

function flatSalary(dbPrice)
{
  return Math.round(dbPrice / 130 * 100)
}

function factoryPrice(flatSalary, siol, ratePercent, currencyId){
  let siolPercent = siol && (currencyId === 500) ? 5 : 0
  let result = flatSalary * (ratePercent / 100)
  return  result * (1 + siolPercent / 100)
}

function finalSalary(dbPrice, siol, ratePercent, freshPercent, currencyId){
  let factPrice = factoryPrice(flatSalary(dbPrice), siol, ratePercent)
  let salary = factPrice * (1 + (freshPercent / 100))
  salary = salary * 1.02 // Стандартная надбавка 2%

  if(currencyId !== 500){
    salary /= 100
  }
  return Math.round(salary)
}
</script>

<style scoped>
.salaryCard {
  text-align: left;
}
.q-item {
  min-height: 0;
  padding: 0;
}
</style>
