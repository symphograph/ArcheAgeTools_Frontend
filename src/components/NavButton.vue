<template>
  <div class="navBtnArea">
    <q-tooltip v-if="toolText" class="bg-tooltip"><div v-html="toolText"></div></q-tooltip>
    <q-btn round push>
      <q-avatar :class="active ? 'navBtn navBtnActive' : 'navBtn'">
        <img :src="imgBtn" :alt="label">
      </q-avatar>
    </q-btn>
    <div class="navBtnLabel">{{ label }}</div>
  </div>
</template>

<script setup>
import {ref} from "vue";

const props = defineProps({
  active: ref(false),
  imgBtn: ref(null),
  label: ref(''),
  toolText: ref('')
})
</script>

<style scoped>
.navBtnArea {

}
.navBtn {
  opacity: 0.4;
  width: 40px;
  height: 40px;
  padding: 0;

}
.navBtn:hover {
  box-shadow: 0 0 4px 2px green;
}
.navBtnLabel {
  text-align: center;
}
.navBtnActive {
  opacity: 1;
}
</style>
