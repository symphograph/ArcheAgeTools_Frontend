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
import {notifyError} from "src/js/myFuncts";

const q = useQuasar()
const apiUrl = String(process.env.API)
const curAccount = inject('curAccount')
const progress = inject('progress')

const disable = computed(() => {
  return curAccount.value.settings.serverGroupId === 100
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
  api.post(apiUrl + '/api/price.php', {
    params: {
      method: 'getBasedList'
    }
  })
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
