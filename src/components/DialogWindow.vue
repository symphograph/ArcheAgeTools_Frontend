<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card class="q-dialog-plugin DialogCard">
      <q-card-section class="DialogText"><div v-html="text"></div></q-card-section>
      <!--
        ...content
        ... use q-card-section for it?
      -->

      <!-- buttons example -->
      <q-card-actions align="right">
        <q-btn :label="cancelBtnText"
               class="DefBtn"
               no-caps
               @click="onDialogCancel"
        ></q-btn>
        <q-btn :label="okBtnText"
               class="DefBtn"
               no-caps
               @click="onOKClick"></q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { useDialogPluginComponent } from 'quasar'
import {ref} from "vue";

const props = defineProps({
  text: ref(''),
  okBtnText: ref('OK'),
  cancelBtnText: ref('Отмена')
  // ...your custom props
})

defineEmits([
  // REQUIRED; need to specify some events that your
  // component will emit through useDialogPluginComponent()
  ...useDialogPluginComponent.emits
])

const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } = useDialogPluginComponent()
// dialogRef      - Vue ref to be applied to QDialog
// onDialogHide   - Function to be used as handler for @hide on QDialog
// onDialogOK     - Function to call to settle dialog with "ok" outcome
//                    example: onDialogOK() - no payload
//                    example: onDialogOK({ /*...*/ }) - with payload
// onDialogCancel - Function to call to settle dialog with "cancel" outcome

// this is part of our example (so not required)
function onOKClick () {
  // on OK, it is REQUIRED to
  // call onDialogOK (with optional payload)
  onDialogOK()
  // or with payload: onDialogOK({ ... })
  // ...and it will also hide the dialog automatically
}
</script>

<style scoped>
.DialogCard {
  background-image: url(/img/win-head.png), linear-gradient(180deg, rgba(238, 232, 218, 0.95) 0%, rgba(215, 201, 170, 0.87) 99.48%);
  background-repeat: no-repeat;
  background-size: cover;
  border: 1px solid #6C3F00;
}
.DialogText {
  margin: 2em 0 0 0;
  text-align: center;
}
</style>
