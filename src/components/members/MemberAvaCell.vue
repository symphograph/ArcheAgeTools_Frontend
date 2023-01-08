<template>
    <q-item-section avatar>
      <q-btn round glossy class="MemberAva">
        <q-avatar size="40px">
          <img class="MemberAvaImg" :src="apiUrl + member.Avatar.src" alt="">
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
</template>

<script setup>
import {ref} from "vue";

const apiUrl = String(process.env.API)
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
