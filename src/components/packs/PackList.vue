<template>
  <q-list dense v-if="packList.length">
    <q-item dense>
      <q-item-section avatar class="ptCol1">
        <q-radio label="Тип" v-model="sort" val="byType"></q-radio>
      </q-item-section>
      <q-item-section avatar class="ptCol2" style="text-align: center">
        <q-radio label="Имя пака" v-model="sort" val="byName"></q-radio>
      </q-item-section>
      <q-item-section thumbnail class="ptCol3">
        <q-radio label="Откуда" v-model="sort" val="byFrom"></q-radio>
      </q-item-section>
      <q-item-section class="ptCol4">
        <q-radio label="Куда" v-model="sort" val="byTo"></q-radio>
      </q-item-section>
      <q-item-section class="ptCol5">
        <q-radio label="Выручка" v-model="sort" val="byProceeds"></q-radio>
      </q-item-section>
      <q-item-section side class="ptCol6">
        <q-radio label="Прибыль" v-model="sort" val="byProfit"></q-radio>
      </q-item-section>
      <q-item-section side class="ptCol7">
        <q-radio label="Прибыль на 1 ОР" v-model="sort" val="byLaborProfit"></q-radio>
      </q-item-section>
    </q-item>
    <template v-for="pRoute in packList" :key="pRoute.itemId + '_' + pRoute.zoneFromId + '_' + pRoute.zoneToId">
      <PackRow :p-route="pRoute"></PackRow>
    </template>
  </q-list>
</template>

<script setup>

import PackRow from "components/packs/PackRow.vue";
import {inject, ref} from "vue";

const packList = inject('packList')

const sort = ref('byName')
const Sorts = [
]
</script>

<style scoped>

</style>
