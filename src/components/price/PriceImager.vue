<template>
  <span v-html="priceImager(price, currencyId)"></span>
</template>

<script setup>
import {ref} from "vue";
import {priceImager} from "src/myFuncts.js"
const Props = defineProps({
  price: ref(null),
  currencyId: ref(null)
})
</script>

<style>

</style>
