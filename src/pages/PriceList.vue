<template>
  <div class="WindowArea column">
    <div class="navigator" ref="navigatorRef">
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
    </div>
    <q-scroll-area v-if="Prices" class="col" :style="'width: 100%;'">
      <div class="PricesArea">
        <template v-for="price in sortedList" :key="price.itemId">
          <PriceItem :price="price"></PriceItem>
        </template>
      </div>
    </q-scroll-area>
  </div>
</template>

<script setup>

import {api} from "boot/axios";
import {useQuasar} from "quasar";
import {computed, inject, onMounted, ref} from "vue";
import ServerSelect from "components/account/ServerSelect.vue";
import PriceItem from "components/PriceItem.vue";

const q = useQuasar()
const apiUrl = String(process.env.API)
const token = inject('token')
const curAccount = inject('curAccount')
const Prices = ref(null)
const inputClass = ref('Input')

const SortSelected = ref(1)
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


const sortByName = (a, b) => (a.name > b.name) ? 1 : -1
const sortByDate = (a, b) => (a.datetime < b.datetime) ? 1 : -1

const sortedList = computed(() => {
  if (!Prices.value.length) {
    return []
  }
  switch (SortSelected.value) {
    case 1:
      return [...Prices.value].sort(sortByDate)

    case 2:
      return [...Prices.value].sort(sortByName)

    default:
      return Prices.value
  }
})

onMounted(() => {
  loadPrices()
})

function loadPrices() {
  api.post(apiUrl + '/api/get/prices.php', {
    params: {
      token: token.value,
      serverId: curAccount.value.AccSets.serverId
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
.PricesArea {
  padding: 1em;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>
