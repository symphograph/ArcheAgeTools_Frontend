<template>
  <div v-if="false"></div>
</template>
<script setup>
import {LocalStorage, useQuasar} from "quasar";
import {inject, nextTick, onBeforeMount, onMounted, provide, ref} from "vue";
import {api} from "boot/axios";
import {checkPowers, dynamicForm, isExpired, isPermis, notifyError, notifyWarning} from "src/myFuncts";
import {useRoute} from "vue-router";

//const jwtDecode = jwtDecode()
const q = useQuasar()
const apiUrl = String(process.env.API)
const authUrl = String(process.env.Auth)
const route = useRoute()

const isOptionsLoaded = inject('isOptionsLoaded')
const isTokenRefreshed = inject('isTokenRefreshed')


//--------------------------------------------------------------------


const AccessToken = inject('AccessToken')
const SessionToken = inject('SessionToken')

const SessionTokenName = 'aaSessionToken'
const AccessTokenName = 'aaAccessToken'

function setToken(name, value, expires = '90d') {
  q.cookies.set(name, value, {
    expires: expires,
    path: '/',
    domain: null,
    sameSite: 'Strict',
    secure: true,
    httpOnly: false
  })
  if(name === AccessTokenName){
    api.defaults.headers.common['AccessToken'] = value
    AccessToken.value = value
    nextTick(() => {
      isTokenRefreshed.value = true
    })
  }

  if(name === SessionTokenName){
    SessionToken.value = value
  }
}

function register(){
  api.post(String(process.env.Auth) + 'api/register.php', {
    params: {
      authType: 'default'
    }
  })
    .then((response) => {
      if(!!!response?.data?.result){
        throw new Error();
      }
      setToken(SessionTokenName, response?.data?.data.SessionToken ?? '')
      setToken(AccessTokenName, response?.data?.data.AccessToken ?? '')

      //loadOptions()
    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
}

function refreshAccessToken () {
  api.post(String(process.env.Auth) + 'api/refresh.php', {
    params: {
      SessionToken: SessionToken.value,
      AccessToken: AccessToken.value
    }
  })
    .then((response) => {
      if(!!!response?.data?.result){

        throw new Error();

      }
      setToken(SessionTokenName, response?.data?.data.SessionToken ?? '')
      setToken(AccessTokenName, response?.data?.data.AccessToken ?? '')
      //loadOptions()

    })
    .catch((error) => {
      if(error?.response?.status === 401){
        register()
        return
      }
      q.notify(notifyError(error))
    })
}

function reLogin (toAccountId, authType) {
  isTokenRefreshed.value = false
  isOptionsLoaded.value = false
  api.post(String(process.env.Auth) + '/api/relogin.php', {
    params: {
      SessionToken: SessionToken.value,
      AccessToken: AccessToken.value,
      toAccountId: toAccountId
    }
  })
    .then((response) => {
      if(!!!response?.data?.result){
        throw new Error();
      }
      refreshAccessToken()

    })
    .catch((error) => {
      if(isExpired(error)){
        register()
        return
      }
      if(error?.response?.data?.error === 'needLogin'){
        dynamicForm(authUrl + 'auth/' + authType + '/login.php', {
          AccessToken: AccessToken.value,
          SessionToken: SessionToken.value
        })
      }
      q.notify(notifyError(error))
    })
}

defineExpose({
  reLogin
})

onBeforeMount(() => {
  console.log('auth beforeMounted')
  if(!process.env.isDebug){
    api.defaults.headers.common['Accept'] = "application/json"
  }
})

onMounted(() => {

  console.log('auth Mounted')
  if(!!!q.cookies.getAll()[AccessTokenName] || !!!q.cookies.getAll()[SessionTokenName]){
    register()
  } else {
    SessionToken.value = q.cookies.getAll()[SessionTokenName] ?? ''
    AccessToken.value = q.cookies.getAll()[AccessTokenName] ?? ''
    refreshAccessToken()
  }

})
</script>

<style scoped>

</style>
