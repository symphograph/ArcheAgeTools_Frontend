<template>
      <q-item clickable
              dark
              @click="dynamicForm(url, {
                AccessToken: AccessToken,
                SessionToken: SessionToken
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

<script setup>

import {inject} from "vue";
import {dynamicForm} from "src/myFuncts";
import {useQuasar} from "quasar";

const q = useQuasar()
const props = defineProps({
  btnLabel: String,
  icon: String,
  url: String
})
const AccessToken = inject('AccessToken')
const SessionToken = inject('SessionToken')
</script>



<style scoped>

</style>
