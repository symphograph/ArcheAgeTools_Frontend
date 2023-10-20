<template>
  <q-item separator dark v-if="CategoriesList">
      <q-item-section>
        <q-tree
            dark
            color="gray"
            control-color="black"
          ref="tree"
          accordion
          :nodes="CategoriesList"
          label-key="name"
          v-model:expanded="expandedCategNode"
          v-model:selected="selCategId"
          no-transition
          selected-color="orange"
          @update:selected="setCategMode"
          node-key="id"
          dense
        />
      </q-item-section>
  </q-item>
</template>

<script setup>
import {inject, onMounted, ref, watch} from "vue";
import {api} from "boot/axios";
import {useQuasar} from "quasar";
import {useRoute, useRouter} from "vue-router";
import {notifyError} from "src/myFuncts";
const q = useQuasar()
const apiUrl = String(process.env.API)
const route = useRoute()
const router = useRouter()

const CategoriesList = inject('CategoriesList')
const expandedCategNode = inject('expandedCategNode')
const selCategId = inject('selCategId')
const selCategNode = inject('selCategNode')
const tree = ref(null)
const categMode = inject('categMode')


watch(selCategId, () => {
  if(!tree.value) return
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

function setCategMode() {
  if (route.path !== '/category'){
    router.push({ path: '/category' })
  }
}

function loadCategList() {

  api.post(apiUrl + 'api/options.php', {
    params: {
      method: 'getCategories'
    }
  })
    .then((response) => {
      if(!!!response?.data?.result){
        throw new Error();
      }
      if (response.data.result) {
        CategoriesList.value = response?.data?.data ?? []
      }
    })
    .catch((error) => {
      q.notify(notifyError(error,'Категории не загрузились'))
    })
}
</script>

<style scoped>

</style>
