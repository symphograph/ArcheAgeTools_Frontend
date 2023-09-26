<script setup>
import {ref, provide, onMounted, watch, onBeforeMount, computed, inject} from 'vue'
import {api} from "boot/axios"
import {LocalStorage, useQuasar} from "quasar"
import AccountSelector from "components/account/AccountSelector.vue"
import {useRoute} from "vue-router"
import LoginList from "components/account/LoginList.vue"
import DrawerContent from "components/DrawerContent.vue"
import ItemIcon from "components/ItemIcon.vue"
import {accountIdByJWT, notifyError, notifyOK} from "src/myFuncts";


const q = useQuasar()
const apiUrl = String(process.env.API)
const authUrl = String(process.env.Auth)
const route = useRoute()
const progress = inject('progress')


const AccessToken = inject('AccessToken')
const isOptionsLoaded = inject('isOptionsLoaded')
const isTokenRefreshed = inject('isTokenRefreshed')
const emit = defineEmits(['reLogin'])

const AccountList = ref([])
provide('AccountList', AccountList)

const curAccount = ref(null)
provide('curAccount', curAccount)

const AccSets = ref({grade: 1, serverGroupId: 100})
provide('AccSets', AccSets)

const selCategId = ref(0)
provide('selCategId', selCategId)

const selCategNode = ref(null)
provide('selCategNode', selCategNode)

const ServerGroupList = ref([])
provide('ServerGroupList', ServerGroupList)

const ProfLvls = ref([])
provide('ProfLvls', ProfLvls)


const authTypes = ref([
  {
    id: 2,
    label: 'Телеграм',
    url: 'auth/telegram/login.php',
    img: '/img/auth/telegram.svg'
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
    url: 'auth/discord/login.php',
    img: '/img/auth/discord.svg'
  },
  {
    id: 4,
    label: 'VКонтакте',
    url: 'auth/vkontakte/login.php',
    img: '/img/auth/vkontakte.svg'
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

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

function loadOptions() {
  api.post(apiUrl + 'api/get/options.php')
    .then((response) => {
      if (!!!response?.data?.result) {
        throw new Error();
      }
      ServerGroupList.value = response?.data?.data?.ServerGroupList ?? []
      ProfLvls.value = response?.data?.data?.ProfLvls ?? []
      loadAccountList()
    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
}

function test() {
  api.post(authUrl + 'api/test.php',{
    params:{
      method: 'get'
    }
  })
      .then((response) => {
        if (!!!response?.data?.result) {
          throw new Error();
        }
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
        <div style="margin: auto; color: red">* В разработке *</div>
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
      dark
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
        href="https://github.com/symphograph/ArcheAgeTools_Frontend" target="_blank">Github</a> * Шаеда
      </div>
    </q-footer>
  </q-layout>
</template>

<style>

</style>
