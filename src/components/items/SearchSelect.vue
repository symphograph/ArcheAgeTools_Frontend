<template>

    <q-select :options="options"
              v-if="SearchList.length"
              v-model="selectedItem"
              option-label="name"
              option-value="id"
              map-options
              filled
              use-input
              autocomplete="off"
              fill-input
              hide-selected
              :label="label()"
              input-debounce="0"
              ref="searchInput"
              @filter="filterFn"
              @update:model-value="itemSelected"
              :popup-content-style="{ backgroundColor: 'rgb(181 238 8 / 97%)' }"
    >

      <template v-slot:prepend v-if="selectedItem">
        <div style="width: 40px">
          <ItemIcon :icon="selectedItem.icon" :grade="selectedItem.grade"></ItemIcon>
        </div>
      </template>
      <template v-if="selectedItem" v-slot:append>
        <q-icon name="cancel" @click.stop.prevent="clear" class="cursor-pointer" />
      </template>
      <template v-slot:option="scope">
        <q-item v-bind="scope.itemProps">
          <q-item-section avatar>
            <ItemIcon :icon="scope.opt.icon" :grade="scope.opt.grade"></ItemIcon>
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ scope.opt.name }}</q-item-label>
            <q-item-label caption v-if="scope.opt.craftable">Крафтабельный</q-item-label>
            <q-item-label caption v-if="scope.opt.personal">Персональный</q-item-label>
          </q-item-section>
        </q-item>
      </template>

    </q-select>
</template>

<script setup>
import {api} from 'boot/axios'
import {useQuasar} from 'quasar'
import {onMounted, ref, provide, inject, watch} from "vue"
import ItemIcon from "components/ItemIcon.vue"
import {useRoute, useRouter} from 'vue-router'

const route = useRoute()
const router = useRouter()

const q = useQuasar()
const apiUrl = String(process.env.API)
const token = inject('token')

const SearchList = inject('SearchList')
const selectedItem = inject('selectedItem')

const options = ref([...SearchList.value])
//const itemId = inject('itemId')
const Item = inject('Item')
const selCategId= inject('selCategId')
const selCategNode = inject('selCategNode',null)
const searchInput = ref(null)
const emit = defineEmits(['iAmSelected'])

function label() {

  if(Item.value && selCategId.value) {

    return Item.value.Info.Category.name
  }
  return 'Все'
  //return selCategNode.value ? selCategNode.value.name : 'Все'
}

function itemSelected () {
  route.params.id = selectedItem.value.id
  router.push({ path: '/item/' +  route.params.id })
  selCategId.value = selectedItem.value.categId
  emit('iAmSelected')
}

watch(selCategId, () => {
  //selected.value = null
  if(selCategId.value){
    //searchInput.value.showPopup()
    //clear()
  }
}, {deep: true})

watch(Item, () => {
  if(SearchList.value.length && route.params.id && Item.value) {
    selectedItem.value = SearchList.value.find(el => el.id === Item.value.id)
    selCategId.value = selectedItem.value.categId
  }
}, {deep: true})

function filterFn (val, update, abort) {
  if (val === '' && !selCategId.value) {
    update(() => {
      options.value = [...SearchList.value]
    })
    return
  }

  update(() => {
    const needle = val.toLowerCase()
    let List = [...SearchList.value]
    if(selCategId.value){
      List = List.filter(v => v.categId === selCategId.value)
    }
    if(val){
      List = [...List].filter(v => v.name.toLowerCase().indexOf(needle) > -1)
    }
    options.value = List
  })
}

function loadList() {
  api.post(apiUrl + 'api/get/search.php', {
    params: {
      token: token.value
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
        return false
      }
      if (response.data.result) {
        SearchList.value = response.data.data
      }
    })
    .catch(() => {
      q.notify({
        color: 'negative',
        position: 'center',
        message: 'Сервер не отвечает',
        icon: 'report_problem',
        closeBtn: 'Закрыть'
      })
    })
}

function clear() {
  selectedItem.value = null
  //itemId.value = 0
  selCategId.value = 0
}

onMounted(() => loadList())

</script>

<style scoped>

</style>
