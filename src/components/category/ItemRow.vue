<template>
  <q-item  tag="label" :to="'/item/' + item.id">
    <q-item-section avatar>
      <ItemIcon :icon="item.icon" :grade="item.grade"></ItemIcon>
    </q-item-section>
    <q-item-section>
      <q-item-label>
        {{item.name}}
      </q-item-label>
      <q-item-label v-if="item.personal" caption>
        Персональный
      </q-item-label>
      <q-item-label v-if="item.craftable" caption>
        Крафтабельный
      </q-item-label>
    </q-item-section>

  </q-item>
</template>

<script setup>

import {ref} from "vue";
import ItemIcon from "components/ItemIcon.vue";

const props = defineProps({
  item: ref(null)
})
</script>

<style scoped>

</style>
