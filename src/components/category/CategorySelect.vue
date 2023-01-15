<template>
  <q-select v-model="route.params.categId"
            :options="List"
            borderless
            option-value="id"
            option-label="name"
            ref="refSelect"
            :popup-content-style="{ backgroundColor: 'rgb(181 238 8 / 93%)', color: '#4B3A23' }"
            @focus="inputClass = 'Input InputActive'"
            @blur="inputClass = 'Input'"
            @update:model-value="onSelect"
            :class="inputClass"
            label="Категория"
            map-options
            emit-value
  ></q-select>
</template>

<script setup>
import {computed, inject, ref} from "vue";
import {useQuasar} from "quasar";
import {useRoute} from "vue-router";

const route = useRoute()
const inputClass = ref('Input')
const emit = defineEmits(['selected'])

const selCategId = inject('selCategId')
const CategoriesList = inject('CategoriesList')
const refSelect = ref(null)

const List = computed(()=> {
  return CategoriesList.value[3].children
})

function onSelect() {
  console.log(route.params.categId)
  refSelect.value.blur()
  emit('selected')
}
</script>

<style scoped>

</style>
