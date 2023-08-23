<script setup>
import {api} from 'boot/axios'
import {LocalStorage, useQuasar} from 'quasar'
import {onMounted, ref, provide, inject, watch, computed} from "vue"
import SearchSelect from "components/items/SearchSelect.vue"
import ItemArea from "components/items/ItemArea.vue"
import {useRoute, useRouter} from 'vue-router'
import PriceInput from "components/price/PriceInput.vue"
import PriceImager from "components/price/PriceImager.vue"
import {priceImager} from "src/myFuncts";
import DialogWindow from "components/DialogWindow.vue";


const route = useRoute()
const router = useRouter()
const q = useQuasar()
const $q = useQuasar()
const apiUrl = String(process.env.API)
const token = inject('token')

const curAccount = inject('curAccount')
const Servers = inject('Servers')
const price = ref(122345678)
const categMode = inject('categMode')
const navigatorRef = ref(null)
const progress = ref(false)
provide('progress',progress)


const itemId = ref(0)
provide('itemId', itemId)
const Item = ref(null)
provide('Item', Item)
const needUpdate = ref(false)
provide('needUpdate', needUpdate)
const selectedItem = ref(null)
provide('selectedItem', selectedItem)
const SearchList = ref([])
provide('SearchList', SearchList)
const refItemArea = ref(null)

const CategoriesList = inject('CategoriesList')

watch(route, () => {
  if (route.params.id && SearchList.value.length) {
    //Item.value = null
    refItemArea.value.loadItem()
  }
}, {deep: true})





function npcPrice() {
  if (Item.value.Pricing.currencyId === 500) {
    return Item.value.Pricing.priceFromNPC
  }
  return Item.value.Pricing.priceFromNPC + String(Item.value.Pricing.currencyId) + '.png'
}


onMounted(() => {
  if(!curAccount.value.AccSets.serverGroup){
    goToSettings()
  }
  if (route.params.id) {
    itemId.value = route.params.id * 1
    //refItemArea.value.loadItem()
  }else {
    if(LocalStorage.getItem('lastItem')){
      route.params.id = LocalStorage.getItem('lastItem')
      router.push({ path: '/item/' +  route.params.id })
    }
  }
})

function onSelectItem() {
 categMode.value = false
}

function goToSettings () {
  q.dialog({
    component: DialogWindow,
    componentProps: {
      text: 'Сервер не указан.<br>Перейти в настройки?',
      okBtnText: 'В настройки',
      cancelBtnText: 'Не сейчас'
      // ...more..props...
    },
    cancel: true,
    persistent: true
  }).onOk(() => {
    // console.log('>>>> OK')
  }).onOk(() => {
    router.push('/account')
    // console.log('>>>> second OK catcher')
  }).onCancel(() => {
    //emit('Cancel')
    // console.log('>>>> Cancel')
  }).onDismiss(() => {
    //emit('Dismiss')
    // console.log('I am triggered on both OK and Cancel')
  })
}
</script>

<template>
  <div class="WindowArea column">
    <div class="navigator" ref="navigatorRef">
      <div style="min-width: 20em; width: calc(100% - 20em) ">
        <SearchSelect @iAmSelected="onSelectItem"></SearchSelect>
        <q-item-label style="padding: 0 1em" caption>
          {{ (Item && Item.personal) ? 'Персональный' : 'Передаваемый' }}
        </q-item-label>
      </div>
      <div style="width: 20em">
        <q-card class="PriceCard" v-if="Item">
          <PriceInput :Price="Item.Pricing.Price" @updated="refItemArea.loadItem()"></PriceInput>
          <div v-if="Item.isTradeNPC ">Продается у NPC:
            <PriceImager :price="Item.Pricing.priceFromNPC" :currencyId="Item.Pricing.currencyId"></PriceImager>
          </div>
          <div v-else-if="Item.Pricing.goldable">
            <span v-html="priceImager(Item.Pricing.Price.price)"></span>
          </div>
        </q-card>
      </div>
    </div>
    <q-linear-progress :animation-speed="200"  color="green" :indeterminate="!!progress"></q-linear-progress>
    <q-scroll-area class="col myScrollArea">
      <ItemArea v-if="SearchList.length" ref="refItemArea"
      ></ItemArea>
    </q-scroll-area>
  </div>
</template>

<style scoped>
.navigator {
  flex-wrap: wrap;
}

.PriceCard {
  background: none;
}
</style>
