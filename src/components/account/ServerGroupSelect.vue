<script setup>
import {useQuasar} from "quasar";
import {inject, ref} from "vue";

import {myAccSets} from "src/js/myAuth";

const props = defineProps({
  groupId: Number
})
const groupIdMutable = ref(props.groupId)
const q = useQuasar()
const curAccount = inject('curAccount')
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

async function saveServerGroup() {
  progress.value = true
  const result = await myAccSets.setServerGroup(q, groupIdMutable.value)
  if(result) {
    curAccount.value.settings.serverGroupId = groupIdMutable.value
    emit('onSave')
  }
  progress.value = false
}
</script>

<template>
  <q-select v-model="groupIdMutable"
            :options="ServerGroupList"
            borderless
            :loading="progress"
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

<style scoped>

</style>
