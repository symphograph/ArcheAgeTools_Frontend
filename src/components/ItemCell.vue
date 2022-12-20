<template>
  <q-item>
    <q-item-section avatar>
      <ItemIcon :icon="icon" :grade="grade" :amount="amount"></ItemIcon>
    </q-item-section>
    <q-item-section>
      <template v-for="(capt, idx) in Captions" :key="idx">
        <q-item-label caption>{{capt}}</q-item-label>
      </template>
      <q-item-label>{{ label }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
import ItemIcon from "components/ItemIcon.vue"
import {ref} from "vue";

const props = defineProps({
  icon: ref(''),
  grade: ref(1),
  amount: ref(null),
  toolText: ref('ggg'),
  label: ref(null),
  Captions: ref([])
})
</script>

<style scoped>

</style>
