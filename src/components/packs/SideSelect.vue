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
        <img :src="'/img/side/' + ptSettings.side + '.png'" alt="" @click.stop.prevent="next">
      </q-avatar>
    </template>
    <template v-slot:append>
      <NavButton
        :active="ptSettings.siol"
        imgBtn="/img/siol.png"
        @click.stop.prevent="ptSettings.siol = !ptSettings.siol"
      ></NavButton>
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
import NavButton from "components/NavButton.vue";

const Sides = [
  {label: 'Запад', value: 1},
  {label: 'Север', value: 3},
  {label: 'Восток', value: 2}
]

function next() {
  const currentIdx = Sides.findIndex(side => side.value === ptSettings.value.side);
  const nextIdx = (currentIdx + 1) % Sides.length;
  ptSettings.value.side = Sides[nextIdx].value;
  emit('selected')
}

const inputClass = ref('Input')
const ptSettings = inject('ptSettings')
const emit = defineEmits(['selected'])
</script>

<style scoped>
.Input {
  min-width: 16em;
  padding: 0 2em;
}
</style>
