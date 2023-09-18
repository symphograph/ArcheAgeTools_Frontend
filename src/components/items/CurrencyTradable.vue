<template>
    <div class="itemIconsArea">
      <template v-for="item in sortedList" :key="item.id">
        <q-btn class="no-padding" dense flat :to="'/item/' + item.id">
          <ItemIcon
            :icon="item.icon"
            :grade="item.grade"
            :tool-text="item.name"
          ></ItemIcon>
        </q-btn>
      </template>
    </div>
</template>

<script setup>
import {computed, inject, onBeforeUpdate, onMounted, ref, watch} from "vue";
import {api} from "boot/axios";
import {useQuasar} from "quasar";
import {useRoute} from "vue-router";
import ItemIcon from "components/ItemIcon.vue";


const q = useQuasar()
const apiUrl = String(process.env.API)
const route = useRoute()
const progress = inject('progress')
const Item = inject('Item')



const List = inject('TradableItems')

const sortByCategId = (a, b) => (a.categId > b.categId) ? 1 : -1
const sortType = ref(0)
const sortedList = computed(() => {
  if (!List.value) {
    return []
  }
  switch (sortType.value) {
    case 0:
      return [...List.value].sort(sortByCategId)

    default:
      return sortByCategId
  }
})

</script>

<style scoped>

</style>
