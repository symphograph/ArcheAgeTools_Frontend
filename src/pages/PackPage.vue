<template>
  <div class="WindowArea column">
    <PackMenu></PackMenu>
    <q-linear-progress :animation-speed="200"  color="green" :indeterminate="!!progress"></q-linear-progress>

    <q-scroll-area class="col myScrollArea">
      <PackList></PackList>

    </q-scroll-area>
  </div>
</template>

<script setup>


import {computed, inject, onBeforeMount, onMounted, provide, ref, watch} from "vue";
import {api} from "boot/axios";
import {LocalStorage, useMeta, useQuasar} from "quasar";
import PackMenu from "components/packs/PackMenu.vue";
import PackList from "components/packs/PackList.vue";

const q = useQuasar()
const apiUrl = String(process.env.API)
const token = inject('token')

const packList = ref([])
provide('packList', packList)

const Lost = ref([])
provide('Lost', Lost)

const ptSettings = ref({
  siol: false,
  side: null,
  ratePercent:130,
  condition: 0,
  addProfit: false,
  zoneFromId: 0,
  zoneToId: 0,
  sort: 'byName'
})
provide('ptSettings', ptSettings)

const sortOptions = ref([
  {label: 'Тип', value: 'byType'},
  {label: 'Имя пака', value: 'byName'},
  {label: 'Откуда', value: 'byFrom'},
  {label: 'Куда', value: 'byTo'},
  {label: 'Выручка', value: 'byFinalSalary'},
  {label: 'По прибыли', value: 'byProfit'},
  {label: 'По прибыли на 1 ОР', value: 'byProfitPerLabor'}
])
provide('sortOptions', sortOptions)


const selectedTypes = ref([
  {id: 1, name: 'Обычные', checked: true},
  {id: 6, name: 'Для местных', checked: false},
  {id: 8, name: 'За ДЗ', checked: true},
  {id: 2, name: 'Компост', checked: false},
  {id: 3, name: 'С навеса', checked: false},
  {id: 4, name: 'Растворы', checked: false},
  {id: 5, name: 'Вексельные', checked: false},
  {id: 7, name: 'Трофейные', checked: false},
  {id: 9, name: 'Лавочные', checked: false}
])
provide('selectedTypes', selectedTypes)


watch(selectedTypes, () => {
  //console.log('watch', selectedTypes)
  LocalStorage.set('selectedTypes', JSON.stringify(selectedTypes.value))
})

watch(ptSettings, () => {
  LocalStorage.set('ptSettings', JSON.stringify(ptSettings.value))

}, {deep: true})




const disabled = computed(()=> {
  return !!!ptSettings.value.side || !selectedTypes.value.length
})
provide('disabled', disabled)

const progress = ref(false)
provide('progress', progress)

const packTypes = [
  {id: 1, name: 'Обычные', checked: true},
  {id: 6, name: 'Для местных', checked: false},
  {id: 8, name: 'За ДЗ', checked: true},
  {id: 2, name: 'Компост', checked: false},
  {id: 3, name: 'С навеса', checked: false},
  {id: 4, name: 'Растворы', checked: false},
  {id: 5, name: 'Вексельные', checked: false},
  {id: 7, name: 'Трофейные', checked: false},
  {id: 9, name: 'Лавочные', checked: false}
]
provide('packTypes', packTypes)

const currencyPrices = ref({})
provide('currencyPrices', currencyPrices)


onMounted(()=>{
  if(LocalStorage.getItem('selectedTypes')){
    selectedTypes.value = JSON.parse(LocalStorage.getItem('selectedTypes'))
  }
  if(LocalStorage.getItem('ptSettings')){
    ptSettings.value = JSON.parse(LocalStorage.getItem('ptSettings'))
  }else {
    ptSettings.value.sort = 'byProfit'
  }
})

const metaData = {
  title: 'Паки',
  meta: {
    viewport:
      {
        name: 'viewport',
        content: 'initial-scale=0.6,width=device-width, user-scalable=yes'
      }
  }
}
useMeta(metaData)
</script>

<style>
html {
  font-size: 14px;
}

.ptCol1 {
  /*min-width: 18em;*/
  /*max-width: 18em;*/
}
.ptCol2 {
  width: 12em;
}
.ptCol3 {
  width: 10em;
}
.ptCol4 {
  width: 10em;
}
.ptCol5 {
  width: 10em;
}
.ptCol6 {
  width: 10em;
}
.ptCol7 {
  width: 14em;
}
</style>
