<template>
  <div class="WindowArea column">
    <div class="navigator" ref="navigatorRef">
      <ServerSelect @saved="loadMembers()"></ServerSelect>
    </div>
    <q-scroll-area v-if="Members" class="col" :style="'width: 100%;'">
      <q-list dense separator>
        <q-item v-for="member in Members" :key="member.id" dense>
          <q-item-section avatar>
            <q-btn round glossy class="MemberAva">
              <q-avatar size="40px">
                <img style="width: 100%; height: 100%" :src="apiUrl + member.Avatar.src">
              </q-avatar>
            </q-btn>
          </q-item-section>
          <q-item-section class="MemberInfo">
            <q-item-label>{{member.AccSets.publicNick}}</q-item-label>
            <q-item-label caption>Записей:{{ member.Member.pricesCount }}</q-item-label>
            <q-item-label caption v-if="member.Member.followersCount">
              Доверяют:{{ member.Member.followersCount }}
            </q-item-label>
          </q-item-section>
          <q-item-section>
            <q-item dense>
              <q-item-section avatar>
                <q-btn dense flat :href="'/item/' + member.Member.LastPricedItem.id">
                  <ItemIcon :icon="member.Member.LastPricedItem.icon"
                            :grade="member.Member.LastPricedItem.grade"
                  ></ItemIcon>
                </q-btn>
              </q-item-section>
              <q-item-section avatar>
                <q-item-label caption>{{ fDate(member.Member.LastPricedItem.Price.datetime) }}</q-item-label>
                <q-item-label>{{ member.Member.LastPricedItem.name }}</q-item-label>
                <q-item-label>
                  <PriceImager :currencyId="500" :price="member.Member.LastPricedItem.Price.price"></PriceImager>
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-item-section>
          <q-item-section  side>
            <q-toggle v-model="member.Member.isFollow"
                      @update:model-value="update(
                        {
                        id: member.Member.accountId,
                        isFollow: member.Member.isFollow
                        }
                        )"
            >

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
import {fDate} from "src/myFuncts.js"
import MemberList from "components/members/MemberList.vue";
import {api} from "boot/axios";
import ItemIcon from "components/ItemIcon.vue";
import ServerSelect from "components/account/ServerSelect.vue";
import PriceImager from "components/price/PriceImager.vue";

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
    .catch((error) => {
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
.MemberAva{
  /*width: 40px;*/
  /*height: 40px;*/
  /*border-radius: 20px;*/
}
.MemberAva:hover{
  box-shadow: 0 0 4px 2px green;
}
.MemberInfo {
  max-width: 16em;
}
</style>
