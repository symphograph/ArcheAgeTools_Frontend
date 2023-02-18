<template>
  <q-select v-model="curAccount.AccSets.serverId"
            :options="Servers"
            borderless
            option-value="id"
            option-label="name"
            :popup-content-style="{ backgroundColor: 'rgb(181 238 8 / 93%)', color: '#4B3A23' }"
            @focus="inputClass = 'Input InputActive'"
            @blur="inputClass = 'Input'"
            @update:model-value="save()"
            :class="inputClass"
            label="Сервер"
            map-options
            emit-value
  >
    <template v-slot:option="scope">
      <q-item v-bind="scope.itemProps">
        <q-item-section>
          <q-item-label caption>Группа{{ scope.opt.group }}</q-item-label>
          <q-item-label>{{ scope.opt.name }}</q-item-label>
        </q-item-section>
      </q-item>
    </template>
  </q-select>
</template>

<script setup>
import {useQuasar} from "quasar";
import {inject, ref} from "vue";
import {api} from "boot/axios";
import {notifyError, notifyOK} from "src/myFuncts";

const q = useQuasar()
const apiUrl = String(process.env.API)
const token = inject('token')
const curAccount = inject('curAccount')
const Servers = inject('Servers')
const inputClass = ref('Input')
const emit = defineEmits(['saved'])

function save() {
  api.post(apiUrl + 'api/set/server.php', {
    params: {
      server: curAccount.value.AccSets.serverId,
    }
  })
    .then((response) => {
      if(!!!response?.data?.result){
        throw new Error();
      }
      q.notify(notifyOK(response.data.result))
      inputClass.value = 'Input'
      emit('saved')
    })
        .catch((error) => {
      q.notify(notifyError(error))
    })
}
</script>

<style scoped>

</style>
