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

const packTypes = [
  {id: 1, name: 'Обычные', checked: true},
  {id: 6, name: 'Для местных', checked: false},
  {id: 8, name: 'За ДЗ', checked: true},
  {id: 2, name: 'Компост', checked: false},
  {id: 3, name: 'С навеса', checked: false},
  {id: 4, name: 'Растворы', checked: false},
  {id: 5, name: 'Вексельные', checked: false},
  {id: 7, name: 'Трофейные', checked: false}
]
</script>

<style scoped>

</style>
