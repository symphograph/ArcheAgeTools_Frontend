<template>
  <q-card class="CraftCard" v-if="Item">
    <div class="CraftInfo">
      <div class="InfoCell">
        <div style="display: flex; justify-content: flex-start">
          <ItemIcon :grade="Craft.Prof.lvl"
                    :locIcon="'/img/profs/' + Craft.Prof.id + '.png'"
                    :tool-text="Craft.Prof.name"
                    :size="'30px'"></ItemIcon>
          <div class="TextBottom">{{ Craft.Prof.name }}</div>

        </div>
        <div class="TextBottom">{{ profNeed(Craft.prof_need) }}</div>
      </div>
    </div>
    <div class="MatRow">
      <ItemIcon :grade="Item.grade"
                :icon="Item.icon"
                :amount="Craft.resultAmount"
                :tool-text="Item.name"
                :size="'70px'"
                @click="goToItem(Item.id)"></ItemIcon>
      <template v-for="mat in Craft.Mats" :key="mat.id">
        <ItemIcon :grade="mat.grade"
                  :icon="mat.Item.icon"
                  :amount="mat.need"
                  :tool-text="mat.Item.name"
                  @click="goToItem(mat.id)"></ItemIcon>
      </template>

    </div>
  </q-card>
</template>

<script setup>


import {inject, ref, watch} from "vue";
import ItemIcon from "components/ItemIcon.vue";
import ItemCell from "components/ItemCell.vue";

const itemId = inject('itemId')
const Item = inject('Item')
const props = defineProps({
  Craft: ref(null)
})

function goToItem(id) {
  itemId.value = id
}

function profNeed(need)
{
  if (!need){
    return ''
  }
  if(need < 1000){
    return need
  }
  return Math.round(need/1000)  + 'k'
}
</script>

<style scoped>
.CraftCard {
  background-color: #efddc3e6;
  margin: 1em 0;
  padding: 1em;
}

.MatRow {
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
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
@media screen and (min-width: 600px){

}

</style>
