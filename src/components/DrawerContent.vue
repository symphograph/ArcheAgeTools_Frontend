<template>
  <template v-if="q.platform.is.mobile">
    <AccountSelector v-if="AccountList && AccountList.length"></AccountSelector>
    <LoginList v-else></LoginList>
  </template>
  <q-list separator>
    <q-item-label
      header
    >
      Graph Tools
    </q-item-label>

    <EssentialLink
      v-for="link in linksList"
      :key="link.title"
      v-bind="link"
     :title="link.title"></EssentialLink>
    <CategoryTree v-if="isItemPage && Servers.length"></CategoryTree>
  </q-list>
</template>

<script setup>
import EssentialLink from 'components/EssentialLink.vue'
import {computed, inject, onMounted} from "vue";
import {useRoute} from "vue-router";
import CategoryTree from "components/category/CategoryTree.vue";
import AccountSelector from "components/account/AccountSelector.vue";
import LoginList from "components/account/LoginList.vue";
import {useQuasar} from "quasar";
const route = useRoute()


const q = useQuasar()
const AccountList = inject('AccountList')
const linksList = [
  {
    title: 'Паки',
    caption: 'Таблиица паков',
    ava: '/img/pack.png',
    link: '/packs'
  },
  {
    title: 'Крафкулятор',
    caption: 'Расчет себестоимости',
    ava: '/img/crafcul.png',
    link: '/item/'
  },
  {
    title: 'Категории',
    caption: 'Предметы и категории',
    ava: '/img/crafcul.png',
    link: '/category'
  },
  {
    title: 'Мои цены',
    caption: 'Цены предметов',
    ava: '/img/crafcul.png',
    link: '/myprices/'
  },
  {
    title: 'Сообщество',
    caption: 'Цены игроков',
    ava: '/img/comunity.png',
    link: '/members'
  },
  {
    title: 'Настройки',
    caption: 'Настройте свои параметры',
    ava: '/img/settings.png',
    link: '/account'
  }
]
const Servers = inject('Servers')

const isItemPage = computed(()=>{
  return !!(route.path.match(/^\/item\//)) || !!(route.path.match(/^\/category/));
})

onMounted(() => {
  //console.log(route.path.match(/^\/item\//))
})

</script>

<style scoped>

</style>
