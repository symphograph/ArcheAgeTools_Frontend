<template>
  <div class="WindowArea  column">
    <div class="navigator">
      <AccSets @saved="refBasedPrices.loadPrices()"></AccSets>
    </div>
    <q-scroll-area v-if="curAccount" class="col">
      <q-tabs v-model="tab">
        <q-tab name="basedPrices" label="Базовые цены"></q-tab>
        <q-tab name="profs" label="Профессии"></q-tab>
      </q-tabs>
      <q-tab-panels v-model="tab" animated class="TabPanels">
        <q-tab-panel name="basedPrices">
          <BasedPrices ref="refBasedPrices"></BasedPrices>
        </q-tab-panel>
        <q-tab-panel name="profs">
          <ProfList></ProfList>
        </q-tab-panel>
      </q-tab-panels>

    </q-scroll-area>
  </div>
</template>

<script setup>
import {computed, inject, onMounted, provide, ref} from "vue"
import {api} from "boot/axios"
import {useQuasar} from "quasar"
import AccSets from "components/account/AccSets.vue"
import ProfList from "components/account/ProfList.vue"
import BasedPrices from "components/price/BasedPrices.vue"
import {notifyError} from "src/myFuncts";

const q = useQuasar()
const apiUrl = String(process.env.API)
const token = inject('token')
const refBasedPrices = ref(null)
const curAccount = inject('curAccount')
const tab = ref('basedPrices')
const disable = computed(() => {
  return !!!curAccount.value.AccSets.serverGroup
})
provide('disable', disable)

onMounted(() => {
  loadAccount()
})

function loadAccount() {
  api.post(apiUrl + 'api/get/account.php')
    .then((response) => {
      if(!!!response?.data?.result){
        throw new Error();
      }
      curAccount.value = response?.data?.data?.curAccount ?? null
    })
    .catch((error) => {
      q.notify(notifyError(error, 'Ой! Account Не работает :('))
    })
}
</script>

<style scoped>
.TabPanels {
  background: none;
}
</style>
