<template>
  <q-layout view="lHh Lpr lFf">
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
          <AccountSelector v-if="AccountList && AccountList.length"></AccountSelector>
          <LoginList v-else></LoginList>
        </q-tabs>
        <template v-else>
          <ItemIcon v-if="curAccount"
                    :locIcon="curAccount.authTypeId > 1 ? apiUrl + curAccount.Avatar.src : apiUrl + curAccount.Avatar.src"
                    :grade="curAccount.AccSets.grade"
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
            <router-view/>
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

<script setup>
import {ref, provide, onMounted, watch, onBeforeMount, computed} from 'vue'
import {api} from "boot/axios"
import {LocalStorage, useQuasar} from "quasar"
import AccountSelector from "components/account/AccountSelector.vue"
import {useRoute} from "vue-router"
import LoginList from "components/account/LoginList.vue"
import DrawerContent from "components/DrawerContent.vue"
import ItemIcon from "components/ItemIcon.vue"
import {notifyError} from "src/myFuncts";


const q = useQuasar()
const apiUrl = String(process.env.API)
const route = useRoute()
const token = ref('')
provide('token', token)

const AccountList = ref([])
provide('AccountList', AccountList)
const curAccount = ref(null)
provide('curAccount', curAccount)

const selCategId = ref(0)
provide('selCategId', selCategId)
const selCategNode = ref(null)
provide('selCategNode', selCategNode)

const Servers = ref([])
provide('Servers', Servers)

const ProfLvls = ref([])
provide('ProfLvls', ProfLvls)


const authTypes = ref([
  {
    id: 0,
  },
  {
    id: 1,
  },
  {
    id: 2,
    label: 'Телеграм',
    url: 'auth/telelogin.php',
    img: '/img/auth/telegram_logo.png'
  },
  {
    id: 3,
    label: 'MailRu',
    url: 'auth/mailru.php',
    img: '/img/auth/mailru.svg'
  },
  {
    id: 4,
    label: 'Discord',
    url: 'auth/discord.php?action=login',
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
      if(!!!response?.data?.result){
        throw new Error();
      }
      Servers.value = response?.data?.data?.Servers ?? []
      ProfLvls.value = response?.data?.data?.ProfLvls ?? []
    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
}

function apiSess() {
  if (!token.value) {
    goToLogin()
  }
  //api.defaults.headers.common['Authorization'] = token.value


  api.post(apiUrl + 'api/auth/session.php', {
    params: {
      path: route.path,
    }
  })
    .then((response) => {
      if(!!!response?.data?.result){
        throw new Error();
      }

      AccountList.value = response?.data?.data?.Accounts ?? []
      curAccount.value = response?.data?.data?.curAccount ?? null
      loadOptions()
    })
    .catch((error) => {
      if(error?.response?.status === 401){
        goToLogin()
        return
      }
      q.notify(notifyError(error, 'Ой! Account Не работает :('))
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
  LocalStorage.set('lastPath', route.path)
  api.defaults.headers.common['Authorization'] = token.value
  if(!process.env.isDebug){
    api.defaults.headers.common['Accept'] = "application/json"
  }
  apiSess()
})
</script>

<style>
body {
  background: url(/img/bg.jpg) no-repeat fixed center center / cover;
  font-family: "Gill Sans", "Gill Sans MT", "Myriad Pro", "DejaVu Sans Condensed", Helvetica, Arial, "sans-serif";
  font-size: 14px;
  overflow: hidden;
}

.footer {
  text-align: center;
}

.footer a {
  text-decoration: none;
  color: white;
}

.q-drawer {
  background-color: #efddc3e6;
}

.bg-tooltip {
  color: black;
  max-width: 270px;
  background: rgba(255, 255, 230, 0.9);
  box-shadow: 3px 3px 3px rgba(0, 0, 0, .3);
  border: 1px solid #333;
  border-radius: 4px;
  font-size: 12px;
  text-align: center;
}

.MainName {
  font-family: "Gill Sans", "Gill Sans MT", "Myriad Pro", "DejaVu Sans Condensed", Helvetica, Arial, "sans-serif";
  font-size: 14px;
  color: #6c3f00;
  font-weight: bold;
}

.WindowArea {
  height: 100%;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  overflow: hidden;
  background-image: url(/img/win-head.png), linear-gradient(180deg, rgba(238, 232, 218, 0.95) 0%, rgba(215, 201, 170, 0.87) 99.48%);
  background-repeat: no-repeat;
  background-size: cover;
  font-family: "Gill Sans", "Gill Sans MT", "Myriad Pro", "DejaVu Sans Condensed", Helvetica, Arial, "sans-serif";
  color: #6c3f00;
}

.navigator {
  padding: 1em 0;
  display: flex;
  justify-content: space-evenly;
}

.DefBtn {
  background-image: url(/img/interface/defbtn.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 2.5em;
  width: max-content;
  padding: 0.5em 1em;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  color: #4B3A23;
  background-color: #F2C037;
}

.Input {
  background-image: url(/img/interface/reward2.png);
  background-repeat: no-repeat;
  width: 100%;
  height: 4.2em;
  max-width: 25em;
  padding: 0 2em;
  background-size: 100% 100%;
}

.InputActive {
  background-image: url(/img/interface/reward-active.png);
}

.PricesArea {
  padding: 1em;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.smallIcon {
  width: 1em;
  height: 1em;
}

.imgValut {
  height: 0.9em;
  width: 0.9em;
}

.itemIconsArea {
  max-height: 226px;
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  padding-bottom: 20px;
}

.myScrollArea {
  width: 100%;
  max-width: 100vw;
}
</style>
