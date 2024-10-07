<script setup>
import {ref} from "vue";
import LostPriceItem from "components/price/LostPriceItem.vue";

const props = defineProps({
  msg: ref(null),
  Lost: ref(null)
})
</script>

<template>
  <q-card class="CraftCard">
    <q-card-section>
      <div v-html="msg"></div>
    </q-card-section>
    <q-card-section>
      <div class="PricesArea">
        <LostPriceItem v-for="item in Lost" :key="item.itemId" :price="item"></LostPriceItem>
      </div>
    </q-card-section>
  </q-card>
</template>

<style scoped>
.CraftCard {
  background-color: rgba(211, 238, 144, 0.06);
  box-shadow: 0 0 1em 0 rgb(0 0 0 / 9%);
  margin: 1em 0;
  padding: 1em;
}

.PricesArea {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
