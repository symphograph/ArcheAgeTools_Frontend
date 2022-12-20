<template>
  <div>{{curAccount.TeleUser}}</div>
</template>

<script setup>
import {useQuasar} from "quasar";
import {inject} from "vue";

const q = useQuasar()
const apiUrl = String(process.env.API)
const token = inject('token')
const curAccount = inject('curAccount')
</script>

<style scoped>

</style>
