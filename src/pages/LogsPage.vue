<template>
  <q-list dark separator>
    <q-item v-for="(row, idx) in rows" :key="idx">
      <q-item-section avatar>
        <q-item-label caption>
          {{ row.datetime }}
        </q-item-label>
        <q-item-label class="type">
          {{ row.type }}
        </q-item-label>
      </q-item-section>
      <q-item-section top>
        <q-item-label class="msg">
          {{ row.msg }}
        </q-item-label>
        <q-item-label caption>
          {{ row.trace }}
        </q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script setup>
import {api} from "boot/axios"
import {onMounted, ref} from "vue";
import {useMeta, useQuasar} from "quasar";
import {notifyError} from "src/myFuncts";

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

  //api.defaults.headers.common['Authorization'] = token.value
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

<style scoped>
.msg {
  color: orange;
}
.type {
  color: mediumpurple;
}
</style>
