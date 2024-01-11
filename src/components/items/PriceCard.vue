<script setup>


import {inject} from "vue";
import PriceInput from "components/price/PriceInput.vue";
import PriceImagerComponent from "components/price/PriceImagerComponent.vue";
import {priceImager} from "src/myJS/price";
const Item = inject('Item')
const emit = defineEmits(['updated'])
</script>

<template>
  <div style="width: 100%">
    <q-card class="PriceCard" v-if="Item">
      <PriceInput :Price="Item.Pricing.Price" @updated="emit('updated')"></PriceInput>
      <div v-if="Item.isTradeNPC ">Продается у NPC:
        <PriceImagerComponent :price="Item.Pricing.priceFromNPC" :currencyId="Item.Pricing.currencyId"></PriceImagerComponent>
      </div>
      <div v-else-if="Item.Pricing.goldable">
        <span v-html="priceImager(Item.Pricing.Price.price)"></span>
      </div>
    </q-card>
  </div>
</template>

<style scoped>
.PriceCard {
  background: none;
}
</style>
