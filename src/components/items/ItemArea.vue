<template>

      <div class="ItemArea" v-if="Item">
        <CraftResults v-if="Item && Item.Info.CraftResults !== undefined"
                      :CraftResults="Item.Info.CraftResults">
        </CraftResults>
        <CraftList v-if="Item.craftable"></CraftList>
        <div v-else>Некрафтабельно</div>
      </div>
</template>

<script setup>

import {inject} from "vue";
import ItemIcon from "components/ItemIcon.vue";
import CraftResults from "components/items/CraftResults.vue"
import CraftList from "components/craft/CraftList.vue"
const Item = inject('Item')
const progress = inject('progress')

</script>

<style scoped>
.ItemArea {
  padding: 1em;
}


</style>
