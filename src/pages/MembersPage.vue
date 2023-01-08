<template>
  <div class="WindowArea column">
    <div class="navigator" ref="navigatorRef">
      <ServerSelect @saved="loadMembers()"></ServerSelect>
    </div>
    <q-scroll-area v-if="Members" class="col" :style="'width: 100%;'">
      <q-list dense separator>
        <q-item v-for="member in Members" :key="member.id" dense>
          <MemberAvaCell :member="member"></MemberAvaCell>
          <q-item-section>
            <MemberLastItem :member="member"></MemberLastItem>
          </q-item-section>
          <q-item-section side>
            <q-toggle v-model="member.Member.isFollow"
                      v-if="member.id !== curAccount.id"
                      @update:model-value="update(
                        {
                        id: member.Member.accountId,
                        isFollow: member.Member.isFollow
                        }
                        )"
            >
            <q-tooltip>Доверять</q-tooltip>
            </q-toggle>
          </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </div>
</template>

<script setup>


import {useRoute, useRouter} from "vue-router";
import {useQuasar} from "quasar";
import {inject, onMounted, ref} from "vue";
import {api} from "boot/axios";
import ServerSelect from "components/account/ServerSelect.vue";
import MemberLastItem from "components/members/MemberLastItem.vue";
import MemberAvaCell from "components/members/MemberAvaCell.vue";

const route = useRoute()
const router = useRouter()
const q = useQuasar()
const apiUrl = String(process.env.API)
const token = inject('token')

const curAccount = inject('curAccount')

const Members = ref(null)

const navigatorRef = ref(null)

function update(member){
  api.post(apiUrl + 'api/set/follow.php', {
    params: {
      token: token.value,
      master: member.id,
      serverId: curAccount.value.AccSets.serverId,
      isFollow: member.isFollow
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
    .catch(() => {
      q.notify({
        color: 'negative',
        position: 'center',
        html: true,
        message: 'Что-то со связью.<br>Не сохранилось.',
        timeout: 500,
        icon: 'report_problem',
        closeBtn: 'Закрыть'
      })
    })
}

onMounted(() => {
  loadMembers()
})

function loadMembers() {
  api.post(apiUrl + '/api/get/members.php', {
    params: {
      token: token.value,
      serverId: curAccount.value.AccSets.serverId
    }
  })
    .then((response) => {
      if (response.data.error) {
        q.notify({
          color: 'negative',
          position: 'center',
          message: response.data.error,
          icon: 'report_problem',
          closeBtn: 'Закрыть'
        })
        Members.value = null
        return false
      }
      if (response.data.result) {
        Members.value = response.data.data
      }
    })
    .catch(() => {
      Members.value = null
      q.notify({
        color: 'negative',
        position: 'center',
        message: 'Сервер не отвечает',
        icon: 'report_problem',
        closeBtn: 'Закрыть'
      })
    })
}

</script>

<style scoped>
.navigator {
  width: 100%;
}


</style>
