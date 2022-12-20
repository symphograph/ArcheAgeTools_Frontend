<template>
  <div class="WindowArea  column">
    <q-scroll-area v-if="curAccount" class="col">
      <AccSets></AccSets>
      <ProfList></ProfList>
    </q-scroll-area>
  </div>
</template>

<script setup>
import {computed, inject, onMounted, ref} from "vue";
import AccountArea from "components/account/AccountArea.vue";
import {api} from "boot/axios";
import {LocalStorage, useQuasar} from "quasar";
import TelegramAccount from "components/account/TelegramAccount.vue";
import AccSets from "components/account/AccSets.vue";
import ProfList from "components/account/ProfList.vue";

const q = useQuasar()
const apiUrl = String(process.env.API)
const token = inject('token')
const curAccount = inject('curAccount')

onMounted(() => {
  loadAccount()
})

function loadAccount() {
  api.post(apiUrl + 'api/get/account.php', {
    params: {
      token: token.value
    }
  })
    .then((response) => {
      if (response.data.result) {
        curAccount.value = response.data.data.curAccount
        return true
      }

      if (response.data.error) {
        // return false
      }
      q.notify({
        color: 'negative',
        position: 'center',
        message: 'Ой! Не работает.:(',
        closeBtn: 'Закрыть',
        icon: 'report_problem'
      })
    })
    .catch((error) => {
      q.notify({
        color: 'negative',
        position: 'center',
        message: 'Ой! Не работает.:(',
        icon: 'report_problem'
      })
    })
}
</script>

<style>

</style>
