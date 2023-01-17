<template>
  <q-select label="Откуда"
            v-model="zoneFromId"
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
  >
  </q-select>
</template>

<script setup>

import {computed, inject, ref} from "vue";

const inputClass = ref('Input')
const zoneFromId = inject('zoneFromId')
const zonesFrom = inject('zonesFrom')
const side = inject('side')
const selectedTypes = inject('selectedTypes')

const disabled = inject('disabled')
</script>

<style scoped>
.Input {
  height: max-content;
  max-width: 20em;
  min-width: 15em;
  font-size: 12px;
}
</style>
