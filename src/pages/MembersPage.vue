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
        <q-item v-for="member in Members" :key="member.id" dense>
          <MemberAvaCell :member="member"></MemberAvaCell>
          <q-item-section>
            <MemberLastItem :member="member"></MemberLastItem>
          </q-item-section>
          <q-item-section side>
            <q-toggle v-model="member.isFollow"
                      v-if="member.accountId !== curAccount.id"
                      @update:model-value="update(
                        {
                        id: member.accountId,
                        isFollow: member.isFollow
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
import {useMeta, useQuasar} from "quasar";
import {inject, onMounted, ref} from "vue";
import {api} from "boot/axios";
import MemberLastItem from "components/members/MemberLastItem.vue";
import MemberAvaCell from "components/members/MemberAvaCell.vue";
import {notifyError, notifyOK} from "src/js/myFuncts";
import ServerGroupSelect from "components/account/ServerGroupSelect.vue";

const route = useRoute()
const router = useRouter()
const q = useQuasar()
const apiUrl = String(process.env.API)
const curAccount = inject('curAccount')
const Members = ref([])
const memberListProgress = ref(false)

const navigatorRef = ref(null)

function update(member){
  api.post(apiUrl + 'api/set/follow.php', {
    params: {
      master: member.id,
      serverGroupId: curAccount.value.settings.serverGroupId,
      isFollow: member.isFollow
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
  api.post(apiUrl + '/api/get/members.php', {
    params: {
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

<style scoped>
.navigator {
  width: 100%;
}


</style>
