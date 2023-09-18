<script setup>

import ItemIcon from "components/ItemIcon.vue";
import {priceColor, priceImager, priceMethod} from "src/myFuncts";
import {ref} from "vue";

const props = defineProps({
  mats: ref([])
})

function toolTip(mat){
  return mat.Item.name
      + '<br>'
      + '<span style="color: ' + priceColor(mat.Price.method) +'">'
      + priceMethod(mat.Price)
      + ':</span><br>'
      + priceImager(mat.Price.price,500)
}
</script>

<template>
  <div class="PackMatsToolTip">
    <template v-for="mat in mats" :key="mat.itemId">
      <ItemIcon :grade="mat.grade ? mat.grade : mat.Item.grade"
                :icon="mat.Item.icon"
                :amount="mat.need"
      ></ItemIcon>
    </template>
  </div>
</template>

<style scoped>
.PackMatsToolTip {
  display: flex;
  flex-wrap: nowrap;
}
</style>
