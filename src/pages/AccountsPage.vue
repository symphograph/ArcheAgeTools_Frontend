<script setup>

import AccountArea from "components/account/AccountArea.vue";
import {useMeta} from "quasar";

const metaData = {
  title: 'Аккаунты',
  meta: {
    viewport:
      {
        name: 'viewport',
        content: 'initial-scale=0.6,width=device-width, user-scalable=yes'
      }
  }
}
useMeta(metaData)

</script>

<template>
<AccountArea></AccountArea>
</template>

<style scoped>

</style>
