<template>
  <q-item dense>
    <q-item-section avatar>
      <q-btn dense flat :to="'/item/' + member.LastPricedItem.id">
        <ItemIcon :icon="member.LastPricedItem.icon"
                  :grade="member.LastPricedItem.grade"
        ></ItemIcon>
      </q-btn>
    </q-item-section>
    <q-item-section avatar>
      <q-item-label caption>{{ fDate(member.LastPricedItem.Price.datetime) }}</q-item-label>
      <q-item-label>{{ member.LastPricedItem.name }}</q-item-label>
      <q-item-label>
        <PriceImager :currencyId="500" :price="member.LastPricedItem.Price.price"></PriceImager>
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>

import {ref} from "vue";
import {fDate} from "src/myFuncts.js"
import PriceImager from "components/price/PriceImager.vue";
import ItemIcon from "components/ItemIcon.vue";

const props = defineProps({
  member: ref(null)
})
</script>

<style scoped>

</style>
