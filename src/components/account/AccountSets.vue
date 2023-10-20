<template>
  <NickInput></NickInput>
  <ServerGroupSelect :groupId="curAccount.settings.serverGroupId"
                     @onSelect="onSelectServerGroup()"
                     @onSave="emit('saved')"
                     ref="refServerGroupSelect"
  ></ServerGroupSelect>
  <ModeSelect @saved="emit('saved')"></ModeSelect>
</template>

<script setup>
import {useQuasar} from "quasar";
import {inject, nextTick, ref} from "vue";
import NickInput from "components/account/NickInput.vue";
import ServerGroupSelect from "components/account/ServerGroupSelect.vue";
import ModeSelect from "components/account/ModeSelect.vue";

const q = useQuasar()
const apiUrl = String(process.env.API)
const progress = inject('progress')
const curAccount = inject('curAccount')


const emit = defineEmits(['saved'])
const refServerGroupSelect = ref()

function onSelectServerGroup() {
  refServerGroupSelect.value.saveServerGroup()
}


</script>

<style scoped>

.Params {
  padding: 1em;
}

.ParamRow {
  display: flex;
  justify-content: flex-start;
}


.BtnArea {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
</style>
