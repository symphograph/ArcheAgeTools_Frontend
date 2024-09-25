<template>
  <q-select v-model="curAccount.settings.mode"
            :options="PriceModes"
            borderless
            option-value="mode"
            option-label="name"
            options-html
            :popup-content-style="{ backgroundColor: 'rgb(181 238 8 / 93%)', color: '#4B3A23' }"
            @focus="inputClass = 'Input InputActive'"
            @blur="inputClass = 'Input'"
            @update:model-value="save()"
            :class="inputClass"
            label="Режим видимости цен"
            map-options
            emit-value
  >
    <template v-slot:option="scope">
      <q-item v-bind="scope.itemProps">
        <q-item-section>
          <q-item-label>{{ scope.opt.name }}</q-item-label>
          <q-item-label caption><div v-html="scope.opt.description"></div></q-item-label>

        </q-item-section>
      </q-item>
    </template>
  </q-select>
</template>

<script setup>
import {useQuasar} from "quasar";
import {inject, ref} from "vue";
import {api} from "boot/axios";
import {notifyError, notifyOK} from "src/js/myFuncts";

const q = useQuasar()
const apiUrl = String(process.env.API)
const curAccount = inject('curAccount')
const inputClass = ref('Input')
const emit = defineEmits(['saved'])
const progress = inject('progress')

const PriceModes = ref([
  {
    mode: 1,
    name: 'С миру по нитке',
    description:
      'Предпочитает Ваши цены или более новые из доверенных.<br>' +
      'Если их нет, ищет у других.<br>' +
      'Спрашивает только, если никто и никогда не указывал цену.'
  },
  {
    mode: 2,
    name: 'Доверие',
    description:
      'Не видит ничьих цен, кроме Ваших и тех, кому Вы доверяете.<br>' +
      'Предпочитает более новые.<br>' +
      'ОР, РР, Честь и прочие субъективные предпочитает Ваши независимо от их новизны.'
  },
  {
    mode: 3,
    name: 'Хардкор',
    description:
      'Видит только Ваши цены.<br>' +
      'В любой непонятной ситуации будет спрашивать.'
  }
])

function save() {
  progress.value = true
  api.post(apiUrl + 'api/set/mode.php', {

    params: {
      mode: curAccount.value.settings.mode,
    }
  })
    .then((response) => {
      if(!!!response?.data?.result){
        throw new Error();
      }
      q.notify(notifyOK(response.data.result))
      emit('saved')
    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
    .finally(() => {
    progress.value = false
  })
}
</script>

<style scoped>

</style>
