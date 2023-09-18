<template>
  <q-select v-model="AccSets.serverId"
            :options="Servers"
            borderless
            option-value="id"
            option-label="name"
            :popup-content-style="selectOptionsStyle"
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
          <q-item-label caption>Группа{{ scope.opt.groupId }}</q-item-label>
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
const curAccount = inject('curAccount')
const AccSets = inject('AccSets')
const Servers = inject('Servers')
const inputClass = ref('Input')
const emit = defineEmits(['saved'])
const progress = inject('progress')

const selectOptionsStyle = inject('selectOptionsStyle')


</script>

<style scoped>

</style>
