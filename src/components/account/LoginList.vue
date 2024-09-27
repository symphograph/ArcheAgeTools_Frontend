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
      <div v-bind="scope.itemProps">
        <DynamicFormItem :btnLabel="scope.opt.label"
                         :icon="scope.opt.img"
                         :url="authUrl + scope.opt.url"
        ></DynamicFormItem>
      </div>
  </template>
</q-select>
</template>

<script setup>
import {inject, ref} from "vue";
import DynamicFormItem from "components/account/DynamicFormItem.vue";

const apiUrl = String(process.env.API)
const authUrl = String(process.env.Auth)
const authTypes = inject('authTypes')

const selected = ref(null)

function goTo(url){
  window.location.href = url
}
</script>

<style scoped>

</style>
