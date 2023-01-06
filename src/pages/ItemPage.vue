<template>
  <div class="WindowArea column">
    <div class="navigator" ref="navigatorRef">
      <div style="min-width: 20em; width: calc(100% - 20em) ">
        <SearchSelect></SearchSelect>
      </div>
      <div style="width: 20em">
        <q-card class="PriceCard" v-if="Item">
          <PriceInput></PriceInput>
          <div v-if="Item.isTradeNPC ">Продается у NPC:
            <PriceImager :price="Item.Pricing.priceFromNPC" :currencyId="Item.Pricing.currencyId"></PriceImager>
          </div>
        </q-card>

      </div>
    </div>
    <q-scroll-area v-if="Item" class="col" :style="'width: 100%;'">
      <ItemArea v-if="Item.Info"></ItemArea>
    </q-scroll-area>
  </div>
</template>

<script setup>
import {api} from 'boot/axios'
import {LocalStorage, useMeta, useQuasar} from 'quasar'
import {onMounted, ref, provide, inject, watch, computed} from "vue"
import SearchSelect from "components/items/SearchSelect.vue";
import ItemArea from "components/items/ItemArea.vue";
import {useRoute, useRouter} from 'vue-router'
import PriceInput from "components/price/PriceInput.vue";
import PriceImager from "components/price/PriceImager.vue";

const route = useRoute()
const router = useRouter()
const q = useQuasar()
const apiUrl = String(process.env.API)
const token = inject('token')
const price = ref(122345678)
const navigatorRef = ref(null)


const itemId = ref(0)
provide('itemId', itemId)
const Item = ref(null)
provide('Item', Item)
const needUpdate = ref(false)
provide('needUpdate', needUpdate)

const CategoriesList = inject('CategoriesList')

watch(itemId, () => {
  if (itemId.value) {
    route.params.id = itemId.value
    router.push({path: '/item/' + itemId.value})
  } else {
    Item.value = null
  }
}, {deep: true})


watch(route, () => {
  if (route.params.id) {
    itemId.value = route.params.id * 1
    loadItem()
  }
}, {deep: true})

function loadItem() {
  //Item.value = null
  api.post(apiUrl + '/api/get/item.php', {
    params: {
      token: token.value,
      id: itemId.value
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
        needUpdate.value = true
        LocalStorage.set('lastItem', Item.value.id)
      }
    })
    .catch(() => {
      Item.value = null
      q.notify({
        color: 'negative',
        position: 'center',
        message: 'Сервер не отвечает',
        icon: 'report_problem',
        closeBtn: 'Закрыть'
      })
    })
}



function npcPrice() {
  if (Item.value.Pricing.currencyId === 500) {
    return Item.value.Pricing.priceFromNPC
  }
  return Item.value.Pricing.priceFromNPC + String(Item.value.Pricing.currencyId) + '.png'
}


onMounted(() => {
  if (route.params.id) {
    itemId.value = route.params.id * 1
  }else {
    if(LocalStorage.getItem('lastItem')){
      itemId.value = LocalStorage.getItem('lastItem')
    }
  }
})


</script>

<style scoped>
.navigator {
  flex-wrap: wrap;
}

.PriceCard {
  background: none;
}
</style>
