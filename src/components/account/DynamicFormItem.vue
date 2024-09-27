<script setup>


import {dynamicForm} from "src/js/myFuncts";
import {useQuasar} from "quasar";
import {myUser} from "src/js/myAuth";

const q = useQuasar()
const props = defineProps({
  btnLabel: String,
  icon: String,
  url: String
})

</script>

<template>
  <q-item clickable
          dark
          @click="dynamicForm(url, {
                AccessToken: myUser.self.AccessToken,
                SessionToken: myUser.self.SessionToken
              })"
  >
    <q-item-section avatar>
      <q-avatar>
        <q-img :src="icon"></q-img>
      </q-avatar>
    </q-item-section>

    <q-item-section>
      <q-item-label caption>Войти через</q-item-label>
      <q-item-label>{{ props.btnLabel }}</q-item-label>
    </q-item-section>
  </q-item>
</template>



<style scoped>

</style>
