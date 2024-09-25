<template>
  <div class="navigator" ref="navigatorRef">
    <div v-if="priceMember">
      <PriceMasterAva></PriceMasterAva>
    </div>
    <q-select :options="sortOpts"
              v-if="q.platform.is.desktop"
              label="Порядок"
              v-model="SortSelected"
              emit-value
              map-options
              :class="inputClass"
              borderless
              @focus="inputClass = 'Input InputActive'"
              @blur="inputClass = 'Input'"
              :popup-content-style="{ backgroundColor: 'rgb(181 238 8 / 93%)', color: '#4B3A23' }"
    >
    </q-select>
    <div>
      <q-checkbox label="Крафтабельные" v-model="filters.craftable"></q-checkbox>
      <q-checkbox label="Некрафтабельные" v-model="filters.uncraftable"></q-checkbox>
    </div>
    <FilterInput v-if="q.platform.is.desktop"></FilterInput>
    <q-btn v-if="q.platform.is.desktop" class="DefBtn" label="Добавить" to="/item"></q-btn>
  </div>
</template>

<script setup>

import PriceMasterAva from "components/members/PriceMasterAva.vue";
import {api} from "boot/axios";
import {inject, onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import {useQuasar} from "quasar";
import FilterInput from "components/price/FilterInput.vue";
import {notifyError} from "src/js/myFuncts";

const q = useQuasar()
const apiUrl = String(process.env.API)
const route = useRoute()
const inputClass = ref('Input')

const progress = inject('progress')
const curAccount = inject('curAccount')
const priceMember = inject('priceMember')
const SortSelected = inject('SortSelected')
const Prices = inject('Prices')
const filters = inject('filters')
const sortOpts = ref([
  {
    label: 'По дате',
    value: 1
  },
  {
    label: 'По Имени',
    value: 2
  },
  {
    label: 'По ID',
    value: 3
  }
])



onMounted(() => {
  loadPrices()
})

function loadPrices() {
  progress.value = true
  api.post(apiUrl + '/api/price.php', {
    params: {
      method: 'listOfMember',
      accountId: route.params.accId ?? null
    }
  })
    .then((response) => {
      if(!!!response?.data?.result){
        throw new Error();
      }
      Prices.value = response?.data?.data?.Prices ?? []
      priceMember.value = response?.data?.data?.priceMember ?? null
    })
    .catch((error) => {
      Prices.value = []
      q.notify(notifyError(error))
    })
    .finally(() => {
      progress.value = false
    })
}
</script>

<style scoped>
.navigator {
  flex-wrap: wrap;
}
</style>
