<template>
  <template v-if="!progress && Item.craftable">
    <template v-if="MainCraft">
      <CraftCard :Craft="MainCraft" :key="MainCraft.id" @setUBest="onSetUBest"></CraftCard>

    </template>
    <div v-else>Рецепты не найдены</div>


    <template v-if="CraftList && CraftList.length">
      <q-expansion-item label="Другие рецепты">
        <CraftCard v-for="Craft in CraftList" :key="Craft.id" :Craft="Craft" @setUBest="onSetUBest"></CraftCard>
      </q-expansion-item>
    </template>
    <template v-if="Lost && Lost.length">
      <LostList :Lost="Lost"></LostList>
    </template>
  </template>


</template>

<script setup>
import {onMounted, ref, inject, watch} from "vue"
import {api} from 'boot/axios'
import {useQuasar} from 'quasar'
import CraftCard from "components/craft/CraftCard.vue"
import LostList from "components/price/LostList.vue"
import MatPool from "components/craft/MatPool.vue";
import {useRoute} from "vue-router";

const q = useQuasar()
const apiUrl = String(process.env.API)
const token = inject('token')
const route = useRoute()
const Item = inject('Item')
const itemId = inject('itemId')
const MainCraft = ref(null)
const CraftList = ref(null)
const Lost = ref([])

const progress = inject('progress')

defineExpose({
  loadCrafts
})

watch(Item, () => {
  if (Item.value && Item.value.craftable) {
    //console.log('watchItem')
    //console.log(Item.value)
   //loadCrafts()
  }else {
    //CraftList.value = null
  }
}, {deep: true})

onMounted(() => {

})

function onSetUBest (){
  loadCrafts()
}

function loadCrafts() {
  if(!Item.value.craftable){
    return
  }
  Lost.value = [];
  progress.value = true
  //CraftList.value = null
  api.post(apiUrl + 'api/get/crafts.php', {
    params: {
      token: token.value,
      itemId: route.params.id
    }
  })
    .then((response) => {
      progress.value = false
      if (response.data.error) {
        q.notify({
          color: 'negative',
          position: 'center',
          message: response.data.error,
          icon: 'report_problem',
          closeBtn: 'Закрыть'
        })
        CraftList.value = null
        MainCraft.value = null
        return false
      }
      if (response.data.result) {
        if(response.data.data.Lost && response.data.data.Lost.length){
          Lost.value = response.data.data.Lost
          CraftList.value = null
          MainCraft.value = null
          return
        }
        CraftList.value = response.data.data.otherCrafts
        MainCraft.value = response.data.data.mainCraft
      }
    })
    .catch(() => {
      CraftList.value = null
      MainCraft.value = null
      progress.value = false
      q.notify({
        color: 'negative',
        position: 'center',
        message: 'Сервер не отвечает',
        icon: 'report_problem',
        closeBtn: 'Закрыть'
      })
    })
}
</script>

<style scoped>
.card {
  background: none;
  box-shadow: 0 0 1em 0 rgb(0 0 0 / 9%);
  padding: 1em;
}
</style>
