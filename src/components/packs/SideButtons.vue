<script setup>

import NavButton from "components/NavButton.vue";
import {inject} from "vue";

const ptSettings = inject('ptSettings')

const Sides = [
  {
    label: 'Запад',
    value: 1
  },
  {
    label: 'Север',
    value: 3
  },
  {
    label: 'Восток',
    value: 2
  }
]

const emit = defineEmits(['sideSelected'])

function onClick(side) {
  ptSettings.value.side = side
  emit('sideSelected')
}
</script>

<template>
  <template v-for="sd in Sides" :key="sd.value">
    <NavButton :label="sd.label"
               :active="ptSettings.side === sd.value"
               :imgBtn="'/img/side/' + sd.value + '.png'"
               @click="onClick(sd.value)"
    ></NavButton>
  </template>
</template>

<style scoped>

</style>
