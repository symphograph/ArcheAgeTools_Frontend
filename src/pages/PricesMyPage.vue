<template>
  <div class="WindowArea column">
    <PriceListMenu></PriceListMenu>
    <q-linear-progress :animation-speed="200"  color="green" :indeterminate="!!progress"></q-linear-progress>
    <q-scroll-area v-if="Prices" class="col" style="width: 100%">
      <PriceList></PriceList>
    </q-scroll-area>
  </div>
</template>

<script setup>


import {useQuasar} from "quasar";
import {inject, provide, ref} from "vue";
import {useRoute} from "vue-router";
import PriceList from "components/price/PriceList.vue";
import PriceListMenu from "components/price/PriceListMenu.vue";



const q = useQuasar()
const apiUrl = String(process.env.API)
const token = inject('token')
const curAccount = inject('curAccount')
const route = useRoute()


const Prices = ref(null)
provide('Prices', Prices)

const priceMember = ref(null)
provide('priceMember', priceMember)

const progress = ref(false)
provide('progress',progress)

const SortSelected = ref(1)
provide('SortSelected', SortSelected)

const searchText = ref('')
provide('searchText', searchText)

const filters = ref({
  craftable: true,
  uncraftable: true
})
provide('filters', filters)

</script>

<style scoped>



</style>
