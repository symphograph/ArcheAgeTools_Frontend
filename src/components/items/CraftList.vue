<template>
<div>cr</div>
  <template v-if="CraftList">
    <CraftCard v-for="Craft in CraftList" :key="Craft.id" :Craft="Craft"></CraftCard>
  </template>
  <div v-else>Рецепты не найдены</div>

</template>

<script setup>
import {onMounted, ref, provide, inject, watch} from "vue"
import {api} from 'boot/axios'
import {useQuasar} from 'quasar'
import CraftCard from "components/items/CraftCard.vue";

const apiUrl = String(process.env.API)
const Item = inject('Item')
const itemId = inject('itemId')
const CraftList = ref(null)

watch(itemId, () => {
  if(itemId.value) {
    loadCrafts()
  }
}, {deep: true})

onMounted(() => {
  loadCrafts()
})

function loadCrafts() {
  api.post(apiUrl + 'api/get/crafts.php', {
    params: {
      token: '12345',
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
        return false
      }
      if (response.data.result) {
        CraftList.value = response.data.data
      }
    })
    .catch(() => {
      CraftList.value = null
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

</style>
