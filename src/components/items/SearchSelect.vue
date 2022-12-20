<template>

    <q-select :options="options"
              v-model="selected"
              option-label="name"
              option-value="id"
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
              map-options>

      <template v-slot:prepend v-if="selected">
        <div style="width: 40px">
          <ItemIcon :icon="selected.icon" :grade="selected.grade"></ItemIcon>
        </div>
      </template>
      <template v-if="selected" v-slot:append>
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

const ItemList = ref([])
const selected = ref(null)
const options = ref([...ItemList.value])
const itemId = inject('itemId')
const Item = inject('Item')
const selCategId= inject('selCategId')
const selCategNode = inject('selCategNode',null)
const searchInput = ref(null)

function label() {
  if(Item.value) {

    //return Item.value.Info.Category.name
  }
  return selCategNode.value ? selCategNode.value.name : 'Все'
}

function itemSelected () {
  console.log(selected.value)
  itemId.value = selected.value.id
  //router.push({ path: '/item/' + itemId.value })
  //route.params.id = itemId.value
  selCategId.value = selected.value.categId
}

watch(selCategId, () => {
  //itemId.value = 0
  //selected.value = null
  if(selCategId.value){
    //searchInput.value.showPopup()
    //clear()
  }
}, {deep: true})

watch(Item, () => {
  if(itemId.value) {
    let sel = {...Item.value}
    sel.Info = null
    selected.value = sel
    selCategId.value = selected.value.categId
  }
}, {deep: true})

function filterFn (val, update, abort) {
  if (val === '' && !selCategId.value) {
    update(() => {
      options.value = [...ItemList.value]
    })
    return
  }

  update(() => {
    const needle = val.toLowerCase()
    let List = [...ItemList.value]
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
        ItemList.value = response.data.data
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
  selected.value = null
  itemId.value = 0
  selCategId.value = 0
}

onMounted(() => loadList())

</script>

<style scoped>

</style>
