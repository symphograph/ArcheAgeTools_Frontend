<template>
  <div>{{curAccount}}</div>
</template>

<script setup>
import {inject} from "vue";

const curAccount = inject('curAccount')
</script>

<style scoped>

</style>
