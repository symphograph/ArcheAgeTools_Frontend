<template>
  <q-expansion-item label="Все материалы" popup>
    <div class="MatPool">
      <template v-for="mat in matPool" :key="mat.id">
        <q-btn class="no-padding" dense flat :to="'/item/' + mat.id">
          <ItemIcon :grade="mat.grade ? mat.grade : mat.Item.grade"
                    :icon="mat.Item.icon"
                    :amount="amount(mat.need * resultAmount)"
                    :tool-text="toolTip(mat)"
          >
          </ItemIcon>
        </q-btn>
      </template>
    </div>
  </q-expansion-item>
</template>

<script setup>

import {inject, ref} from "vue"
import ItemIcon from "components/ItemIcon.vue"
import {priceColor, priceImager, priceMethod} from "src/myFuncts.js"

const props = defineProps({
  matPool: ref(null)
})

const resultAmount = inject('resultAmount')
function toolTip(mat) {
  return mat.Item.name
  + '<br>'
  + amount(mat.need  * resultAmount) + 'шт'
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
  padding: 1em;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
</style>
