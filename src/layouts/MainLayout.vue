<template>
  <AuthComponent ref="refAuth"></AuthComponent>
  <router-view @reLogin="refAuth.reLogin" v-if="isTokenRefreshed"/>
</template>


<script setup>
import {ref, provide, computed, onMounted, onBeforeMount, watch, inject} from 'vue'
import {useQuasar, Dialog, LocalStorage, useMeta} from 'quasar'
import {useRoute, useRouter} from 'vue-router'
import AuthComponent from "components/main/AuthComponent.vue";
import {api} from "boot/axios";


const router = useRouter()

const pageSettings = ref()
provide('pageSettings', pageSettings)

const isOptionsLoaded = ref(false)
provide('isOptionsLoaded', isOptionsLoaded)

const refAuth = ref()
const q = useQuasar()

const apiUrl = String(process.env.API)
const route = useRoute()

const AccessToken = ref('')
provide('AccessToken', AccessToken)

const SessionToken = ref('')
provide('SessionToken', SessionToken)

const isTokenRefreshed = ref(false)
provide('isTokenRefreshed', isTokenRefreshed)

const admin = ref(false)
provide('admin', admin)



const progress = ref(false)
provide('progress', progress)

const leftDrawerOpen = ref(false)
provide('leftDrawerOpen', leftDrawerOpen)


const Halls = ref([])
provide('Halls', Halls)



const editMode = ref(false)
provide('editMode', editMode)

function reLogin(toAccountId) {
  refAuth.value.reLogin(toAccountId)
}
provide('reLogin', reLogin)
//const lastPath = '/'

watch(route,(newPath) => {
  LocalStorage.set('lastPath',newPath.path)
})

function cook () {
  LocalStorage.set('CookieConfirm', '1')
}

function showCookieConfirm () {
  if (LocalStorage.getItem('CookieConfirm')) {
    return
  }

  q.notify({
    message: 'Мы тоже используем Cookies. Потому что без них ничего не работает.',
    color: 'primary',
    timeout: 0,
    multiLine: true,
    onDismiss: cook,
    icon: 'ion-information-circle-outline',
    //avatar: 'usso.logo.svg',
    actions: [
      {
        label: 'Понятно',
        color: 'yellow',
        handler: () => { /* ... */ }
      }
    ]
  })
}


//----------------------------------------------------------------------

onBeforeMount(() => {
  if(!process.env.isDebug){
    //router.push({ path: '/maintenance' })
    //window.location.href = '/maintenance'
  }
})

onMounted(() => {
  LocalStorage.set('lastPath',route.path)
  if (!process.env.isDebug) {
    api.defaults.headers.common['Accept'] = "application/json"
  }
  console.log('mainLayout Mounted')
  showCookieConfirm()
})

const metaData = {
  meta: {
    viewport: {
      name: 'viewport',
      content: 'initial-scale=1, width=device-width, user-scalable=yes'
    },
    equiv: { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' }
  },
}
useMeta(metaData)
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
