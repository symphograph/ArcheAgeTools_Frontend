<template>
  <q-page class="flex flex-center">
    Добро пожаловать!

  </q-page>
  <div v-for="i in 30" :key="i">
    jhgfjhjgjf {{i}}<br>
  </div>


</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>
