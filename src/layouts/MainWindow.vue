<script setup>
import {onMounted} from "vue";

onMounted(() => {
  console.log('MainWindow mounted')
})
</script>

<template>
  <div class="WindowArea">
    <router-view/>
  </div>
</template>

<style scoped>
.WindowArea {
  padding: 1em;
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
