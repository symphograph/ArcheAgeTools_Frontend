<template>
  <div class="navigator">
    <q-checkbox label="Персональные"
                v-model="myFilters.personal"
    ></q-checkbox>
    <q-checkbox label="Не персональные"
                v-model="myFilters.public"
    ></q-checkbox>
    <q-checkbox label="Крафтабельные"
                :disable="!myFilters.personal && !myFilters.public"
                v-model="myFilters.craftable"
    ></q-checkbox>
    <q-checkbox label="Не крафтабельные"
                :disable="!myFilters.personal && !myFilters.public"
                v-model="myFilters.uncraftable"
    ></q-checkbox>
    <FilterInput></FilterInput>
  </div>
</template>

<script setup>

import {defineComponent, inject, ref} from "vue";
import FilterInput from "components/price/FilterInput.vue";

const props = defineProps({
  filters: ref(null)
})
const myFilters = ref(props.filters)
</script>

<style scoped>
.navigator {
  flex-wrap: wrap;
}
</style>
