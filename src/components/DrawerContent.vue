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
    caption: 'Раскрываемый',
    ava: '/img/pack.png',
    children: [
      {
        title: 'Паки',
        caption: 'Таблица паков',
        ava: '/img/pack.png',
        link: '/packs'
      },
      {
        title: 'Пакулятор',
        caption: 'Калькулятор паков',
        ava: '/img/packmaker.png',
        link: '/packinfo'
      },
    ]
  },
  {
    title: 'Предметы',
    caption: 'Расчет себестоимости',
    ava: '/img/crafcul.png',
    children: [
      {
        title: 'Крафкулятор',
        caption: 'Расчет себестоимости',
        link: '/item/'
      },
      {
        title: 'Категории',
        caption: 'Предметы и категории',
        link: '/category'
      },
    ]
  },

  {
    title: 'Мои цены',
    caption: 'Цены предметов',
    ava: '/img/myprices.png',
    link: '/myprices/'
  },
  {
    title: 'Сообщество',
    caption: 'Цены игроков',
    ava: '/img/community.png',
    link: '/members'
  },
  {
    title: 'Настройки',
    caption: 'Настройте свои параметры',
    ava: '/img/settings.png',
    link: '/settings'
  }
]
//const Servers = inject('Servers')
const ServerGroupList = inject('ServerGroupList')
const isItemPage = computed(()=>{
  return !!(route.path.match(/^\/item\//)) || !!(route.path.match(/^\/category/));
})

onMounted(() => {
  //console.log(route.path.match(/^\/item\//))
})

</script>

<template>
  <template v-if="q.platform.is.mobile">
    <AccountSelector v-if="AccountList && AccountList.some(item => item.authType !== 'default')"></AccountSelector>
    <LoginList v-else></LoginList>
  </template>
  <q-list separator>
    <q-item-label
      header
    >
      Graph Tools
    </q-item-label>
    <template v-for="item in linksList" :key="item.title">
      <template v-if="item?.children && item?.children.length">
        <q-expansion-item
          :content-inset-level="0.2"
          expand-separator
          :label="item.title"
          :caption="item.caption"
          default-closed
        >
          <template v-slot:header>
            <q-item-section avatar v-if="item?.ava">
              <q-avatar>
                <img :src="item.ava">
              </q-avatar>
            </q-item-section>
            <q-item-section>
              {{ item.title }}
            </q-item-section>
          </template>
          <EssentialLink
            v-for="link in item.children"
            :key="link.title"
            v-bind="link"
            :title="link.title"></EssentialLink>
        </q-expansion-item>
      </template>
      <template v-else>
        <EssentialLink
          :key="item.title"
          v-bind="item"
          :title="item.title"></EssentialLink>
      </template>
    </template>

    <CategoryTree v-if="isItemPage && ServerGroupList.length"></CategoryTree>
  </q-list>
</template>

<style scoped>

</style>
