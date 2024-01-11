<template>
  <span :class="'no-wrap' + ((price > 0) ? '' : ' red')" v-html="priceImager(price, currencyId)"></span>
</template>

<script setup>
import {ref} from "vue";
import {priceImager} from "src/myJS/price.js";
const Props = defineProps({
  price: ref(null),
  currencyId: ref(null)
})
</script>

<style scoped>
.red {
  color: red;
}
.no-wrap {
  cursor: default;
}
</style>
