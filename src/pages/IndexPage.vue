<template>
  <q-page class="flex flex-center">
    Добро пожаловать!
    <NickInput></NickInput>
    <div style="color: white">{{curAccount}}</div>
  </q-page>
  <div v-for="i in 30" :key="i">
    jhgfjhjgjf {{i}}<br>
  </div>


</template>

<script setup>
import {inject} from "vue";
import NickInput from "components/account/NickInput.vue";

const curAccount = inject('curAccount')
/*
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
*/
</script>
