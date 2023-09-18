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
import {fDate, notifyError, notifyOK, priceColor} from "src/myFuncts";

const q = useQuasar()
const apiUrl = String(process.env.API)
const curAccount = inject('curAccount')
const AccSets = inject('AccSets')

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
    case !!!AccSets.value.serverGroupId:
      return true
    case !!!Item.value.Pricing.isGoldable:
      return true
    default:
      return false
  }
})

const priceErr = computed(()=> {
  if(!AccSets.value.serverGroupId){
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
    case nPrice.value.method === 'empty':
      return 'Цена не найдена'
    case !!!nPrice.value.author:
      return 'Неизвестный'
    case !!!AccSets.value.serverGroupId:
      return 'Сервер не выбран'
    case !disable.value:
      return fDate(nPrice.value.updatedAt) + ' - ' +  nPrice.value.author
    default:
      return 'Цена не найдена'
  }
})

function savePrice() {
  priceRef.value.blur()
  api.post(apiUrl + 'api/set/price/price.php', {
    params: {
      price: nPrice.value.price,
      itemId: Item.value.id
    }
  })
    .then((response) => {
      if(!!!response?.data?.result){
        throw new Error();
      }
      q.notify(notifyOK(response?.data?.result ?? 'Ой!'))
      emit('updated')
    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
}

</script>

<style scoped>

</style>
