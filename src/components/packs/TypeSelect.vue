<template>
<q-select :options="packTypes"
          multiple
          v-model="selectedTypes"
          option-label="name"
          option-value="id"
          map-options
          label="Категории"
          display-value=""
          borderless
          :popup-content-style="{ backgroundColor: 'rgb(181 238 8 / 93%)', color: '#4B3A23' }"
          :class="inputClass"
          @focus="inputClass = 'Input InputActive'"
          @blur="inputClass = 'Input'"
>
  <template v-slot:selected>
      <q-avatar v-for="chip in selectedTypes" :key="chip" size="2em">
        <img :src="'/img/packtypes/' + chip.id + '.png'">
      </q-avatar>
  </template>
  <template v-slot:option="{ itemProps, opt, selected, toggleOption }">
    <q-item v-bind="itemProps">
      <q-item-section avatar>
        <q-avatar>
          <img :src="'/img/packtypes/' + opt.id + '.png'">
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label>{{opt.name}}</q-item-label>
      </q-item-section>
      <q-item-section side>
        <q-toggle :model-value="selected"
                  color="green"
                  @update:model-value="toggleOption(opt)" />
      </q-item-section>
    </q-item>
  </template>
</q-select>
</template>
<script setup>

import {inject, ref} from "vue";

const selectedTypes = inject('selectedTypes')
const inputClass = ref('Input')

const packTypes = inject('packTypes')
</script>

<style scoped>
.Input {
  margin: 0.5em;
  min-width: 25em;
}
</style>
