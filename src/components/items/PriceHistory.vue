<script setup>

import {computed, inject, onMounted, provide, ref} from "vue";
import {api} from "boot/axios";
import {useQuasar} from "quasar";
import {fDate, notifyError} from "src/js/myFuncts";
import {useRoute} from "vue-router";
import PriceImagerComponent from "components/price/PriceImagerComponent.vue";
import ServerGroupSelect from "components/account/ServerGroupSelect.vue";

const q = useQuasar()
const apiUrl = String(process.env.API)
const apiAuth = String(process.env.Auth)
const route = useRoute()
const curAccount = inject('curAccount')

const PriceHistoryProgress = inject('PriceHistoryProgress')
provide('progress', PriceHistoryProgress)
const PriceHistoryList = ref([])
const ServerGroupList = inject('ServerGroupList')
const selectedServerGroupId = ref(curAccount.value.settings.serverGroupId)
const filteredList = computed(() => {
  if(!PriceHistoryList.value?.length){
    return []
  }
  if(selectedServerGroupId.value === 100){
    return PriceHistoryList.value
  }
  let list = PriceHistoryList.value
  return list.filter(el => el.serverGroupId === selectedServerGroupId.value)
})

function onSelectServerGroup(id){
  selectedServerGroupId.value = id
  loadPriceHistory()
}

function loadPriceHistory() {
  PriceHistoryProgress.value = true
  api.post(apiUrl + '/api/price.php', {
    params: {
      method: 'history',
      itemId: route.params.id,
      serverGroupId: selectedServerGroupId.value
    }
  })
    .then((response) => {
      if (!!!response?.data?.result) {
        throw new Error();
      }
      PriceHistoryList.value = response?.data?.data || []
      // console.log(response?.data?.data)
    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
    .finally(() => {
      PriceHistoryProgress.value = false
    })
}

onMounted(() => {

})
</script>

<template>
  <q-expansion-item label="Текущие цены"
                    @before-show="loadPriceHistory()"
                    popup>
    <q-list dense separator>
      <q-item>
        <q-item-section>
          <q-item-label>
            <ServerGroupSelect :groupId="selectedServerGroupId"
                               @onSelect="(id) => onSelectServerGroup(id)"
                               ref="refServerGroupSelect"
            ></ServerGroupSelect>
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-item v-for="price in PriceHistoryList" :key="
      String(price.accountId)
      + String(price.serverGroupId)
      + price.updatedAt"
              style="padding: 1em"
      >
        <q-item-section avatar>
          <q-avatar>
            <q-img :src="apiAuth + 'img/avatars/' + price.avaFileName"></q-img>
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label caption>{{ fDate(price.updatedAt) + ' - ' + price.publicNick }}</q-item-label>
          <q-item-label caption v-if="selectedServerGroupId === 100">
            {{ ServerGroupList.find(el => el.id === price.serverGroupId).label }}
          </q-item-label>
          <q-item-label>
            <PriceImagerComponent :price="price.price"></PriceImagerComponent>
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-expansion-item>
</template>

<style scoped>

</style>
