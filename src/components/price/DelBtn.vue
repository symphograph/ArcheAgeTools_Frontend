<template>
  <q-btn icon="delete" @click="confirm" flat round size="xs"></q-btn>
</template>

<script setup>
import {useQuasar} from "quasar";
import DialogWindow from "components/DialogWindow.vue";
const $q = useQuasar()

const emit = defineEmits(['onOk','Cancel','Dismiss'])


function confirm () {
  $q.dialog({
    component: DialogWindow,
    componentProps: {
      text: 'Удалить запись о цене этого предмета?',
      // ...more..props...
    },
    title: 'Удалить',
    message: 'Удалить запись о цене этого предмета?',
    cancel: true,
    persistent: true
  }).onOk(() => {
    // console.log('>>>> OK')
  }).onOk(() => {
    emit('onOk')
    // console.log('>>>> second OK catcher')
  }).onCancel(() => {
    emit('Cancel')
    // console.log('>>>> Cancel')
  }).onDismiss(() => {
    emit('Dismiss')
    // console.log('I am triggered on both OK and Cancel')
  })
}
</script>

<style scoped>

</style>
