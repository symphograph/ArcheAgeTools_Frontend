<template>
  <q-select v-model="groupIdMutable"
            :options="ServerGroupList"
            borderless
            option-value="id"
            :popup-content-style="selectOptionsStyle"
            @focus="inputClass = 'Input InputActive'"
            @blur="inputClass = 'Input'"
            @update:model-value="emit('onSelect', groupIdMutable)"
            :class="inputClass"
            label="Сервер"
            map-options
            emit-value
  >
    <template v-slot:option="scope">
      <q-item v-bind="scope.itemProps">
        <q-item-section>
          <q-item-label>Группа {{ scope.opt.id }}</q-item-label>
          <q-item-label caption>{{ scope.opt.label }}</q-item-label>
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

const props = defineProps({
  groupId: Number
})
const groupIdMutable = ref(props.groupId)
const q = useQuasar()
const apiUrl = String(process.env.API)
const curAccount = inject('curAccount')
const AccSets = inject('AccSets')
const inputClass = ref('Input')
const emit = defineEmits(['onSelect', 'onSave'])
const progress = inject('progress')
const ServerGroupList = inject('ServerGroupList')
const selectOptionsStyle = inject('selectOptionsStyle')

defineExpose({
  saveServerGroup
})
function onSelect() {

}

function saveServerGroup() {
  progress.value = true
  api.post(apiUrl + 'api/set/server.php', {
    params: {
      serverGroupId: groupIdMutable.value,
    }
  })
      .then((response) => {
        if (!!!response?.data?.result) {
          throw new Error();
        }
        AccSets.value.serverGroupId = groupIdMutable.value
        emit('onSave')
      })
      .catch((error) => {
        q.notify(notifyError(error))
      })
      .finally(() => {
        progress.value = false
      })
}
</script>

<style scoped>

</style>
