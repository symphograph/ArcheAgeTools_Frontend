<template>
<q-select
  :label="prof.name"
  :class="inputClass"
  :options="ProfLvls"
  option-value="lvl"
  v-model="curAccount.AccSets.Profs.find(el => el.id === prof.id).lvl"
  @update:model-value="save"
  map-options
  emit-value
  borderless
  ref="profRef"
  :popup-content-style="{ backgroundColor: 'rgb(181 238 8 / 83%)', color: '#4B3A23' }"
>
  <template v-slot:prepend><ItemIcon :loc-icon="'/img/profs/'+ prof.id +'.png'" :grade="curAccount.AccSets.Profs.find(el => el.id === prof.id).lvl"></ItemIcon></template>
</q-select>
</template>

<script setup>
import {inject, ref} from "vue";
import ItemIcon from "components/ItemIcon.vue";
import {api} from "boot/axios";
import {useQuasar} from "quasar";

const q = useQuasar()
const apiUrl = String(process.env.API)
const token = inject('token')

const Props = defineProps({
  prof: ref(null)
})

const lvl = ref(1)
const ProfLvls = inject('ProfLvls')
const profRef = ref(null)

const inputClass = ref('Input')
const curAccount = inject('curAccount')

function save(){
  console.log(curAccount.value.AccSets.Profs)
  profRef.value.blur()
  api.post(apiUrl + 'api/set/prof.php', {
    params: {
      token: token.value,
      profId: Props.prof.id,
      lvl: curAccount.value.AccSets.Profs.find(el => el.id === Props.prof.id).lvl
    }
  })
    .then((response) => {

      if (response.data.result) {
        q.notify({
          color: 'positive',
          position: 'center',
          message: response.data.result,
          timeout: 300,
          closeBtn: 'Закрыть'
        })
        return true
      }

      let msg = 'Ой! Не получается.:('
      if (response.data.error) {
        msg = response.data.error
      }

      q.notify({
        color: 'negative',
        position: 'center',
        message: msg,
        icon: 'report_problem',
        timeout: 300,
        closeBtn: 'Закрыть'
      })
      return false

    })
    .catch((error) => {
      q.notify({
        color: 'negative',
        position: 'center',
        message: 'Сервер не отвечает',
        timeout: 300,
        icon: 'report_problem'
      })
    })
}
</script>

<style scoped>

</style>
