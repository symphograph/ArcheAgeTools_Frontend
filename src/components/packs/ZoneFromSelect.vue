<script setup>

import {computed, inject, ref} from "vue";

const inputClass = ref('Input')
const ptSettings = inject('ptSettings')

const zonesFrom = inject('zonesFrom')

const emit = defineEmits(['onSelect'])



const disabled = inject('disabled')

function onSelect () {
  emit('onSelect')
}
</script>

<template>
  <q-select label="Откуда"
            v-model="ptSettings.zoneFromId"
            :options="zonesFrom"
            :disable="disabled"
            dense
            borderless
            map-options
            emit-value
            option-value="id"
            option-label="name"
            :popup-content-style="{ backgroundColor: 'rgb(181 238 8 / 93%)', color: '#4B3A23' }"
            :class="inputClass"
            @focus="inputClass = 'Input InputActive'"
            @blur="inputClass = 'Input'"
            @update:model-value="onSelect"
  >
  </q-select>
</template>

<style scoped>
.Input {
  height: max-content;
  padding: 1em 2em;
  width: 100%;
  max-width: 200em;
  font-size: 12px;
}
</style>
