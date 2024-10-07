<script setup>
import {computed, inject, ref} from "vue";
import ItemIcon from "components/ItemIcon.vue";

const loading = inject('loading')
const ptSettings = inject('ptSettings')
const filteredPackList = inject('filteredPackList')
const options = ref([...filteredPackList.value])
const selectedPack = inject('selectedPack')
const selectOptionsStyle = inject('selectOptionsStyle')
const optionsStyle = computed(() => {
  let style = selectOptionsStyle
  if(!style) return {};
  style.width = '10em'
  console.log(style)
  return style
})

const filteredByText = ref([])
const emit = defineEmits(['onSelect'])

function filterFn (val, update, abort) {
  if (val === '') {
    update(() => {
      options.value = [...filteredPackList.value]
    })
    return
  }

  update(() => {
    const needle = val.toLowerCase()
    let List = [...filteredPackList.value]

    if(val){
      List = [...List].filter(v => v.Pack.name.toLowerCase().indexOf(needle) > -1)
    }
    options.value = List
  })
}

function clear() {
  selectedPack.value = null
  ptSettings.value.zoneFromId = 0
  ptSettings.value.zoneToId = 0
}
</script>

<template>
<q-select :options="options"
          v-if="filteredPackList.length"
          v-model="selectedPack"
          :popup-content-style="optionsStyle"
          popup-content-class="popup"
          :loading="loading"
          :disable="loading"
          label-slot
          use-input
          fill-input
          map-options
          item-aligned
          option-value="id"
          option-label="name"
          hide-selected
          @filter="filterFn"
          @update:model-value="emit('onSelect')"

>
  <template v-slot:label>
    <q-item>
      <q-item-section>
        <q-item-label caption>{{ selectedPack?.ZoneFrom?.name ?? '' }}</q-item-label>
        <q-item-label caption>{{ selectedPack?.ZoneTo?.name ?? '' }}</q-item-label>
      </q-item-section>
    </q-item>
  </template>
  <template v-if="selectedPack" v-slot:prepend>
    <ItemIcon
        :icon="selectedPack.Pack.icon"
        :grade="selectedPack.Pack.grade"
        :size="'60px'"
    ></ItemIcon>
  </template>

  <template v-slot:selected>
    <q-item v-if="Object.keys(selectedPack.value).length"
            dense
    >
      <q-item-section avatar>лорпл

      </q-item-section>
      <q-item-section>
        <q-item-label>{{selectedPack.Pack.name}}</q-item-label>
        <q-item-label caption>{{selectedPack.ZoneFrom.name}}</q-item-label>
        <q-item-label caption>{{selectedPack.ZoneTo.name}}</q-item-label>
      </q-item-section>
    </q-item>
  </template>
  <template v-if="selectedPack" v-slot:append>
    <q-icon name="cancel" @click.stop.prevent="clear" class="cursor-pointer" />
  </template>
  <template v-slot:option="scope">
    <q-item v-bind="scope.itemProps" dense>
      <q-item-section avatar>
        <q-avatar size="1.5em" style="position: absolute; top: -0.3em; left: 0.5em; z-index: 99">
          <img :src="'/img/packtypes/' + scope.opt.Pack.typeId + '.png'" alt="">
        </q-avatar>
        <ItemIcon
            :icon="scope.opt.Pack.icon"
            :grade="scope.opt.Pack.grade"
            :size="'60px'"
        ></ItemIcon>
      </q-item-section>
      <q-item-section>
        <q-item-label lines="2">{{scope.opt.Pack.name}}</q-item-label>
        <q-item-label caption>{{scope.opt.ZoneFrom.name}}</q-item-label>
        <q-item-label caption>{{scope.opt.ZoneTo.name}}</q-item-label>
      </q-item-section>

    </q-item>
  </template>
</q-select>
</template>

<style scoped>
.popup {
  width: 2em;
  color: red;
}
</style>
