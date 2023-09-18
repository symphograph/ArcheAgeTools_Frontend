<template>
  <q-list dark separator>
    <template v-for="(row, idx) in rows" :key="idx">
      <LogRow :row="row"></LogRow>
    </template>
  </q-list>
</template>

<script setup>
import {api} from "boot/axios"
import {onMounted, ref} from "vue";
import {useMeta, useQuasar} from "quasar";
import {notifyError} from "src/myFuncts";
import LogRow from "components/logs/LogRow.vue";

const q = useQuasar()
const apiUrl = String(process.env.API)
const rows = ref([])
onMounted(() => {
  console.log('jh')
  getLogs()
})

const metaData = {
  title: 'Логи'
}
useMeta(metaData)

function getLogs() {


  if (process.env.isDebug) {
    //api.defaults.headers.common['Accept'] = "application/json"
  }

  api.post(apiUrl + 'test/logs.php', {
    params: {
      //path: route.path,
    }
  })
    .then((response) => {
      if(!!!response?.data?.result){
        throw new Error();
      }

      rows.value = response?.data?.data ?? []
    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
}
</script>

<style>

</style>
