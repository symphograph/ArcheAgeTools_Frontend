<script setup>
import {ref, provide, onMounted, watch, onBeforeMount, computed, inject} from 'vue'
import {api} from "boot/axios"
import {LocalStorage, useQuasar} from "quasar"
import AccountSelector from "components/account/AccountSelector.vue"
import {useRoute} from "vue-router"
import LoginList from "components/account/LoginList.vue"
import DrawerContent from "components/DrawerContent.vue"
import ItemIcon from "components/ItemIcon.vue"
import {notifyError, notifyOK} from "src/js/myFuncts";
import {myAccSets, myUser} from 'src/js/myAuth';
import MainHeader from "components/main/MainHeader.vue";


const q = useQuasar()
const apiUrl = String(process.env.API)
const authUrl = String(process.env.Auth)
const route = useRoute()
const progress = inject('progress')

const isOptionsLoaded = inject('isOptionsLoaded')

const emit = defineEmits(['reLogin'])

const AccountList = ref([])
provide('AccountList', AccountList)

const curAccount = ref({settings: {}})
provide('curAccount', curAccount)

const AccSets = ref({})
provide('AccSets', AccSets)

const AccSetList = ref([])
provide('AccSetList', AccSetList)

const ServerGroupList = ref([])
provide('ServerGroupList', ServerGroupList)

function initAccountSettingsInList() {
  let list = AccountList.value.map(account => {
    const accSet = AccSetList.value.find(accSet => accSet.accountId === account.id)
    if (accSet) {
      return {
        ...account,
        settings: accSet
      }
    } else {
      return account;
    }
  })
  AccountList.value = list.sort((a, b) => new Date(b.visitedAt) - new Date(a.visitedAt))
}



const selCategId = ref(0)
provide('selCategId', selCategId)

const selCategNode = ref(null)
provide('selCategNode', selCategNode)



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



const CategoriesList = ref(null)
provide('CategoriesList', CategoriesList)

const expandedCategNode = ref([])
provide('expandedCategNode', expandedCategNode)

const categMode = ref(false)
provide('categMode', categMode)

const selectOptionsStyle = { backgroundColor: 'rgb(181 238 8 / 93%)', color: '#4B3A23' }
provide('selectOptionsStyle', selectOptionsStyle)



function loadOptions() {
  api.post(apiUrl + 'api/options.php', {
    params: {
      method: 'getMain'
    }
  })
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

      let list = response?.data?.data
      curAccount.value = list.find(el => el.id === myUser.self.accountId())
      AccountList.value = list.filter(el => el.authType !== 'default')
      loadSettings()
    })
    .catch((error) => {
      console.error(error)
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
      curAccount.value.settings = response?.data?.data
      myAccSets.self = new myAccSets(response.data.data)
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
      initAccountSettingsInList()

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
  console.log('midLayout BeforeMount')
})

onMounted(() => {
  loadOptions()
})
</script>

<template>
  <q-layout v-if="isOptionsLoaded" view="lHh Lpr lFf">
    <MainHeader @reLogin="emit('reLogin')"></MainHeader>


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
