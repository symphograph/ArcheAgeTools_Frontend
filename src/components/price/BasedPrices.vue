<template>
<div class="PricesArea">
  <template v-for="price in Prices" :key="price.itemId">
    <BasedPriceItem :price="price"></BasedPriceItem>
  </template>
</div>
</template>

<script setup>
import {inject, onMounted, ref} from "vue";
import {api} from "boot/axios";
import {useQuasar} from "quasar";
import BasedPriceItem from "components/price/BasedPriceItem.vue";

const q = useQuasar()
const apiUrl = String(process.env.API)
const token = inject('token')
const curAccount = inject('curAccount')

const Prices = ref(null)
onMounted(() => {
  loadPrices()
})

function loadPrices() {
  api.post(apiUrl + '/api/get/price/based.php', {
    params: {
      token: token.value
    }
  })
    .then((response) => {
      if (response.data.error) {
        q.notify({
          color: 'negative',
          position: 'center',
          message: response.data.error,
          icon: 'report_problem',
          closeBtn: 'Закрыть'
        })
        Prices.value = null
        return false
      }
      if (response.data.result) {
        Prices.value = response.data.data.Prices
      }
    })
    .catch(() => {
      Prices.value = null
      q.notify({
        color: 'negative',
        position: 'center',
        message: 'Сервер не отвечает',
        icon: 'report_problem',
        closeBtn: 'Закрыть'
      })
    })
}
</script>

<style scoped>

</style>
