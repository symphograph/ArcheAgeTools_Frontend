<template>
<div class="PricesArea">
  <template v-for="price in Prices" :key="price.itemId">
    <BasedPriceItem :price="price"></BasedPriceItem>
  </template>
</div>
</template>

<script setup>
import {computed, inject, onMounted, provide, ref} from "vue";
import {api} from "boot/axios";
import {useQuasar} from "quasar";
import BasedPriceItem from "components/price/BasedPriceItem.vue";
import {notifyError} from "src/myFuncts";

const q = useQuasar()
const apiUrl = String(process.env.API)
const token = inject('token')
const curAccount = inject('curAccount')
const AccSets = inject('AccSets')
const ServerGroup = inject('ServerGroup')
const progress = inject('progress')

const disable = computed(() => {
  return !!!ServerGroup.value
})
provide('disable', disable)

const Prices = ref(null)
onMounted(() => {
  loadPrices()
})

defineExpose({
  loadPrices
})

function loadPrices() {
  api.post(apiUrl + '/api/get/price/based.php')
    .then((response) => {
      if(!!!response?.data?.result){
        throw new Error();
      }
      Prices.value = response?.data?.data?.Prices ?? []
    })
    .catch((error) => {
      Prices.value = []
      q.notify(notifyError(error))
    })
}
</script>

<style scoped>

</style>
