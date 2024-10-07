<template>
  <div v-if="false"></div>
</template>
<script setup lang="ts">
import {LocalStorage, useQuasar} from "quasar";
import {inject, onBeforeMount, onMounted, provide, ref, Ref} from "vue";
import {api} from "boot/axios";
import {dynamicForm, isExpired, notifyError} from "src/js/myFuncts";
import {useRoute} from "vue-router";
import { myUser } from 'src/js/myAuth';


const q = useQuasar()
const apiUrl = String(process.env.API)
const authUrl = String(process.env.Auth)
const route = useRoute()

const isOptionsLoaded = inject('isOptionsLoaded') as Ref<boolean>


const isTokenRefreshed = inject('isTokenRefreshed') as Ref<boolean>


//--------------------------------------------------------------------

const SessionTokenName = 'aaSessionToken'
const AccessTokenName = 'aaAccessToken'

function setToken(name: string, value: string, expires = '90d') {
  q.cookies.set(name, value, {
    expires: expires,
    path: '/',
    domain: undefined,
    sameSite: 'Strict',
    secure: true,
    httpOnly: false
  })
  if(name === AccessTokenName){
    api.defaults.headers.common['AccessToken'] = value
    myUser.self.AccessToken = value
  }

  if(name === SessionTokenName){
    myUser.self.SessionToken = value
  }
}

function register(){
  api.post(String(process.env.Auth) + '/api/register.php', {
    params: {
      method: 'register',
      authType: 'default'
    }
  })
    .then((response) => {
      if(!response?.data?.result){
        throw new Error();
      }
      setToken(AccessTokenName, response?.data?.data.AccessToken ?? '')
      setToken(SessionTokenName, response?.data?.data.SessionToken ?? '')
      isTokenRefreshed.value = true


    })
    .catch((error) => {
      console.error(error)
      q.notify(notifyError(error))
    })
}
provide('register', register)

function refreshAccessToken () {
  api.post(String(process.env.Auth) + '/api/refresh.php', {
    params: {
      method: 'refresh',
      SessionToken: myUser.self.SessionToken,
      AccessToken: myUser.self.AccessToken
    }
  })
    .then((response) => {
      if(!response?.data?.result){
        throw new Error();
      }
      setToken(SessionTokenName, response?.data?.data.SessionToken ?? '')
      setToken(AccessTokenName, response?.data?.data.AccessToken ?? '')
      isTokenRefreshed.value = true

    })
    .catch((error) => {
      if(error?.response?.status === 401){
        register()
        return
      }
      console.error(error)
      q.notify(notifyError(error))
    })
}
provide('refreshAccessToken', refreshAccessToken)

function reLogin (toAccountId: number, authType: string) {
  isTokenRefreshed.value = false
  isOptionsLoaded.value = false
  api.post(String(process.env.Auth) + '/api/relogin.php', {
    params: {
      method: 'reload',
      SessionToken: myUser.self.SessionToken,
      AccessToken: myUser.self.AccessToken,
      toAccountId: toAccountId
    }
  })
    .then((response) => {
      if(!response?.data?.result){
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
        dynamicForm(authUrl + 'login/' + authType + '/login.php', {
            AccessToken: myUser.self.AccessToken,
            SessionToken: myUser.self.SessionToken
        })
      }
      //q.notify(notifyError(error))
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
  myUser.self = new myUser()
})

onMounted(() => {

  console.log('auth Mounted')
  if(!q.cookies.getAll()[AccessTokenName] || !q.cookies.getAll()[SessionTokenName]){
    register()
  } else {
    setToken(SessionTokenName, q.cookies.getAll()[SessionTokenName])
    setToken(AccessTokenName, q.cookies.getAll()[AccessTokenName])
    refreshAccessToken()
  }

})
</script>

<style scoped>

</style>
