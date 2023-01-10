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

const q = useQuasar()
const apiUrl = String(process.env.API)
const token = inject('token')
const curAccount = inject('curAccount')
const route = useRoute()

const priceMember = inject('priceMember')

function setFollow(){
  api.post(apiUrl + 'api/set/follow.php', {
    params: {
      token: token.value,
      master: priceMember.value.accountId,
      serverId: curAccount.value.AccSets.serverId,
      isFollow: priceMember.value.isFollow
    }
  })
    .then((response) => {

      if (response.data.result) {
        q.notify({
          color: 'positive',
          position: 'center',
          message: response.data.result,
          timeout: 100,
          closeBtn: 'Закрыть'
        })
        return true
      }

      let msg = 'Ой! Не получается.:('
      if (response.data.error) {
        msg = response.data.error
      }

      q.notify({
        color: 'negative',
        position: 'center',
        message: msg,
        icon: 'report_problem',
        timeout: 300,
        closeBtn: 'Закрыть'
      })
      return false

    })
    .catch(() => {
      q.notify({
        color: 'negative',
        position: 'center',
        html: true,
        message: 'Что-то со связью.<br>Не сохранилось.',
        timeout: 500,
        icon: 'report_problem',
        closeBtn: 'Закрыть'
      })
    })
}
</script>

<style scoped>

</style>
