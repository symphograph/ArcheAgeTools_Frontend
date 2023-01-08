<template>
  <q-card class="CraftCard"
          v-if="Item && !progress"
          transition-show="jump-down"
          transition-hide="jump-up"
  >
    <q-card-section>
      <CraftInfo :Craft="Craft"></CraftInfo>
    </q-card-section>
    <q-card-section>
      <div class="wrapContainer">
        <div class="wrapElement">
          <MatRow :Craft="Craft"></MatRow>
        </div>
        <div class="wrapElement">
          <q-btn class="DefBtn" label="Предпочитать" v-if="!Craft.countData.isUBest"></q-btn>
          <q-btn v-else class="DefBtn" label="Сбросить"></q-btn>
        </div>
      </div>
    </q-card-section>
    <q-card-section>
      <q-expansion-item class="CraftCard" label="Все материалы" popup default-opened>
        <q-card class="CraftCard">
          <MatPool :matPool="Craft.matPool"></MatPool>
        </q-card>
      </q-expansion-item>
    </q-card-section>
  </q-card>
</template>

<script setup>


import {inject, provide, ref} from "vue";
import CraftInfo from "components/craft/CraftInfo.vue";
import MatRow from "components/craft/MatRow.vue";
import MatPool from "components/craft/MatPool.vue";


const itemId = inject('itemId')
const Item = inject('Item')
const props = defineProps({
  Craft: ref(null)
})
const progress = inject('progress')
//const resultAmount = ref(props.Craft.resultAmount)
provide('resultAmount', props.Craft.resultAmount)

</script>

<style scoped>
.wrapContainer{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.wrapElement {
  padding: 1em;
}
.listItem {
  min-height: 1px;
}
.CraftCard {
  background-color: rgba(211, 238, 144, 0.06);
  box-shadow: 0 0 1em 0 rgb(0 0 0 / 9%);
  margin: 1em 0;
  padding: 1em;
}



.CraftInfo {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.InfoCell {
  display: flex;
  justify-content: space-between;
  min-width: 250px;
}
.TextBottom {
  height: 100%;display: flex; align-items: flex-end;
}

.DefBtn {
  font-size: 12px;
}
@media screen and (min-width: 600px){

}

</style>
