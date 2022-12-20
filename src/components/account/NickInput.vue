<template>
  <q-input v-model="curAccount.AccSets.publicNick"
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

const q = useQuasar()
const apiUrl = String(process.env.API)
const token = inject('token')
const curAccount = inject('curAccount')
const nickErr = ref('')
const nickRef = ref(null)
const nickClass = ref('Input')


function isNickValid()
{
  if(curAccount.value.AccSets.publicNick.length < 3) {
    nickErr.value = 'Не короче 3'
    nickRef.value.validate()
    return false;
  }
  if(curAccount.value.AccSets.publicNick.length > 20) {
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
  let nick = curAccount.value.AccSets.publicNick
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
      token: token.value,
      nick: curAccount.value.AccSets.publicNick,
      save: false
    }
  })
    .then((response) => {

      if (response.data.result) {
        nickErr.value = ''
      }

      if (response.data.error) {
        nickErr.value = response.data.error
      }
      nickRef.value.validate()
    })
    .catch((error) => {
      nickErr.value = 'Сервер не ответил'
      nickRef.value.validate()
    })
}

function saveNick() {
  nickRef.value.blur()
  api.post(apiUrl + 'api/set/nick.php', {
    params: {
      token: token.value,
      nick: curAccount.value.AccSets.publicNick,
      save: true
    }
  })
    .then((response) => {

      if (response.data.result) {
        q.notify({
          color: 'positive',
          position: 'center',
          message: response.data.result,
          timeout: 300,
          closeBtn: 'Закрыть'
        })
        return true
      }

      let msg = 'Ой! Не получается.:('
      if (response.data.error) {
        msg = response.data.error
      }

      q.notify({
        color: 'negative',
        position: 'center',
        message: msg,
        icon: 'report_problem',
        timeout: 300,
        closeBtn: 'Закрыть'
      })
      return false

    })
    .catch((error) => {
      q.notify({
        color: 'negative',
        position: 'center',
        message: 'Сервер не отвечает',
        timeout: 300,
        icon: 'report_problem'
      })
    })
}
</script>

<style scoped>
</style>
