<template>
    <q-item-section avatar>
      <q-btn round glossy class="MemberAva" :to="'/prices/' + member.accountId">
        <q-avatar size="40px">
          <img class="MemberAvaImg" :src="authUrl + 'img/avatars/' + member.avaFileName" alt="">
        </q-avatar>
      </q-btn>
    </q-item-section>
    <q-item-section class="MemberInfo">
      <q-item-label>{{member.publicNick}}</q-item-label>
      <q-item-label caption>Записей:{{ member.pricesCount }}</q-item-label>
      <q-item-label caption v-if="member.followersCount">
        Доверяют:{{ member.followersCount }}
      </q-item-label>
    </q-item-section>
</template>

<script setup>
import {ref} from "vue";

const apiUrl = String(process.env.API)
const authUrl = String(process.env.Auth)
const props = defineProps({
  member: ref(null)
})
</script>

<style scoped>
.MemberAvaImg {
  width: 100%;
  height: 100%;
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
