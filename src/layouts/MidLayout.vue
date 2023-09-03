<script setup>
import {ref, provide, onMounted, watch, onBeforeMount, computed, inject} from 'vue'
import {api} from "boot/axios"
import {LocalStorage, useQuasar} from "quasar"
import AccountSelector from "components/account/AccountSelector.vue"
import {useRoute} from "vue-router"
import LoginList from "components/account/LoginList.vue"
import DrawerContent from "components/DrawerContent.vue"
import ItemIcon from "components/ItemIcon.vue"
import {accountIdByJWT, notifyError} from "src/myFuncts";


const q = useQuasar()
const apiUrl = String(process.env.API)
const authUrl = String(process.env.Auth)
const route = useRoute()
const token = ref('')
provide('token', token)

const AccessToken = inject('AccessToken')
const isOptionsLoaded = inject('isOptionsLoaded')
const isTokenRefreshed = inject('isTokenRefreshed')
const emit = defineEmits(['reLogin'])

const AccountList = ref([])
provide('AccountList', AccountList)
const curAccount = ref(null)
provide('curAccount', curAccount)
const AccSets = ref({grade: 1})
provide('AccSets', AccSets)

const selCategId = ref(0)
provide('selCategId', selCategId)
const selCategNode = ref(null)
provide('selCategNode', selCategNode)

const Servers = ref([])
provide('Servers', Servers)

const ServerGroup = computed(() => {
  return Servers.value.find(el => el.id === AccSets.value.serverId).group
})
provide('ServerGroup', ServerGroup)

const ProfLvls = ref([])
provide('ProfLvls', ProfLvls)


const authTypes = ref([
  {
    id: 2,
    label: 'Телеграм',
    url: 'auth/telegram/login.php',
    img: '/img/auth/telegram_logo.png'
  },
  {
    id: 3,
    label: 'MailRu',
    url: 'auth/mailru/login.php',
    img: '/img/auth/mailru.svg'
  },
  {
    id: 4,
    label: 'Discord',
    url: 'auth/discord/login.php?action=login',
    img: '/img/auth/discord.svg'
  }
])
provide('authTypes', authTypes)

const leftDrawerOpen = ref(false)

const CategoriesList = ref(null)
provide('CategoriesList', CategoriesList)
const expandedCategNode = ref([])
provide('expandedCategNode', expandedCategNode)
const categMode = ref(false)
provide('categMode', categMode)

const selectOptionsStyle = { backgroundColor: 'rgb(181 238 8 / 93%)', color: '#4B3A23' }
provide('selectOptionsStyle', selectOptionsStyle)

const AccSetList = ref([])
provide('AccSetList', AccSetList)

//const Array1 = [{id: 1, value: 'foo'}, {id: 2, value: 'bar'}, {id: 3, value: 'bar'}]
//const Array2 = [1,2,3]

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

function getTokenFromCook() {
  let allCookies = q.cookies.getAll()
  if (allCookies.token) {
    token.value = allCookies.token
    q.cookies.set('token', token.value, {
      expires: '1d',
      path: '/',
      domain: null,
      sameSite: 'Strict',
      secure: true,
      httpOnly: false
    })
    return
  }
  token.value = ''
}

function goToLogin() {
  window.location.href = apiUrl + '/auth/auto.php?debug=' + String(process.env.isDebug)
}

function loadOptions() {
  api.post(apiUrl + 'api/get/options.php')
    .then((response) => {
      if (!!!response?.data?.result) {
        throw new Error();
      }
      Servers.value = response?.data?.data?.Servers ?? []
      ProfLvls.value = response?.data?.data?.ProfLvls ?? []
      loadAccountList()
    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
}

function test() {
  loadAccSetList()
}

function loadAccount() {
  api.post(authUrl + 'api/account.php',{
    params:{
      method: 'get'
    }
  })
    .then((response) => {
      if (!!!response?.data?.result) {
        throw new Error();
      }
      curAccount.value = response?.data?.data
    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
}

function loadAccountList() {
  api.post(authUrl + 'api/account.php',{
    params:{
      method: 'list'
    }
  })
    .then((response) => {
      if (!!!response?.data?.result) {
        throw new Error();
      }
      AccountList.value = response?.data?.data
      curAccount.value = AccountList.value.find(el => el.id === accountIdByJWT(AccessToken.value))
      loadSettings()
    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
}

function loadSettings() {
  api.post(apiUrl + 'api/settings.php',{
    params:{
      method: 'get'
    }
  })
    .then((response) => {
      if (!!!response?.data?.result) {
        throw new Error();
      }
      AccSets.value = response?.data?.data
      loadAccSetList()
    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
}

function loadAccSetList() {
  api.post(apiUrl + 'api/settings.php',{
    params:{
      method: 'list',
      ids: AccountList.value.map(el => el.id)
    }
  })
    .then((response) => {
      if (!!!response?.data?.result) {
        throw new Error();
      }
      AccSetList.value = response?.data?.data ?? []
      console.log(AccSetList.value)
      isOptionsLoaded.value = true

    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
}

const lastPath = '/'
watch(route, (newPath) => {
  LocalStorage.set('lastPath', newPath.path)
})
onBeforeMount(() => {
  getTokenFromCook()
})

onMounted(() => {
  loadOptions()

})
</script>

<template>
  <q-layout v-if="isOptionsLoaded" view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          GraphTools
        </q-toolbar-title>

        <q-tabs v-if="q.platform.is.desktop" inline-label class="bg-primary text-white shadow-2" align="center">
          <q-btn label="test" @click="test()"></q-btn>
          <AccountSelector v-if="AccountList && AccountList.length > 1" @onSelectAccount="emit('reLogin')"></AccountSelector>
          <LoginList v-else></LoginList>
        </q-tabs>
        <template v-else>
          <ItemIcon
                    :locIcon="authUrl + curAccount.Avatar.src"
                    :grade="AccSets.grade"
                    @click="toggleLeftDrawer"
          ></ItemIcon>
        </template>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      behavior="default"
      bordered
    >
      <DrawerContent></DrawerContent>
    </q-drawer>

    <q-page-container v-if="curAccount">
      <q-page class="row no-wrap">
        <div class="col">
          <div class="column full-height">
            <router-view v-if="isOptionsLoaded"/>
          </div>
        </div>
      </q-page>
    </q-page-container>
    <q-footer>
      <div class="footer">© <a href="https://vk.com/roman_chubich" target="_blank">Граф</a> * <a
        href="https://github.com/symphograph/dllib" target="_blank">Github</a> * Шаеда
      </div>
    </q-footer>
  </q-layout>
</template>

<style>

</style>
