<template>
  <q-input v-model="searchText"
           class="Input"
           style="width: 100%"
           label="фильтр"
           borderless
  >
    <template v-slot:prepend>
      <q-icon name="search"></q-icon>
    </template>
    <template v-slot:append>
      <q-icon v-if="searchText !== ''" name="close" @click="searchText = ''" class="cursor-pointer"></q-icon>
    </template>
  </q-input>
</template>

<script setup>
import {inject} from "vue";

const searchText = inject('searchText')
</script>

<style scoped>

</style>
