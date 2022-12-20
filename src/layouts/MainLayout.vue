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
                    :locIcon="curAccount.authTypeId > 1 ? curAccount.avatar : apiUrl + curAccount.avatar"
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
import {ref, provide, inject, onMounted, watch, onBeforeMount} from 'vue'
import {api} from "boot/axios";
import {LocalStorage, useQuasar} from "quasar";
import AccountSelector from "components/account/AccountSelector.vue";
import {useRoute} from "vue-router";
import LoginList from "components/account/LoginList.vue";
import DrawerContent from "components/DrawerContent.vue";
import ItemIcon from "components/ItemIcon.vue";


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

const Servers = ref(null)
provide('Servers', Servers)

const ProfLvls = ref(null)
provide('ProfLvls', ProfLvls)

const PriceModes = ref([
  {
    mode: 1,
    name: 'С миру по нитке',
    description:
      'Предпочитает Ваши цены или более новые из доверенных.<br>' +
      'Если их нет, ищет у других.<br>' +
      'Спрашивает только, если никто и никогда не указывал цену.'
  },
  {
    mode: 2,
    name: 'Доверие',
    description:
      'Не видит ничьих цен, кроме Ваших и тех, кому Вы доверяете.<br>' +
      'Предпочитает более новые.<br>' +
      'ОР, РР, Честь и прочие субъективные предпочитает Ваши независимо от их новизны.'
  },
  {
    mode: 3,
    name: 'Хардкор',
    description:
      'Видит только Ваши цены.<br>' +
      'В любой непонятной ситуации будет спрашивать.'
  }
])
provide('PriceModes', PriceModes)


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
  }
])
provide('authTypes', authTypes)

const leftDrawerOpen = ref(false)

const CategoriesList = ref(null)
provide('CategoriesList', CategoriesList)
const expandedCategNode = ref([])
provide('expandedCategNode', expandedCategNode)


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
  api.post(apiUrl + 'api/get/options.php', {
    params: {
      token: token.value
    }
  })
    .then((response) => {
      if (response.data.error) {
        q.notify({
          color: 'negative',
          position: 'center',
          message: response.data.error,
          icon: 'report_problem',
          closeBtn: 'Закрыть'

        })
        Servers.value = null
        ProfLvls.value = null
        return false
      }
      if (response.data.result) {
        Servers.value = response.data.data.Servers
        ProfLvls.value = response.data.data.ProfLvls
      }
    })
    .catch(() => {
      q.notify({
        color: 'negative',
        position: 'center',
        message: 'Сервер не отвечает',
        icon: 'report_problem',
        closeBtn: 'Закрыть'
      })
    })
}

function apiSess() {
  if (!token.value) {
    goToLogin()
  }
  api.post(apiUrl + 'api/auth/session.php', {
    params: {
      token: token.value,
      path: route.path,
    }
  })
    .then((response) => {
      if (response.data.result) {
        //lvl.value = response.data.data.User.lvl
        AccountList.value = response.data.data.Accounts
        curAccount.value = response.data.data.curAccount
        loadOptions()
        return true
      }

      if (response.data.error) {
        if (['badToken', 'emptyToken', 'Refresh for new Sess'].includes(response.data.error)) {
          goToLogin()
        }
        return false
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

const lastPath = '/'
watch(route, (newPath) => {
  LocalStorage.set('lastPath', newPath.path)
})
onBeforeMount(() => {
  getTokenFromCook()
})

onMounted(() => {
  LocalStorage.set('lastPath', route.path)
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
  max-width: 25em;
  padding: 0 2em;
  background-size: 100% 100%;
}

.InputActive {
  background-image: url(/img/interface/reward-active.png);
}
</style>
