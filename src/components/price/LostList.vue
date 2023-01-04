<template>
<q-card class="CraftCard">
  <q-card-section>
    <b>Расчет не получился.</b><br>
    В дочерних рецептах есть неизвестные цены.<br>
    Без них я не могу посчитать и сравнить.
  </q-card-section>
  <q-card-section>
    <div class="PricesArea">
      <LostPriceItem v-for="item in Lost" :key="item.itemId" :price="item"></LostPriceItem>
    </div>
  </q-card-section>
</q-card>
</template>

<script setup>
import {ref} from "vue";
import LostPriceItem from "components/price/LostPriceItem.vue";

const Props = defineProps({
  Lost: ref(null)
})
</script>

<style scoped>
.CraftCard {
  background-color: rgba(211, 238, 144, 0.06);
  box-shadow: 0 0 1em 0 rgb(0 0 0 / 9%);
  margin: 1em 0;
  padding: 1em;
}

.PricesArea {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
