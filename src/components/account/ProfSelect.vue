<script setup>
import {inject, ref} from "vue";
import ItemIcon from "components/ItemIcon.vue";
import {api} from "boot/axios";
import {useQuasar} from "quasar";
import {notifyError, notifyOK} from "src/js/myFuncts";
import {ProfClass} from "src/js/prof";

const q = useQuasar()

const loading = ref(false)

const Props = defineProps({
  prof: ref(null)
})

const lvl = ref(1)
const ProfLvls = inject('ProfLvls')
const profRef = ref(null)

const inputClass = ref('Input')
const curAccount = inject('curAccount')


const selectOptionsStyle = inject('selectOptionsStyle')

async function save() {
  profRef.value.blur()
  loading.value = true
  const lvl = curAccount.value.settings.Profs.find(el => el.id === Props.prof.id).lvl
  await ProfClass.setLvl(q, Props.prof.id, lvl)
  loading.value = false
}
</script>

<template>
  <q-select
    :label="prof.name"
    :class="inputClass"
    :options="ProfLvls"
    :loading="loading"
    option-value="lvl"
    v-model="curAccount.settings.Profs.find(el => el.id === prof.id).lvl"
    @update:model-value="save"
    map-options
    emit-value
    borderless
    ref="profRef"
    :popup-content-style="selectOptionsStyle"
  >
    <template v-slot:prepend>
      <ItemIcon :loc-icon="'/img/profs/'+ prof.id +'.png'"
                :grade="curAccount.settings.Profs.find(el => el.id === prof.id).lvl"
      >
      </ItemIcon>
    </template>
    <template v-slot:option="scope">
      <q-item v-bind="scope.itemProps">
        <q-item-section avatar>
          <ItemIcon :loc-icon="'/img/profs/'+ prof.id +'.png'"
                    :grade="scope.opt.lvl"
          >
          </ItemIcon>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{scope.opt.label}}</q-item-label>
        </q-item-section>
      </q-item>
    </template>
  </q-select>
</template>

<style scoped>

</style>
