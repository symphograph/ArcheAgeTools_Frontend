<template>
<q-select v-model="selected"
          :options="authTypes"
          map-options
          label="Войти"
          style="min-width: 16em"
          ref="selector"
          dark
          filled
          option-value="id"
          label-color="grey"
          >
  <template v-slot:option="scope">
    <q-item v-bind="scope.itemProps"
            v-if="scope.opt.id > 1"
            clickable
            :href="apiUrl + scope.opt.url"
            @click="goTo(apiUrl + scope.opt.url)"
    >
      <q-item-section avatar>
        <q-img :src="scope.opt.img"></q-img>
      </q-item-section>
      <q-item-section>
        <q-item-label caption class="text-grey">Войти через</q-item-label>
        <q-item-label>{{ scope.opt.label }}</q-item-label>
      </q-item-section>
    </q-item>
  </template>
</q-select>
</template>

<script setup>
import {inject, ref} from "vue";

const apiUrl = String(process.env.API)
const authTypes = inject('authTypes')

const selected = ref(null)

function goTo(url){
  window.location.href = url
}
</script>

<style scoped>

</style>
