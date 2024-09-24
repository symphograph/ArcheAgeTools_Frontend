<script setup>
import {inject, onMounted, ref} from "vue";
import {accountIdByJWT, fDateAnyFormat, fDateTime, formatTimeDifference, notifyError} from "src/myFuncts";
import ItemIcon from "components/ItemIcon.vue";
import {useQuasar} from "quasar";
import NickInput from "components/account/NickInput.vue";
import {api} from "boot/axios";

const q = useQuasar()
const apiUrl = String(process.env.API)
const authUrl = String(process.env.Auth)
const emit = defineEmits(['onUnlinkAccount'])

const curAccount = inject('curAccount')
const AccountList = inject('AccountList')


const deviceList = ref([])

function unlink(id) {
  api.post(authUrl + 'api/device.php', {
    params: {
      method: 'unlinkByAccount',
      accountId: id
    }
  })
    .then((response) => {
      if (!!!response?.data?.result) {
        throw new Error();
      }
      loadDevices()
    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
}

function loadDevices() {

  api.post(authUrl + 'api/device.php', {
    params: {
      method: 'otherList'
    }
  })
    .then((response) => {
      if (!!!response?.data?.result) {
        throw new Error();
      }
      deviceList.value = response.data.data ?? []
    })
    .catch((error) => {
      deviceList.value = []
      q.notify(notifyError(error))
    })

}

onMounted(() => {
  loadDevices()
})
</script>

<template>
  <div class="navigator">
    <q-item>
      <q-item-section avatar>
        <ItemIcon :locIcon="authUrl + curAccount.Avatar.src" :grade="1" size="70px"></ItemIcon>
      </q-item-section>
      <q-item-section>
        <q-item-label>
          <q-icon :name="'img:'+'/img/auth/' + curAccount.authType + '.svg'"></q-icon>
          {{ curAccount.nickName }}
        </q-item-label>
        <NickInput></NickInput>
      </q-item-section>
    </q-item>
  </div>

  <q-scroll-area class="col myScrollArea">
    <q-card class="MyCard">
      <q-card-section>
        <q-item>
          <q-item-section>
            Аккаунты, связанные с этим браузером на этом устройстве.
          </q-item-section>
        </q-item>
      </q-card-section>
      <q-card-section>
        <q-list>
          <template v-for="Account in AccountList" :key="Account">
            <q-item clickable v-if="Account.id !== curAccount.id && Account.authType !== 'default'">
              <q-item-section avatar>
                <ItemIcon :locIcon="authUrl + Account.Avatar.src" :grade="1" size="70px"></ItemIcon>
              </q-item-section>
              <q-item-section>
                <q-item-label caption>
                  <q-icon size="1.5em" :name="'img:'+'/img/auth/' + Account.authType + '.svg'"></q-icon>
                  {{ formatTimeDifference(Account.visitedAt) }}
                </q-item-label>
                <q-item-label>
                  {{ Account.nickName }}
                </q-item-label>
                <q-item-label>
                  {{ Account.settings.publicNick }}
                </q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-btn label="Отвязать" class="DefBtn" @click="unlink(Account.id)"></q-btn>
              </q-item-section>
            </q-item>
          </template>
          <q-separator></q-separator>
        </q-list>
      </q-card-section>
    </q-card>
    <q-card class="MyCard">
      <q-card-section>
        <q-item>
          <q-item-section>
            Сессии на других устройствах.
          </q-item-section>
        </q-item>
      </q-card-section>
      <q-card-section>
        <q-list>
          <template v-for="device in deviceList" :key="device.marker">
            <q-item style="padding: 2em 0">
              <q-item-section avatar>
                <q-icon size="2em" :name="device.ismobiledevice ? 'smartphone' : 'ion-desktop'"></q-icon>
              </q-item-section>
              <q-item-section avatar>
                <q-img :src="'/img/browser/' + device.browser + '.svg'" width="2em"></q-img>
              </q-item-section>
              <q-item-section>
                <q-item-label caption>
                  {{ fDateAnyFormat(device.visitedAt) }}
                </q-item-label>
                <q-item-label caption>
                  {{ device.platform }}
                </q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-btn label="отключить" class="DefBtn"></q-btn>
              </q-item-section>
            </q-item>
            <q-separator></q-separator>
          </template>
        </q-list>
      </q-card-section>
    </q-card>
  </q-scroll-area>
</template>

<style scoped>
.MyCard {
  background-color: rgba(211, 238, 144, 0.06);
  box-shadow: inset 0 0 0.3em 0 rgb(77 56 9);
  margin: 1em 0.7em;
  padding: 1em;
}
</style>
