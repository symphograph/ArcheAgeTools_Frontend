<template>
  <div class="navigator" ref="navigatorRef">
    <div v-if="priceMember">
      <PriceMasterAva></PriceMasterAva>
    </div>
    <ServerSelect @saved="loadPrices()"></ServerSelect>
    <q-select :options="sortOpts"
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
    <FilterInput></FilterInput>
    <q-btn class="DefBtn" label="Добавить" to="/item"></q-btn>
  </div>
</template>

<script setup>

import PriceMasterAva from "components/members/PriceMasterAva.vue";
import ServerSelect from "components/account/ServerSelect.vue";
import {api} from "boot/axios";
import {inject, onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import {useQuasar} from "quasar";
import FilterInput from "components/price/FilterInput.vue";
import {notifyError} from "src/myFuncts";

const q = useQuasar()
const apiUrl = String(process.env.API)
const token = inject('token')
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
  api.post(apiUrl + '/api/get/prices.php', {
    params: {
      serverId: curAccount.value.AccSets.serverId,
      accId: route.params.accId
    }
  })
    .then((response) => {
      if(!!!response?.data?.result){
        throw new Error();
      }
      progress.value = false
      Prices.value = response?.data?.data?.Prices ?? []
      priceMember.value = response?.data?.data?.priceMember ?? null
    })
    .catch((error) => {
      progress.value = false
      Prices.value = []
      q.notify(notifyError(error))
    })
}
</script>

<style scoped>
.navigator {
  flex-wrap: wrap;
}
</style>
