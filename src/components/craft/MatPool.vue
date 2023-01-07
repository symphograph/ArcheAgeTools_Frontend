<template>
  <div class="MatPool">
    <template v-for="mat in matPool" :key="mat.id">
      <ItemIcon :grade="mat.grade ? mat.grade : mat.Item.grade"
                :icon="mat.Item.icon"
                :amount="amount(mat.need * resultAmount)"
                :tool-text="toolTip(mat)"
      >
      </ItemIcon>
    </template>
  </div>
</template>

<script setup>

import {ref} from "vue"
import ItemIcon from "components/ItemIcon.vue"
import {priceColor, priceImager, priceMethod} from "src/myFuncts.js"

const props = defineProps({
  matPool: ref(null),
  resultAmount: ref(1)
})

function toolTip(mat) {
  return mat.Item.name
  + '<br>'
  + amount(mat.need) + 'шт'
  + '<br>'
  + '<span style="color: ' + priceColor(mat.Price.method) +'">'
  + priceMethod(mat.Price)
  + ':</span><br>'
  + priceImager(mat.Price.price)
  + '<br>'
}

function amount(need){
  return Math.round(need * 10) / 10
}
</script>

<style scoped>
.MatPool {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
</style>
