<template>
  <template v-if="!progress && Item.craftable">
    <template v-if="MainCraft">
      <CraftCard :Craft="MainCraft" :key="MainCraft.id" @setUBest="onSetUBest"></CraftCard>

    </template>
    <div v-else>Рецепты не найдены</div>


    <template v-if="CraftList.length">
      <q-expansion-item label="Другие рецепты" popup>
        <CraftCard v-for="Craft in CraftList" :key="Craft.id" :Craft="Craft" @setUBest="onSetUBest"></CraftCard>
      </q-expansion-item>
    </template>
    <template v-if="Lost && Lost.length">

      <LostList :Lost="Lost" msg="<b>Расчет не получился.</b><br>
    В дочерних рецептах есть неизвестные цены.<br>
    Без них я не могу посчитать и сравнить."></LostList>
    </template>
  </template>


</template>

<script setup>
import {onMounted, ref, inject, watch, computed, provide} from "vue"
import {api} from 'boot/axios'
import {useQuasar} from 'quasar'
import CraftCard from "components/craft/CraftCard.vue"
import LostList from "components/price/LostList.vue"
import MatPool from "components/craft/MatPool.vue";
import {useRoute} from "vue-router";
import {notifyError} from "src/myFuncts";

const q = useQuasar()
const apiUrl = String(process.env.API)
const token = inject('token')
const route = useRoute()
const Item = inject('Item')
const itemId = inject('itemId')
const MainCraft = ref(null)
const CraftList = ref([])
const Lost = ref([])

const progress = inject('progress')
const isSingleCraft = computed(()=> {
  return !(CraftList.value && CraftList.value.length);
})
provide('isSingleCraft', isSingleCraft)

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
      itemId: route.params.id
    }
  })
    .then((response) => {
      if(!!!response?.data?.result){
        throw new Error();
      }

      progress.value = false

      if(!!response?.data?.data?.Lost?.length){
        Lost.value = response?.data?.data?.Lost ?? []
        CraftList.value = []
        MainCraft.value = null
        return
      }

      CraftList.value = response?.data?.data?.otherCrafts ?? []
      MainCraft.value = response?.data?.data?.mainCraft ?? null
    })
    .catch((error) => {
      CraftList.value = []
      MainCraft.value = null
      progress.value = false
      q.notify(notifyError(error, 'Ой! CraftList Не работает :('))
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
