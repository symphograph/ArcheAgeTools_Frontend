<template>
  <q-input
    v-model="nPrice.price"
    filled
    :label="label"
    :label-color="priceColor(nPrice.method)"
    mask="## ## ##"
    ref="priceRef"
    :disable="!!!Item.Pricing.isGoldable || disable"
    reverse-fill-mask
    :rules="[val => !priceErr.length || priceErr]"
  >
    <template v-slot:append>
      <q-btn label="Ok"
             v-if="priceErr === '' && !disable"
             class="DefBtn"
             dense
             no-caps
             @click="savePrice()" ></q-btn>
    </template>
  </q-input>
</template>

<script setup>

import {computed, inject, onBeforeMount, onMounted, ref, watch} from "vue";
import {api} from "boot/axios";
import {useQuasar} from "quasar";
import {fDate, priceColor} from "src/myFuncts";

const q = useQuasar()
const apiUrl = String(process.env.API)
const token = inject('token')
const curAccount = inject('curAccount')

const props = defineProps({
  Price: ref(null)
})
const nPrice = ref({...props.Price})

const Item = inject('Item')
const priceRef = ref(null)

watch(props, () => {
  nPrice.value = {...props.Price}
})
const emit = defineEmits(['delPrice', 'updated'])

const disable = computed(() =>{
  switch (true) {
    case nPrice.value.price === null:
      return true
    case nPrice.value.price === undefined:
      return true
    case nPrice.value.method === 'empty':
      return true
    case !!!Item.value.Pricing.isGoldable:
      return true
    default:
      return false
  }
})

const priceErr = computed(()=> {
  if(!curAccount.value.AccSets.serverGroup){
    return 'Сервер не выбран'
  }

  switch (true) {
    case nPrice.value.price === 0:
      return ''
    case nPrice.value.price > 0:
      return ''
    case nPrice.value.price === '':
      return 'Не вижу'
    case nPrice.value.price === undefined:
      return 'Не вижу'
    case nPrice.value.price === null:
      return 'Не вижу'
    default:
      return  ''
  }
})

const label = computed(() => {

  switch (true) {
    case !Item.value.Pricing.isGoldable:
      return 'Нельзя продать'
    case nPrice.value.method === 'byToNPC':
      return 'НПС купит за'
    case !!!nPrice.value.author:
      return 'Неизвестный'
    case !!!curAccount.value.AccSets.serverGroup:
      return 'Сервер не выбран'
    case !disable.value:
      return fDate(nPrice.value.datetime) + ' - ' +  nPrice.value.author
    default:
      return 'Цена не найдена'
  }
})

function savePrice() {
  priceRef.value.blur()
  api.post(apiUrl + 'api/set/price/price.php', {
    params: {
      token: token.value,
      price: nPrice.value.price,
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
        emit('updated')
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
