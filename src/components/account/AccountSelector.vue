<template>
  <q-select v-model="curAccount"
            v-if="AccountList"
            style="min-width: 16em"
            ref="selector"
            dark
            label-color="grey"
            filled
            :label="AccSets.publicNick ?? ''"
            :options="AccountList"
            option-value="id"
            map-options
            @update:model-value="reLogin(curAccount.id)"
            option-label="nickName"
  >
    <template v-slot:append v-if="curAccount">
      <div style="width: 40px" v-if="curAccount.Avatar">
        <ItemIcon :locIcon="authUrl + curAccount.Avatar.src" :grade="AccSets.grade"></ItemIcon>
      </div>
    </template>
    <template v-slot:before-options>
      <q-item clickable to="/account">
        <q-item-section avatar>
          <q-avatar icon="ionicon person outline"></q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label caption class="text-grey">Настройки аккаунта</q-item-label>
          <q-item-label>Профиль</q-item-label>
        </q-item-section>
      </q-item>
    </template>
    <template v-slot:option="scope">
      <q-item v-bind="scope.itemProps" v-if="scope.opt.id !== curAccount.id && scope.opt.authType !== 'default'">
        <q-item-section avatar>
          <ItemIcon :locIcon="authUrl + scope.opt.Avatar.src" :grade="1" size="70px"></ItemIcon>
        </q-item-section>
        <q-item-section>
          <q-item-label caption class="text-grey-9">Войти как</q-item-label>
          <q-item-label>{{ scope.opt.nickName }}</q-item-label>
          <q-item-label caption class="text-grey-6">
            {{ AccSetList.find(el => el.accountId === scope.opt.id)?.publicNick ?? ''}}
          </q-item-label>
          <q-item-label v-if="false" caption class="text-grey-9">{{ getServer(scope.opt.AccSets.serverId).name }}
          </q-item-label>
        </q-item-section>
      </q-item>
    </template>
    <template v-slot:after-options>
      <div v-for="authType in authTypes" :key="authType.id">
        <DynamicFormItem :btnLabel="authType.label"
                      :icon="authType.img"
                      :url="authUrl + authType.url"
        ></DynamicFormItem>
      </div>
    </template>
  </q-select>
</template>

<script setup>
import {computed, inject, ref} from "vue";
import ItemIcon from "components/ItemIcon.vue"
import {useQuasar} from "quasar";
import DynamicFormItem from "components/account/DynamicFormItem.vue";

const q = useQuasar()
const apiUrl = String(process.env.API)
const authUrl = String(process.env.Auth)
const SelfDomain = String(process.env.SelfDomain)

const AccessToken = inject('AccessToken')
const SessionToken = inject('SessionToken')

const emit = defineEmits(['onSelectAccount'])
const AccountList = inject('AccountList')
const accId = ref(null)
const curAccount = inject('curAccount')
const AccSets = inject('AccSets')
const AccSetList = inject('AccSetList')
const Servers = inject('Servers')
const defaultAcc = ref({
  id: 1,
  nickName: 'Не авторизован',
  avatar: 'init_ava.png',
  grade: 1,
  serverId: 9
})

const authTypes = inject('authTypes')

const selected = computed(() => {
  if (!accId.value || !AccountList.value) {
    return false
  }
  return AccountList.value.find(el => el.id === accId.value) ?? defaultAcc.value
})

const selector = ref(null)

const reLogin = inject('reLogin')

function selPers() {
  window.location.href = authUrl + 'auth/relogin.php?accountId=' + curAccount.value.id
}

function getServer(id) {
  if (!Servers.value || !curAccount.value) {

    return {name: 'Сервер не выбран'}
  }
  //let id = curAccount.value.serverId
  return Servers.value.find(el => el.id === id) ?? {name: 'Сервер не найден'}
}
</script>

<style scoped>

</style>
