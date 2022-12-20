<template>
  <div class="MainName">Используется в рецептах:</div>
  <div class="upCraftArea">
    <ItemIcon v-for="item in sortedList"
              :key="item.id"
              :toolText="toolText(item.name, item.personal)"
              :icon="item.icon"
              @click="goToItem(item.id)"
              :grade="item.grade">
    </ItemIcon>
  </div>
</template>

<script setup>
import {inject, ref, computed} from "vue";
import ItemIcon from "components/ItemIcon.vue";
import {useRoute, useRouter} from 'vue-router'

const route = useRoute()
const router = useRouter()
const itemId = inject('itemId')

const props = defineProps({
  CraftResults: ref(null)
})
const sortById = (a, b) => (a.id > b.id) ? 1 : -1
const sortType = ref(0)

function toolText(name,personal) {
  if(personal){
    return name + '<br>' + '<span style="color: gray">Персональный</span>'
  }
  return name
}
const sortedList = computed(() => {
  if (!props.CraftResults.length) {
    return []
  }
  switch (sortType.value) {
    case 0:
      return [...props.CraftResults].sort(sortById)

    default:
      return sortById
  }
})

function goToItem (id) {
  itemId.value = id
}
</script>

<style scoped>
.upCraftArea {
  max-height: 226px;
  /*max-width: 720px;*/
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  padding-bottom: 20px;
}
</style>
