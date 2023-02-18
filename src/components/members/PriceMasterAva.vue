<template>
  <q-item>
    <q-item-section avatar>
      <q-avatar size="40px">
        <img class="MemberAvaImg" :src="apiUrl + priceMember.Avatar.src" alt="">
      </q-avatar>
    </q-item-section>
    <q-item-section top>
      <q-item-label caption>
        {{priceMember.publicNick}}
      </q-item-label>
      <q-item-label v-if="route.params.accId*1 === curAccount.id">
        <q-toggle
          label="Доверять"
          v-model="priceMember.isFollow"
          @update:modelValue="setFollow()"
        ></q-toggle>
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
import {api} from "boot/axios";
import {inject} from "vue";
import {useQuasar} from "quasar";
import {useRoute} from "vue-router";
import {notifyOK} from "src/myFuncts";

const q = useQuasar()
const apiUrl = String(process.env.API)
const token = inject('token')
const curAccount = inject('curAccount')
const route = useRoute()

const priceMember = inject('priceMember')

function setFollow(){
  api.post(apiUrl + 'api/set/follow.php', {
    params: {
      master: priceMember.value.accountId,
      serverId: curAccount.value.AccSets.serverId,
      isFollow: priceMember.value.isFollow
    }
  })
    .then((response) => {
      if(!!!response?.data?.result){
        throw new Error();
      }
      q.notify(notifyOK(response.data.result))
    })
    .catch((error) => {
      CraftList.value = []
      MainCraft.value = null
      progress.value = false
      q.notify({
        color: 'negative',
        position: 'center',
        message:
          !!error?.response?.data?.error
            ? error.response.data.error
            : 'Ой! CraftList Не работает :(',
        closeBtn: 'x',
        icon: 'report_problem'
      })
    })
}
</script>

<style scoped>

</style>
