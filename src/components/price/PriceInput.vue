<template>
  <q-input
    v-model="Item.Pricing.Price.price"
           filled
           :label="Item.Pricing.Price.label"
           mask="## ## ##"
            ref="priceRef"
            :disable="!!!Item.Pricing.isGoldable"
           reverse-fill-mask
            :rules="[val => !priceErr.length || priceErr]"
  >
    <template v-slot:append>
      <q-btn label="Ok"
             v-if="priceErr === ''"
             class="DefBtn"
             dense
             no-caps
             @click="savePrice()" ></q-btn>
    </template>
  </q-input>
</template>

<script setup>

import {computed, inject, ref} from "vue";
import {api} from "boot/axios";
import {useQuasar} from "quasar";

const q = useQuasar()
const apiUrl = String(process.env.API)
const token = inject('token')
const Item = inject('Item')
const price = ref(12345678)
const priceRef = ref(null)
const priceErr = computed(()=> {
  if(!Item.value.Pricing.Price.price){
    return 'Не вижу'
  }
  return ''
})


function savePrice() {
  priceRef.value.blur()
  api.post(apiUrl + 'api/set/price/price.php', {
    params: {
      token: token.value,
      price: Item.value.Pricing.Price.price,
      itemId: Item.value.id
    }
  })
    .then((response) => {

      if (response.data.result) {
        q.notify({
          color: 'positive',
          position: 'center',
          message: response.data.result,
          timeout: 300,
          closeBtn: 'Закрыть'
        })
        return true
      }

      let msg = 'Ой! Не получается.:('
      if (response.data.error) {
        msg = response.data.error
      }

      q.notify({
        color: 'negative',
        position: 'center',
        message: msg,
        icon: 'report_problem',
        timeout: 300,
        closeBtn: 'Закрыть'
      })
      return false

    })
    .catch((error) => {
      q.notify({
        color: 'negative',
        position: 'center',
        message: 'Сервер не отвечает',
        timeout: 300,
        icon: 'report_problem'
      })
    })
}

</script>

<style scoped>

</style>
