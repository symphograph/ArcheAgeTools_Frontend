<template>
      <div class="ItemArea" v-if="Item">
        <CraftResults v-if="Item && Item.Info.CraftResults !== undefined"
                      :CraftResults="Item.Info.CraftResults">
        </CraftResults>
        <CurrencyArea v-if="(Item.currencyId && Item.currencyId !== 500) || Item.categId === 173"></CurrencyArea>
        <CraftList ref="refCraftList"></CraftList>
        <div v-if="!Item.craftable">Некрафтабельно</div>
      </div>
</template>

<script setup>

import {inject, onMounted, ref} from "vue";
import CraftResults from "components/items/CraftResults.vue"
import CraftList from "components/craft/CraftList.vue";
import {api} from "boot/axios";
import {LocalStorage, useQuasar} from "quasar";
import {useRoute} from "vue-router";
import CurrencyArea from "components/items/CurrencyArea.vue";
import {notifyError} from "src/myFuncts";

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
  api.post(apiUrl + '/api/get/item.php', {
    params: {
      id: route.params.id
    }
  })
    .then((response) => {
      if(!!!response?.data?.result){
        throw new Error();
      }
      Item.value = response?.data?.data ?? null
      LocalStorage.set('lastItem', Item.value.id)
    })
    .catch((error) => {
      Item.value = null
      q.notify(notifyError(error))
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
