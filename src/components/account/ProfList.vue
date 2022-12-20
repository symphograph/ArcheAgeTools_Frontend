<template>
  <div class="ProfList">
    <template v-for="prof in curAccount.AccSets.Profs" :key="prof.id">
      <ProfSelect :prof="prof"></ProfSelect>
    </template>
  </div>
</template>

<script setup>

import {inject} from "vue";
import ProfSelect from "components/account/ProfSelect.vue";

const curAccount = inject('curAccount')
</script>

<style scoped>
.ProfList {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>
