<template>
  <q-item>
    <q-item-section avatar class="ptCol1">
      <ItemIcon
        :amount="'12%'"
        :icon="pRoute.Pack.icon"
        :grade="pRoute.Pack.grade"
        :size="'60px'"
      ></ItemIcon>
    </q-item-section>
    <q-item-section avatar class="ptCol2">
      <q-item-label lines="2" class="packName">
        {{ pRoute.Pack.name }}
      </q-item-label>
      <q-item-label caption>
        {{ pRoute.ZoneFrom.name }}
      </q-item-label>
      <q-item-label caption>
        {{ pRoute.ZoneTo.name }}
      </q-item-label>
    </q-item-section>
    <q-item-section thumbnail class="ptCol3">
      <q-item-label caption>
        {{ pRoute.ZoneFrom.name }}
      </q-item-label>
    </q-item-section>
    <q-item-section class="ptCol4">
      <q-item-label caption>
        {{ pRoute.ZoneTo.name }}
      </q-item-label>
    </q-item-section>
    <q-item-section class="ptCol5">
      <q-item-label caption>
        <PriceImager :price="pRoute.packPrice" :currency-id="pRoute.currencyId"></PriceImager>
      </q-item-label>
    </q-item-section>
    <q-item-section side class="ptCol6">
      <PriceImager :price="pRoute.packPrice" :currency-id="pRoute.currencyId"></PriceImager>
    </q-item-section>
    <q-item-section class="ptCol7" side>
      <q-item-label caption>
        <PriceImager :price="pRoute.packPrice" :currency-id="pRoute.currencyId"></PriceImager>
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>

import {ref} from "vue";
import ItemIcon from "components/ItemIcon.vue";
import PriceImager from "components/price/PriceImager.vue";

const props = defineProps({
  pRoute: ref(null)
})
</script>

<style scoped>
.packName{
  width: 12em;
  font-size: 13px;
}
</style>
