<script setup>
import {inject, ref} from "vue";

const selectedFresh = inject('selectedFresh')
const selectedPack = inject('selectedPack')
const inputClass = ref('Input')
const selectOptionsStyle = inject('selectOptionsStyle')

</script>

<template>
  <q-select :options="selectedPack.Freshness.FreshLvls"
            map-options
            option-value="lvl"
            option-label="name"
            borderless
            dense
            v-model="selectedFresh"
            :class="inputClass"
            @focus="inputClass = 'Input InputActive'"
            @blur="inputClass = 'Input'"
            :popup-content-style="selectOptionsStyle"
  >
    <template v-slot:prepend>
      <q-avatar>
        <img src="/img/time.png">
      </q-avatar>
    </template>
  </q-select>
</template>

<style scoped>
.Input {
  height: max-content;
  max-width: 20em;
  min-width: 15em;
  font-size: 12px;
}
</style>
