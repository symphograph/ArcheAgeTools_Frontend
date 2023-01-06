<template>
  <q-card class="CraftCard" v-if="Item">
    <q-card-section>
      <CraftInfo :Craft="Craft"></CraftInfo>
    </q-card-section>
    <q-card-section>
      <q-item>
        <q-item-section>
          <MatRow :Craft="Craft"></MatRow>
        </q-item-section>
        <q-item-section side>
          <q-btn class="DefBtn" label="Предпочитать" v-if="!Craft.countData.isUBest"></q-btn>
          <q-btn v-else class="DefBtn" label="Сбросить"></q-btn>
        </q-item-section>
      </q-item>
    </q-card-section>

  </q-card>
</template>

<script setup>


import {inject, provide, ref} from "vue";
import CraftInfo from "components/craft/CraftInfo.vue";
import MatRow from "components/craft/MatRow.vue";

const itemId = inject('itemId')
const Item = inject('Item')
const props = defineProps({
  Craft: ref(null)
})
//provide('Craft', props.Craft)



</script>

<style scoped>
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
