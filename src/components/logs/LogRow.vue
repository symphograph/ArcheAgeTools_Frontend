<template>
  <q-item >
    <q-item-section avatar top>
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
      <q-item-label class="path">
        {{ row.script }}
      </q-item-label>
      <q-item-label class="path">
        {{ !!row?.file ? row.file + '(' + row.line +')' : ''}}
      </q-item-label>
      <q-btn-dropdown label="trace" v-if="row?.trace?.length">
        <LogTrace :trace="row.trace"></LogTrace>
      </q-btn-dropdown>

    </q-item-section>
    <q-item-section top>
      <q-item-label caption>{{ row?.agent?.platform ?? '' }}</q-item-label>
      <q-item-label caption>{{ row?.agent?.browser ?? '' }}</q-item-label>
      <q-item-label caption>{{ row?.ip ?? '' }}</q-item-label>
    </q-item-section>
    <q-item-section>
    </q-item-section>
  </q-item>
</template>

<script setup>
import {ref} from "vue";
import LogTrace from "components/logs/LogTrace.vue";

const props = defineProps({
  row: ref({})
})
const showTrace = ref(false)
</script>

<style>
.msg {
  color: orange;
}
.type {
  color: mediumpurple;
}

.path {
  color: cornflowerblue;
}

.trace {
  color: #21BA45;
  cursor: pointer;
}
</style>
