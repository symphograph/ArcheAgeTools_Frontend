<template>
      <div class="ItemArea" v-if="Item">
        <CraftResults v-if="Item && Item.Info?.CraftResults"
                      :CraftResults="Item.Info.CraftResults">
        </CraftResults>
        <PriceCard v-if="q.platform.is.mobile"
                   @updated="loadItem"
        ></PriceCard>
        <template v-if="!ItemProgress">
          <CurrencyArea v-if="(Item.currencyId && Item.currencyId !== 500) || Item.categId === 173"></CurrencyArea>
        </template>
        <CraftList v-if="Item?.craftable" ref="refCraftList"></CraftList>
        <div v-if="!Item.craftable">Некрафтабельно</div>
        <div v-if="!ItemProgress && Item.Pricing.isGoldable">
            <PriceHistory></PriceHistory>
        </div>
      </div>
</template>

<script setup>

import {inject, provide, onMounted, ref, nextTick} from "vue";
import CraftResults from "components/items/CraftResults.vue"
import CraftList from "components/craft/CraftList.vue";
import {api} from "boot/axios";
import {LocalStorage, useQuasar} from "quasar";
import {useRoute} from "vue-router";
import CurrencyArea from "components/items/CurrencyArea.vue";
import {notifyError, priceImager} from "src/myFuncts";
import PackCalculator from "components/packs/PackCalculator.vue";
import PriceInput from "components/price/PriceInput.vue";
import PriceImagerComponent from "components/price/PriceImagerComponent.vue";
import PriceCard from "components/items/PriceCard.vue";
import PriceHistory from "components/items/PriceHistory.vue";

const q = useQuasar()
const apiUrl = String(process.env.API)
const route = useRoute()

const Item = inject('Item')
const itemId = inject('itemId')
const progress = inject('progress')
const ItemProgress = inject('ItemProgress')
const PriceHistoryProgress = ref('PriceHistoryProgress')
provide('PriceHistoryProgress', PriceHistoryProgress)
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
  ItemProgress.value = true
  api.post(apiUrl + '/api/item.php', {
    params: {
      method: 'get',
      id: route.params.id
    }
  })
    .then((response) => {
      if(!!!response?.data?.result){
        throw new Error();
      }
      Item.value = response?.data?.data ?? null
      ItemProgress.value = false
      console.log('Item loaded')
      nextTick(() => {
        if(Item.value.craftable){
          refCraftList.value.loadCrafts()
        }
      })

      LocalStorage.set('lastItem', Item.value.id)
    })
    .catch((error) => {
      Item.value = null
      q.notify(notifyError(error))
    })
    .finally(() => {
      progress.value = false
      ItemProgress.value = false
    })
}
</script>

<style scoped>
.ItemArea {
  padding: 1em;
  max-width: 100vw;
}


</style>
