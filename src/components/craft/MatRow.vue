<template>
  <div class="MatRow">
    <ItemIcon :grade="Item.grade"
              :icon="Item.icon"
              :amount="Craft.resultAmount"
              :tool-text="Item.name"
              :size="'70px'"
              @click="goToItem(Item.id)"></ItemIcon>
    <template v-for="mat in Craft.Mats" :key="mat.id">
      <ItemIcon :grade="mat.grade ? mat.grade : mat.Item.grade"
                :icon="mat.Item.icon"
                :amount="mat.need"
                :tool-text="toolTip(mat)"
                @click="goToItem(mat.id)"></ItemIcon>
    </template>
  </div>
</template>

<script setup>

import {inject, ref} from "vue"
import ItemIcon from "components/ItemIcon.vue"
import {priceColor, priceImager} from "src/myFuncts.js"

const itemId = inject('itemId')
const Item = inject('Item')

const props = defineProps({
  Craft: ref(null)
})
//const Craft = inject('Craft')

function toolTip(mat){
  return mat.Item.name
    + '<br>'
    + '<span style="color: ' + priceColor(mat.Price.method) +'">'
    + priceMethod(mat.Price)
    + ':</span><br>'
    + priceImager(mat.Price.price,500)
}

function priceMethod(Price){
  switch (Price.method){
    case 'bySolo':
      return 'Ваша цена'
    case 'byCraft':
      return 'Себестоимость'
    case 'byFromNPC':
      return 'Куплено у НПС'
    case 'byFriends':
      return Price.author
    case 'byWellKnown':
      return Price.author
    case 'byAny':
      return Price.author
    default:
      return 'Неизветно:'
  }
}

function goToItem(id) {
  itemId.value = id
}
</script>

<style scoped>
.MatRow {
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
}
</style>
