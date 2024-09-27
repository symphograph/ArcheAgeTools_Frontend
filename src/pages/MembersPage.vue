<script setup lang="ts">

import {useMeta, useQuasar} from "quasar";
import {inject, onMounted, Ref, ref} from "vue";
import {api} from "boot/axios";
import MemberLastItem from "components/members/MemberLastItem.vue";
import MemberAvaCell from "components/members/MemberAvaCell.vue";
import {notifyError, notifyOK} from "src/js/myFuncts";
import ServerGroupSelect from "components/account/ServerGroupSelect.vue";
import {Member} from "src/js/member";

const q = useQuasar()
const apiUrl = String(process.env.API)
const curAccount = inject('curAccount') as Ref<any>
const Members = ref([]) as Ref<Member[]>
const memberListProgress = ref(false)

const navigatorRef = ref(null)

function update(memberId: number, isFollow: boolean){
  api.post(apiUrl + 'api/member.php', {
    params: {
      method: 'followToggle',
      master: memberId,
      serverGroupId: curAccount.value.settings.serverGroupId,
      isFollow: isFollow
    }
  })
    .then((response) => {
      if(!!!response?.data?.result){
        throw new Error();
      }
      q.notify(notifyOK(response?.data?.result ?? 'Ой!'))
    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
}

onMounted(() => {
  loadMembers()
})

function loadMembers() {
  if(curAccount.value.settings.serverGroupId === 100){
    Members.value = []
    return;
  }
  memberListProgress.value = true
  api.post(apiUrl + '/api/member.php', {
    params: {
      method: 'list',
      serverGroupId: curAccount.value.settings.serverGroupId
    }
  })
    .then((response) => {
      if(!!!response?.data?.result){
        throw new Error();
      }
      Members.value = response?.data?.data ?? []
    })
    .catch((error) => {
      Members.value = []
      q.notify(notifyError(error))
    })
    .finally(()=>{memberListProgress.value = false})
}

function anyProgress(){
  return memberListProgress.value;
}

const refServerGroupSelect = ref()
function onSelectServerGroup() {
  refServerGroupSelect.value.saveServerGroup()
}

const metaData = {
  title: 'Сообщество',
  meta: {
    viewport:
      {
        name: 'viewport',
        content: 'initial-scale=0.6,width=device-width, user-scalable=yes'
      }
  }
}
useMeta(metaData)

</script>

<template>
  <div class="WindowArea column">
    <div class="navigator" ref="navigatorRef">
      <ServerGroupSelect :groupId="curAccount.settings.serverGroupId"
                         @onSelect="onSelectServerGroup()"
                         @onSave="loadMembers()"
                         ref="refServerGroupSelect"
      ></ServerGroupSelect>
    </div>
    <q-linear-progress :animation-speed="200"  color="green" :indeterminate="anyProgress()"></q-linear-progress>
    <q-scroll-area v-if="Members.length" class="col">
      <q-list dense separator>
        <q-item v-for="member in Members" :key="member.accountId" dense>
          <MemberAvaCell :member="member"></MemberAvaCell>
          <q-item-section>
            <MemberLastItem :member="member"></MemberLastItem>
          </q-item-section>
          <q-item-section side>
            <q-toggle v-model="member.isFollow"
                      v-if="member.accountId !== curAccount.id"
                      @update:model-value="update(member.accountId, member.isFollow)"
            >
            <q-tooltip>Доверять</q-tooltip>
            </q-toggle>
          </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </div>
</template>

<style scoped>
.navigator {
  width: 100%;
}


</style>
