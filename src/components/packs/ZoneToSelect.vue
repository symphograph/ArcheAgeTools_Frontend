<template>
  <q-select label="Куда"
            ref="refZonesTo"
            v-model="ptSettings.zoneToId"
            :options="zonesTo"
            :disable="disabled"
            dense
            borderless
            map-options
            emit-value
            option-value="id"
            option-label="name"
            :class="inputClass"
            @focus="inputClass = 'Input InputActive'"
            @blur="inputClass = 'Input'"
            :popup-content-style="{ backgroundColor: 'rgb(181 238 8 / 93%)', color: '#4B3A23' }"
  ></q-select>
</template>

<script setup>

import {inject, ref} from "vue";

const ptSettings = inject('ptSettings')

const inputClass = ref('Input')

const zonesTo = inject('zonesTo')
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
