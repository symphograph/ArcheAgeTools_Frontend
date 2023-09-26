<script setup>
import {inject, ref} from "vue";

const props = defineProps({
  cityList: Array,
  cLabel: String
})
const inputClass = ref('Input')
const selectOptionsStyle = inject('selectOptionsStyle')

const options = ref([...props.cityList])
const selectedCity = ref()

const emit = defineEmits(['onSelect'])


function filterFn(val, update, abort) {
  if (val === '') {
    update(() => {
      options.value = [...props.cityList]
    })
    return
  }
  update(() => {
    const needle = val.toLowerCase()
    let List = [...props.cityList]

    if (val) {
      List = [...List].filter(v => v.name.toLowerCase().indexOf(needle) > -1)
    }
    options.value = List
  })
}

function onSelect() {

}
</script>

<template>
  <q-select :options="options"
            borderless
            option-value="kladrId"
            option-label="name"
            map-options
            :class="inputClass"
            @focus="inputClass = 'Input InputActive'"
            @blur="inputClass = 'Input'"
            :popup-content-style="selectOptionsStyle"
            clearable
            fill-input
            hide-selected
            :label="cLabel"
            use-input
            :input-debounce="0"
            @filter="filterFn"
            v-model="selectedCity"
            @update:model-value="emit('onSelect', selectedCity)"
            emit-value
  >
    <template v-slot:option="scope">
        <q-item v-bind="scope.itemProps">
            <q-item-section>
                <q-item-label>{{ scope.opt.name }}</q-item-label>
                <q-item-label caption>{{ scope.opt.address }}</q-item-label>
            </q-item-section>
        </q-item>

    </template>
  </q-select>
</template>

<style scoped>

</style>
