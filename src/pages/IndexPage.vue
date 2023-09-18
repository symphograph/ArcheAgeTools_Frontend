<template>
  <q-page class="flex flex-center">
    Добро пожаловать!
  </q-page>
</template>

<script setup>
import {inject} from "vue";
import NickInput from "components/account/NickInput.vue";

const curAccount = inject('curAccount')

</script>
