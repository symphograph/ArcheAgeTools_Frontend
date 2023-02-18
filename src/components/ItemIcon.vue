<template>
  <div class="ItemIcon" :style="{ backgroundImage: bgUrl(), width: getSize(), height: getSize() }">
    <q-tooltip v-if="toolText" class="bg-tooltip"><div v-html="toolText"></div></q-tooltip>
    <div class="grade" :style="{ backgroundImage: bgGUrl() }">
      <div class="ItemAmount">{{ amount }}</div>
    </div>
  </div>
</template>

<script setup>
import {computed, ref} from "vue";
const apiUrl = String(process.env.API)

const props = defineProps({
  icon: ref(''),
  locIcon: ref(''),
  grade: ref(1),
  amount: ref(null),
  toolText: ref(''),
  size: ref(null)
})

function getSize() {
  if(!props.size){
    return '45px'
  }
  return props.size
}

function bgUrl() {
  if(props.icon) {
    return "url(" + apiUrl + "img/icons/90/" + props.icon + ")"
  }
  if(props.locIcon) {
    return "url(" + props.locIcon + ")"
  }

}

function bgGUrl() {
  return "url(/img/grade/" + props.grade + ".png)"
}

</script>

<style lang="scss" scoped>
.myTooltip {
  background-color: bisque;
}

.ItemIcon {
  height: 45px;
  /*width: 45px;*/
  background: no-repeat center;
  background-size: contain;
  border: 1px solid white;
  border-radius: 2px;
  /*transition-duration: 200ms;*/
  cursor: pointer;
}

.ItemIcon:hover {
  border: 1px solid gray !important;
}

.ItemIcon > img {
  width: 45px;
  height: 45px;
}

.q-img__content > div {
  padding: 0;
  background: none;
}

.ItemAmount {
  position: absolute;
  color: white;
  font-size: 14px;
  text-shadow: 0 0 2px black;
  bottom: 3px;
  right: 5px;
}

.grade {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
}
</style>
