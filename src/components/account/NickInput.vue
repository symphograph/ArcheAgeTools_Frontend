<template>
  <q-input v-model="curAccount.settings.publicNick"
           ref="nickRef"
           label="Публичный ник"
           borderless
           autocomplete="off"
           :class="nickClass"
           @focus="nickClass = 'Input InputActive'"
           @blur="nickClass = 'Input'"
           @update:model-value="isNickValid()"
           :rules="[val => !nickErr.length || nickErr]"
  >
    <template v-slot:append>
      <q-btn label="Ok"
             v-if="nickErr === ''"
             class="DefBtn"
             dense
             no-caps
             @click="saveNick()" ></q-btn>
    </template>
  </q-input>
</template>

<script setup>
import {useQuasar} from "quasar";
import {inject, ref} from "vue";
import {api} from "boot/axios";
import {notifyError, notifyOK} from "src/js/myFuncts";

const q = useQuasar()
const apiUrl = String(process.env.API)
const curAccount = inject('curAccount')
const nickErr = ref('')
const nickRef = ref(null)
const nickClass = ref('Input')


function isNickValid()
{
  if(curAccount.value.settings.publicNick.length < 3) {
    nickErr.value = 'Не короче 3'
    nickRef.value.validate()
    return false;
  }
  if(curAccount.value.settings.publicNick.length > 20) {
    nickErr.value = 'Не длиннее 20'
    nickRef.value.validate()
    return false
  }
  if(!NickLangValid()){
    nickRef.value.validate()
    return false
  }
  servValidNick()
  return true
}

function NickLangValid(){
  let nick = curAccount.value.settings.publicNick
  let re = new RegExp("^([a-zA-Zа-яА-ЯёЁ0-9]{3,20})$")
  let re1 = new RegExp("^([a-zA-Z0-9]{3,20})$")
  let re2 = new RegExp("^([а-яА-ЯёЁ0-9]{3,20})$")

  if(re1.test(nick) || re2.test(nick)){
    nickErr.value = ''
    return true;
  }

  if(re.test(nick)){
    nickErr.value = 'Не смешивайте языки'
    return false;
  }

  nickErr.value = 'Только буквы и цифры'
}

function servValidNick() {
  api.post(apiUrl + 'api/set/nick.php', {
    params: {
      nick: curAccount.value.settings.publicNick,
      save: false
    }
  })
    .then((response) => {
      if(!!!response?.data?.result){
        throw new Error();
      }
      nickErr.value = ''
      nickRef.value.validate()
    })
    .catch((error) => {
      nickErr.value =
        !!error?.response?.data?.error
          ? error.response.data.error
          : 'Сервер не ответил'
      nickRef.value.validate()
    })
}

function saveNick() {
  nickRef.value.blur()
  api.post(apiUrl + 'api/set/nick.php', {
    params: {
      nick: curAccount.value.settings.publicNick,
      save: true
    }
  })
    .then((response) => {
      if(!!!response?.data?.result){
        throw new Error();
      }
      q.notify(notifyOK())
    })
        .catch((error) => {
      q.notify(notifyError(error))
    })
}
</script>

<style scoped>
</style>
