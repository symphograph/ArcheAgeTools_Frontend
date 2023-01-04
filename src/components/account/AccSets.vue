<template>
    <NickInput></NickInput>
    <ServerSelect></ServerSelect>
    <ModeSelect></ModeSelect>
</template>

<script setup>
import {useQuasar} from "quasar";
import {inject} from "vue";
import NickInput from "components/account/NickInput.vue";
import ServerSelect from "components/account/ServerSelect.vue";
import ModeSelect from "components/account/ModeSelect.vue";

const q = useQuasar()
const apiUrl = String(process.env.API)
const token = inject('token')
const curAccount = inject('curAccount')






</script>

<style scoped>

.Params {
  padding: 1em;
}
.ParamRow{
  display: flex;
  justify-content: flex-start;
}


.BtnArea{
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
</style>
