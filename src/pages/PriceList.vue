<template>
  <div class="WindowArea column">
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
    <q-linear-progress :animation-speed="200"  color="green" :indeterminate="!!progress"></q-linear-progress>
    <q-scroll-area v-if="Prices" class="col" style="width: 100%">
      <div class="PricesArea">
        <template v-for="price in sortedList" :key="price.itemId">
          <PriceItemInput v-if="!route.params.accId || route.params.accId*1 === curAccount.id" :price="price" @delPrice="delPrice(price.itemId)"></PriceItemInput>
          <PriceItem v-else :price="price"></PriceItem>
        </template>
      </div>
    </q-scroll-area>
  </div>
</template>

<script setup>

import {api} from "boot/axios";
import {useQuasar} from "quasar";
import {computed, inject, onMounted, provide, ref} from "vue";
import ServerSelect from "components/account/ServerSelect.vue";
import PriceItem from "components/price/PriceItem.vue";
import {layoutFix} from 'src/myFuncts.js'
import FilterInput from "components/price/FilterInput.vue";
import {useRoute} from "vue-router";
import PriceItemInput from "components/price/PriceItemInput.vue";
import PriceMasterAva from "components/members/PriceMasterAva.vue";

const q = useQuasar()
const apiUrl = String(process.env.API)
const token = inject('token')
const curAccount = inject('curAccount')
const route = useRoute()
const Prices = ref(null)

const priceMember = ref(null)
provide('priceMember', priceMember)

const inputClass = ref('Input')

const progress = ref(false)
provide('progress',progress)

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

const searchText = ref('')
provide('searchText', searchText)

const filters = ref({
  craftable: true,
  uncraftable: true
})

const onlyCraftable = computed(() => {
  if (!filters.value.craftable)
    return []
  let result = Prices.value
  return result.filter(price => price.craftable)
})

const onlyUnCraftable = computed(() => {
  if (!filters.value.uncraftable)
    return []
  let result = Prices.value
  return result.filter(price => !price.craftable)
})

const myFilters = computed(() => {
  if (!Prices.value || !Prices.value.length) {
    return []
  }
  let result = []

  result.push(...onlyCraftable.value)
  result.push(...onlyUnCraftable.value)
  return result
})

const filteredList = computed(() => {
  if (!myFilters.value || !myFilters.value.length) {
    return []
  }
  let result = myFilters.value
  let fixedText = layoutFix(searchText.value)
  if (fixedText !== '') {
    let search = fixedText.toLowerCase()
    result = result.filter(price =>
      price.name.toLowerCase().indexOf(search) !== -1
    )
  }
  return result
})

const sortByName = (a, b) => (a.name > b.name) ? 1 : -1
const sortByDate = (a, b) => (a.datetime < b.datetime) ? 1 : -1

const sortedList = computed(() => {
  if (!filteredList.value.length) {
    return []
  }
  switch (SortSelected.value) {
    case 1:
      return [...filteredList.value].sort(sortByDate)

    case 2:
      return [...filteredList.value].sort(sortByName)

    default:
      return filteredList.value
  }
})

onMounted(() => {
  loadPrices()
})

function delPrice(itemId){
  let Element = Prices.value.find(el => el.itemId === itemId)
  let index = Prices.value.indexOf(Element)
  //console.log(Prices.value.indexOf(Element))
  Prices.value.splice(index,1)
  //Element.del
}

function loadPrices() {
  progress.value = true
  api.post(apiUrl + '/api/get/prices.php', {
    params: {
      token: token.value,
      serverId: curAccount.value.AccSets.serverId,
      accId: route.params.accId
    }
  })
    .then((response) => {
      progress.value = false
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
        priceMember.value = response.data.data.priceMember
      }
    })
    .catch(() => {
      progress.value = false
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
.navigator {
  flex-wrap: wrap;
}


</style>
