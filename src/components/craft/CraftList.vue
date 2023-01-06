<template>
<div>cr</div>
  <template v-if="MainCraft">
    <CraftCard :Craft="MainCraft" :key="MainCraft.id"></CraftCard>
    <q-expansion-item label="Все материалы">
      <q-card class="card">hgh</q-card>
    </q-expansion-item>
  </template>

  <template v-if="CraftList">
    <q-expansion-item label="Другие рецепты">
      <CraftCard v-for="Craft in CraftList" :key="Craft.id" :Craft="Craft"></CraftCard>
    </q-expansion-item>
  </template>
  <template v-else-if="Lost.length">
    <LostList :Lost="Lost"></LostList>
  </template>
  <div v-else>Рецепты не найдены</div>

</template>

<script setup>
import {onMounted, ref, inject, watch} from "vue"
import {api} from 'boot/axios'
import {useQuasar} from 'quasar'
import CraftCard from "components/craft/CraftCard.vue"
import LostList from "components/price/LostList.vue"

const q = useQuasar()
const apiUrl = String(process.env.API)
const token = inject('token')
const Item = inject('Item')
const itemId = inject('itemId')
const MainCraft = ref(null)
const CraftList = ref(null)
const Lost = ref([])

const needUpdate = inject('needUpdate')

watch(needUpdate, () => {
  if(needUpdate.value) {
   loadCrafts()
  }
}, {deep: true})

onMounted(() => {
  loadCrafts()
})

function loadCrafts() {
  Lost.value = [];
  api.post(apiUrl + 'api/get/crafts.php', {
    params: {
      token: token.value,
      itemId: itemId.value
    }
  })
    .then((response) => {
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
        needUpdate.value = false
      }
    })
    .catch(() => {
      CraftList.value = null
      MainCraft.value = null
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
