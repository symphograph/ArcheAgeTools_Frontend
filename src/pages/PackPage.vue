<template>
  <div class="WindowArea column">
    <PackMenu></PackMenu>
    <q-linear-progress :animation-speed="200"  color="green" :indeterminate="!!progress"></q-linear-progress>
    <q-scroll-area class="col myScrollArea">
      <PackList></PackList>

    </q-scroll-area>
  </div>
</template>

<script setup>


import {computed, inject, onMounted, provide, ref, watch} from "vue";
import {api} from "boot/axios";
import {useQuasar} from "quasar";
import PackMenu from "components/packs/PackMenu.vue";
import PackList from "components/packs/PackList.vue";

const q = useQuasar()
const apiUrl = String(process.env.API)
const token = inject('token')

const packList = ref([])
provide('packList', packList)

const side = ref(null)
provide('side', side)

const siol = ref(false)
provide('siol', siol)

const percent = ref(130)
provide('percent', percent)

const zoneFromId = ref(0)
provide('zoneFromId', zoneFromId)
const zoneToId = ref(0)
provide('zoneToId', zoneToId)

const selectedTypes = ref([])
provide('selectedTypes', selectedTypes)

const disabled = computed(()=> {
  return !!!side.value || !selectedTypes.value.length
})
provide('disabled', disabled)

const progress = ref(false)
provide('progress', progress)
</script>

<style>
html {
  font-size: 14px;
}

.ptCol1 {
  width: 5em;
}
.ptCol2 {
  width: 12em;
}
.ptCol3 {
  width: 10em;
}
.ptCol4 {
  width: 10em;
}
.ptCol5 {
  width: 10em;
}
.ptCol6 {
  width: 10em;
}
.ptCol7 {
  width: 14em;
}
</style>
