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


import {computed, inject, onMounted, provide, ref, watch} from "vue";
import {api} from "boot/axios";
import {useMeta, useQuasar} from "quasar";
import PackMenu from "components/packs/PackMenu.vue";
import PackList from "components/packs/PackList.vue";

const q = useQuasar()
const apiUrl = String(process.env.API)
const token = inject('token')

const packList = ref([])
provide('packList', packList)

const Lost = ref([])
provide('Lost', Lost)

const side = ref(null)
provide('side', side)

const siol = ref(false)
provide('siol', siol)

const ratePercent = ref(130)
provide('ratePercent', ratePercent)

const condition = ref(0)
provide('condition', condition)



const addProfit = ref(false)
provide('addProfit', addProfit)

const zoneFromId = ref(0)
provide('zoneFromId', zoneFromId)

const zoneToId = ref(0)
provide('zoneToId', zoneToId)

const sort = ref('byName')
provide('sort', sort)

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


const disabled = computed(()=> {
  return !!!side.value || !selectedTypes.value.length
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
