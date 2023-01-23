<template>
      <div class="ItemArea" v-if="Item">
        <CraftResults v-if="Item && Item.Info.CraftResults !== undefined"
                      :CraftResults="Item.Info.CraftResults">
        </CraftResults>
        <CurrencyArea v-if="Item.currencyId && Item.currencyId !== 500"></CurrencyArea>
        <CraftList ref="refCraftList"></CraftList>
        <div v-if="!Item.craftable">Некрафтабельно</div>
      </div>
</template>

<script setup>

import {inject, onMounted, ref} from "vue";
import ItemIcon from "components/ItemIcon.vue";
import CraftResults from "components/items/CraftResults.vue"
import CraftList from "components/craft/CraftList.vue";
import {api} from "boot/axios";
import {LocalStorage, useQuasar} from "quasar";
import {useRoute} from "vue-router";
import CurrencyArea from "components/items/CurrencyArea.vue";

const q = useQuasar()
const apiUrl = String(process.env.API)
const token = inject('token')
const route = useRoute()

const Item = inject('Item')
const itemId = inject('itemId')
const progress = inject('progress')
const refCraftList = ref(null)

defineExpose({
  loadItem
})

onMounted(()=> {
  if(route.params.id){
    loadItem()
  }
})

function loadItem() {
  //Item.value = null
  api.post(apiUrl + '/api/get/item.php', {
    params: {
      token: token.value,
      id: route.params.id
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
        Item.value = null
        return false
      }

      if (response.data.result) {
        Item.value = response.data.data
        LocalStorage.set('lastItem', Item.value.id)

      }
    })
    .catch(() => {
      Item.value = null
      q.notify({
        color: 'negative',
        position: 'center',
        message: 'Сервер не отвечает_ььь',
        icon: 'report_problem',
        closeBtn: 'Закрыть'
      })
    })
    .finally(() => {
      progress.value = false
      if(Item.value.craftable){
        refCraftList.value.loadCrafts()
      }
    })
}
</script>

<style scoped>
.ItemArea {
  padding: 1em;
  max-width: 100vw;
}


</style>
