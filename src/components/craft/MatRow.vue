<template>
  <div class="MatRow">
    <q-item dense class="matArea">
      <q-item-section avatar style="width: max-content" class="no-padding">
        <ItemIcon :grade="Item.grade"
                  :icon="Item.icon"
                  :amount="Craft.resultAmount"
                  :tool-text="Item.name"
                  :size="'70px'"
                  @click="goToItem(Item.id)"></ItemIcon>
      </q-item-section>
      <q-item-section class="no-padding" top thumbnail>
        <q-item-label>
          <template v-for="mat in Craft.Mats" :key="mat.id">
            <q-btn class="no-padding" dense flat :to="'/item/' + mat.id">
              <ItemIcon :grade="mat.grade ? mat.grade : mat.Item.grade"
                        :icon="mat.Item.icon"
                        :amount="mat.need"
                        :tool-text="toolTip(mat)"
              ></ItemIcon>
            </q-btn>
          </template>
        </q-item-label>

      </q-item-section>
    </q-item>


  </div>
</template>

<script setup>

import {inject, ref} from "vue"
import ItemIcon from "components/ItemIcon.vue"
import {priceColor, priceImager, priceMethod} from "src/myFuncts.js"

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



function goToItem(id) {
  itemId.value = id
}
</script>

<style scoped>
.MatRow {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.matArea{
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
</style>
