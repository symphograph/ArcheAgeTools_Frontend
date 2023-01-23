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
      token: token.value,
      server: curAccount.value.AccSets.serverId,
    }
  })
    .then((response) => {

      if (response.data.result) {
        q.notify({
          color: 'positive',
          position: 'center',
          message: response.data.result,
          timeout: 100,
          closeBtn: 'Закрыть'
        })
        inputClass.value = 'Input'
        //location.reload();
        emit('saved')

        return true
      }

      let msg = 'Ой! Не получается.:('
      if (response.data.error) {
        msg = response.data.error
      }

      q.notify({
        color: 'negative',
        position: 'center',
        message: msg,
        icon: 'report_problem',
        timeout: 300,
        closeBtn: 'Закрыть'
      })
      return false

    })
    .catch((error) => {
      q.notify({
        color: 'negative',
        position: 'center',
        message: 'Сервер не отвечает',
        timeout: 300,
        icon: 'report_problem'
      })
    })
}
</script>

<style scoped>

</style>
