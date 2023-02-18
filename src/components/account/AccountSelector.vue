<template>
  <q-select v-model="curAccount"
            v-if="AccountList"
            style="min-width: 16em"
            ref="selector"
            :dark="q.platform.is.desktop"
            label-color="grey"
            filled
            :label="curAccount.AccSets.publicNick ?? ''"
            :options="AccountList"
            option-value="id"
            map-options
            @update:model-value="selPers()"
            option-label="nickName"
  >
    <template v-slot:append v-if="curAccount">
      <div style="width: 40px" v-if="curAccount.Avatar">
        <ItemIcon :locIcon="apiUrl + curAccount.Avatar.src" :grade="curAccount.AccSets.grade"></ItemIcon>
      </div>
    </template>
    <template v-slot:before-options>
      <q-item clickable to="/account">
        <q-item-section avatar>
          <q-avatar icon="ionicon person outline"></q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label caption class="text-grey">Настройки акаунта</q-item-label>
          <q-item-label>Профиль</q-item-label>
        </q-item-section>
      </q-item>
    </template>
    <template v-slot:option="scope">
        <q-item v-bind="scope.itemProps" v-if="scope.opt.id !== curAccount.id">
          <q-item-section avatar>
            <ItemIcon :locIcon="apiUrl + scope.opt.Avatar.src" :grade="scope.opt.grade" size="70px"></ItemIcon>
          </q-item-section>
          <q-item-section>
            <q-item-label caption class="text-grey-9">Войти как</q-item-label>
            <q-item-label>{{ scope.opt.nickName }}</q-item-label>
            <q-item-label caption class="text-grey-6">{{ scope.opt.AccSets.publicNick }}</q-item-label>
            <q-item-label caption class="text-grey-9">{{getServer(scope.opt.AccSets.serverId).name}}</q-item-label>
          </q-item-section>
        </q-item>
    </template >
    <template v-slot:after-options>
      <q-item clickable :href="apiUrl + 'auth/telelogin.php'" @click="goTo(apiUrl + 'auth/telelogin.php')">
        <q-item-section avatar>
          <q-avatar>
            <q-img src="/img/auth/telegram_logo.png"></q-img>
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label caption class="text-grey">Войти через</q-item-label>
          <q-item-label>Телеграм</q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable :href="apiUrl + 'auth/mailru.php'" @click="goTo(apiUrl + 'auth/mailru.php')">
        <q-item-section avatar>
          <q-avatar icon="img:/img/auth/mailru.svg">
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-grey" caption>Войти через</q-item-label>
          <q-item-label>Mail.ru</q-item-label>
        </q-item-section>
      </q-item>
      <q-item clickable :href="apiUrl + 'auth/discord.php?action=login'" @click="goTo(apiUrl + 'auth/discord.php?action=login')">
        <q-item-section avatar>
          <q-avatar icon="img:/img/auth/discord.svg">
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-grey" caption>Войти через</q-item-label>
          <q-item-label>Discord</q-item-label>
        </q-item-section>
      </q-item>
    </template>
  </q-select>
</template>

<script setup>
import {computed, inject, ref} from "vue";
import ItemIcon from "components/ItemIcon.vue"
import {useQuasar} from "quasar";

const q = useQuasar()
const apiUrl = String(process.env.API)
const AccountList = inject('AccountList')
const accId = ref(null)
const curAccount = inject('curAccount')
const Servers = inject('Servers')
const defaultAcc = ref({
  id: 1,
  nickName: 'Не авторизован',
  avatar: 'init_ava.png',
  grade: 1,
  serverId: 9
})
const selected = computed(() => {
  if(!accId.value || !AccountList.value){
    return false
  }
  return AccountList.value.find(el => el.id === accId.value) ?? defaultAcc.value
})

const selector = ref(null)



function selPers() {
  window.location.href = apiUrl + 'auth/relogin.php?accountId=' + curAccount.value.id
}



function goTo(url){
  window.location.href = url
}


function getServer(id) {
  if(!Servers.value || !curAccount.value){

    return {name: 'Сервер не выбран'}
  }
  //let id = curAccount.value.serverId
  return Servers.value.find(el => el.id === id) ?? {name: 'Сервер не найден'}
}
</script>

<style scoped>

</style>
