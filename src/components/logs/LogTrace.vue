<template>
  <q-card dark>
    <q-card-section class="traceCard">
      <q-list dark dense separator class="traceList">
        <template v-for="(sec, idx) in trace" :key="idx">
          <q-item dense dark>
            <q-item-section>
              <q-item-label class="path">
                {{ sec.file + ':' + (!!sec?.line ?  sec?.line : '')}}
              </q-item-label>
              <q-item-label>
                {{ 'function: ' + sec.function }}
              </q-item-label>
            </q-item-section>
          </q-item>
        </template>
      </q-list>
    </q-card-section>
  </q-card>

</template>

<script setup>
import {ref} from "vue";

const props = defineProps({
  trace: ref([])
})
</script>

<style scoped>
.traceCard {
  border: 1px solid orange;
  font-size: 16px;
}
.fnName{
  color: dimgray;
}
</style>
