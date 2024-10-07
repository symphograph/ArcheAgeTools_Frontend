<script setup lang="ts">

import DrawerContent from "components/DrawerContent.vue";
import AccountSelector from "components/account/AccountSelector.vue";
import LoginList from "components/account/LoginList.vue";
import ItemIcon from "components/ItemIcon.vue";
import {inject, Ref, ref} from "vue";
import {useQuasar} from "quasar";
import {api} from "boot/axios";
import {notifyError, notifyOK} from "src/js/myFuncts";
import {myAccSets} from "src/js/myAuth";

const q = useQuasar()
const apiUrl = String(process.env.API)

const authUrl = String(process.env.Auth)

const emit = defineEmits(['reLogin'])

const leftDrawerOpen = ref(false)

const AccountList = inject('AccountList') as Ref<any[]>

const curAccount = inject('curAccount') as Ref<any>

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

function test() {
  api.post(String(process.env.API) + 'api/test.php',{
    params:{
      method: 'test'
    }
  })
    .then((response) => {
      if (!response?.data?.result) {
        //throw new Error();
      }
      //q.notify(notifyOK(response.data.result))
    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
}
</script>

<template>
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
        <AccountSelector v-if="AccountList && AccountList.some(item => item.authType !== 'default')" @onSelectAccount="emit('reLogin')"></AccountSelector>
        <LoginList v-else></LoginList>
      </q-tabs>
      <template v-else>
        <ItemIcon
          :locIcon="authUrl + curAccount.Avatar.src"
          :grade="myAccSets.self.grade"
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
    :dark="true"
  >
    <DrawerContent></DrawerContent>
  </q-drawer>
</template>

<style scoped>

</style>
