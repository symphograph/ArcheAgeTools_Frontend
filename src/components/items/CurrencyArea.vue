<script setup>
import {computed, inject, onBeforeUpdate, onMounted, provide, ref, watch} from "vue";
import {api} from "boot/axios";
import {useQuasar} from "quasar";
import {useRoute} from "vue-router";
import ItemIcon from "components/ItemIcon.vue";
import PriceItemInput from "components/price/PriceItemInput.vue";
import PriceImagerComponent from "components/price/PriceImagerComponent.vue";
import CurrencyTradable from "components/items/CurrencyTradable.vue";
import PriceCurrencyItem from "components/price/PriceCurrencyItem.vue";
import LostList from "components/price/LostList.vue";
import {notifyError} from "src/js/myFuncts";
import MainPriceItem from "components/price/MainPriceItem.vue";

const q = useQuasar()
const apiUrl = String(process.env.API)
const route = useRoute()
const progress = inject('progress')
const CurrencyProgress = inject('CurrencyProgress')
const Item = inject('Item')


const Currency = ref(null)
const TradableItems = computed(() => {
  if (!Currency.value) {
    return [];
  }
  return Currency.value.TradableItems
})

const currencyId = computed(() => {
  if(Item.value.categId === 173){
    return Item.value.id
  }
  return Item.value.currencyId
})
provide('TradableItems', TradableItems)

watch(Item, () => {
  if (Item.value) {
    //console.log('updated')
    loadList()
  }
}, {deep: true})

onMounted(() => {
  loadList()
})

function lostMsg() {
  if (!Currency.value.lost.length) {
    return ''
  }
  if (Currency.value.MonetisationItems.length) {
    return 'Чем больше цен известно калькулятору, тем точнее результат'
  }
}

function loadList() {
  CurrencyProgress.value = true

  api.post(apiUrl + 'api/price.php', {
    params: {
      method: 'getCurrency',
      id: currencyId.value
    }
  })
    .then((response) => {
      if(!response?.data?.result) throw new Error();

      Currency.value = response?.data?.data ?? null

    })
    .catch((error) => {
      Currency.value = null
      q.notify(notifyError(error,'Ой! Currency Не работает :('))
    })
    .finally(() => {
      progress.value = false
      CurrencyProgress.value = false
    })
}
</script>

<template>
  <div v-if="Currency">
    <q-expansion-item label="Конвертор валюты"
                      default-opened
                      :icon="'img:/img/valuta/' + Currency.id + '.png'"
    >
      <div class="MainName">Передаваемые предметы за
        <img class="imgValut" :src="'/img/valuta/' + Currency.id + '.png'" alt="">
      </div>
      <CurrencyTradable v-if="TradableItems.length"></CurrencyTradable>
      <div v-if="Currency.median">
        Средняя цена <img class="imgValut" :src="'/img/valuta/' + Currency.id + '.png'" alt="">:
        <PriceImagerComponent :price="Currency.median" :currency-id="500"></PriceImagerComponent>
      </div>
      <PriceItemInput :price="Currency.Price"></PriceItemInput>
      <MainPriceItem :itemId="Currency.id"
                     :val="Currency.Price.price"
                     :itemName="Currency.name"
                     :icon="`${Currency.icon}`"
                     :updatedAt="Currency.Price.updatedAt"
                     :grade="Currency.Price.grade"
                     :author="Currency.Price.author"
                     :method="Currency.Price.method"></MainPriceItem>
      <template v-if="Currency.MonetisationItems.length">
        <div class="PricesArea">
          <template v-for="item in Currency.MonetisationItems" :key="item.id">
            <PriceCurrencyItem :CurItem="item" @updated="loadList" @delPrice="loadList"></PriceCurrencyItem>
          </template>
        </div>
      </template>

      <template v-if="Currency.lost.length">
        <div v-if="Currency.MonetisationItems.length">
          Значение можно уточнить.<br>
        </div>
        <div v-else>
          Не удалось расчитать среднюю цену <img class="imgValut" :src="'/img/valuta/' + Currency.id + '.png'" alt=""><br>
        </div>
        <q-expansion-item label="Добавить цены" icon="add">
          <LostList :Lost="Currency.lost"
                    :msg="'Чем больше цен известно калькулятору, тем точнее результат'"
          ></LostList>
        </q-expansion-item>

      </template>
    </q-expansion-item>


  </div>
</template>

<style scoped>

</style>

