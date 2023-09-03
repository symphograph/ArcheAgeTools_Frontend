<script setup>
import {inject, ref} from "vue";

const sortOptions = inject('sortOptions')
const ptSettings = inject('ptSettings')
const selectOptionsStyle = inject('selectOptionsStyle')
const inputClass = ref('Input')
</script>

<template>
  <q-select :options="sortOptions"
            v-model="ptSettings.sort"
            map-options
            emit-value
            borderless
            label="Сортировать по"
            :popup-content-style="selectOptionsStyle"
            :class="inputClass"
            @focus="inputClass = 'Input InputActive'"
            @blur="inputClass = 'Input'"
  >

  </q-select>
</template>

<style scoped>
.Input {
  margin: 0.5em;
  min-width: 15em;
}
</style>
