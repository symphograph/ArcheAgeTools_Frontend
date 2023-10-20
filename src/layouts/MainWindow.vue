<script setup>
import {onMounted} from "vue";

onMounted(() => {
  console.log('MainWindow mounted')
})
</script>

<template>
  <div class="WindowArea column">
    <router-view/>
  </div>
</template>

<style scoped>
.WindowArea {
  padding: 1em;
}
</style>
