<template>
  <q-select label="Материк"
            v-model="ptSettings.side"
            :options="Sides"
            borderless
            map-options
            emit-value
            :popup-content-style="{ backgroundColor: 'rgb(181 238 8 / 93%)', color: '#4B3A23' }"
            :class="inputClass"
            @focus="inputClass = 'Input InputActive'"
            @blur="inputClass = 'Input'"
            @update:modelValue="emit('selected')"
  >
    <template v-slot:prepend v-if="ptSettings.side">
      <q-avatar>
        <img :src="'/img/side/' + ptSettings.side + '.png'" alt="">
      </q-avatar>
    </template>
    <template v-slot:option="scope">
      <q-item v-bind="scope.itemProps">
        <q-item-section avatar>
          <q-avatar>
            <img :src="'/img/side/' + scope.opt.value + '.png'" alt="">
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ scope.opt.label }}</q-item-label>
        </q-item-section>
      </q-item>
    </template>
  </q-select>
</template>

<script setup>

import ItemIcon from "components/ItemIcon.vue";
import {inject, ref} from "vue";

const Sides = inject('Sides')



const inputClass = ref('Input')
const ptSettings = inject('ptSettings')
//const side = inject('side')
const emit = defineEmits(['selected'])
</script>

<style scoped>
.Input {
  max-width: 16em;
}
</style>
