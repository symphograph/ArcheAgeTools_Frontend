<script setup>

import {inject, ref} from "vue";

const ptSettings = inject('ptSettings')

const inputClass = ref('Input')

const zonesTo = inject('zonesTo')
const disabled = inject('disabled')
const selectOptionsStyle = inject('selectOptionsStyle')
const emit = defineEmits(['onSelect'])
</script>

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
            :popup-content-style="selectOptionsStyle"
            @update:model-value="emit('onSelect')"
  ></q-select>
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
