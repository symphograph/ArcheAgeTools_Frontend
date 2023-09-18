<template>
  <div>
    <q-list class="salaryCard">
      <q-item dense>
        <q-item-section>
          <q-item-label lines="1">Фактическая выручка</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-item-label caption>
            <PriceImagerComponent
              :price="finalSalary"
              :currencyId="currencyId"
            ></PriceImagerComponent>
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-item dense v-if="currencyId !== 500">
        <q-item-section>
          <q-item-label lines="1">После продажи</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-item-label caption>
            <PriceImagerComponent
              :price="goldSalary"
              :currencyId="500"
            ></PriceImagerComponent>
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-separator></q-separator>
      <q-item dense>
        <q-item-section>
          <q-item-label lines="1">Основная плата</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-item-label caption>
            <PriceImagerComponent :price="currencyId === 500 ? flatSalary : Math.round(flatSalary/100)" :currencyId="currencyId"></PriceImagerComponent>
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
            <PriceImagerComponent
              :price="Math.round(factoryPrice)"
            >
            </PriceImagerComponent>
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>

  </div>
</template>

<script setup>
import {inject, ref} from "vue";
import PriceImagerComponent from "components/price/PriceImagerComponent.vue";

const props = defineProps({
  testP: ref('fdsafdfsafdf'),
  siol: ref(false),
  ratePercent: ref(130),
  freshPercent: ref(0),
  dbPrice: ref(0),
  currencyId: ref(0),
  goldSalary: ref(0),
  factoryPrice: ref(0),
  flatSalary: ref(0),
  finalSalary: ref(0)
})

const currencyPrices = inject('currencyPrices')



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
