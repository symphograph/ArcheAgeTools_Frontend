<template>
  <q-list separator v-if="CategoriesList">
    <q-expansion-item :content-inset-level="0.2" default-opened>
      <template v-slot:header>
        <q-item-section avatar>
          <q-avatar>
            <q-img src="/img/crafcul.png" :ratio="30/30"></q-img>
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>Предметы</q-item-label>
          <q-item-label caption>Каталог итемов</q-item-label>
        </q-item-section>
      </template>
      <q-item-section>
        <q-tree
          ref="tree"
          accordion
          :nodes="CategoriesList"
          label-key="name"
          v-model:expanded="expandedCategNode"
          v-model:selected="selCategId"
          no-transition
          selected-color="orange"
          @update:selected="upCat"
          node-key="id"
          dense
        />
      </q-item-section>
    </q-expansion-item>
  </q-list>
</template>

<script setup>
import {inject, onMounted, ref, watch} from "vue";
import {api} from "boot/axios";
import {useQuasar} from "quasar";
const q = useQuasar()
const apiUrl = String(process.env.API)

const CategoriesList = inject('CategoriesList')
const expandedCategNode = inject('expandedCategNode')
const selCategId = inject('selCategId')
const selCategNode = inject('selCategNode')
const tree = ref(null)


watch(selCategId, () => {
  let node = tree.value.getNodeByKey(selCategId.value)
  let id = 0

  if (node) {
    let parentNode = tree.value.getNodeByKey(node.parent)
    selCategNode.value = node
    expandedCategNode.value = [parentNode.parent, node.parent]
  } else {
    selCategNode.value = null
  }

}, {deep: true})


onMounted(() => {
  loadCategList()
})

function upCat() {

}

function loadCategList() {

  api.post(apiUrl + 'api/get/categories.php', {
    params: {
      token: '12345'
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
        CategoriesList.value = null
        return false
      }
      if (response.data.result) {
        CategoriesList.value = response.data.data
      }
    })
    .catch(() => {
      CategoriesList.value = null
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

</style>
