<template>
  <div class="PricesArea">
    <template v-for="price in sortedList" :key="price.itemId">
      <PriceItemInput :price="price"
                      v-if="priceMember.accountId === curAccount.id"

                      @delPrice="delPrice(price.itemId)"
      ></PriceItemInput>
      <PriceItem v-else :price="price"></PriceItem>
    </template>
  </div>
</template>

<script setup>
import {computed, inject} from "vue";
import {layoutFix} from "src/myFuncts";
import PriceItemInput from "components/price/PriceItemInput.vue";
import PriceItem from "components/price/PriceItem.vue";


const Prices = inject('Prices')
const filters = inject('filters')
const searchText = inject('searchText')
const SortSelected = inject('SortSelected')
const priceMember = inject('priceMember')
const curAccount = inject('curAccount')

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

function delPrice(itemId){
  let Element = Prices.value.find(el => el.itemId === itemId)
  let index = Prices.value.indexOf(Element)
  Prices.value.splice(index,1)
}
</script>

<style scoped>

</style>
