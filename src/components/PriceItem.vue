<template>
  <q-item dense class="PriceCell">
    <q-item-section avatar>
      <q-item-label caption>{{fDate(price.datetime)}}</q-item-label>
      <ItemIcon :icon="price.icon" :grade="price.grade" :tool-text="price.name"></ItemIcon>
    </q-item-section>
    <q-item-section>
      <q-item-label :lines="2">
        <div class="PriceLabel">{{price.name}}</div>
      </q-item-label>
      <q-input
        mask="## ## ##"
        class="PriceInput"
        dense
        filled
        borderless
        reverse-fill-mask
        ref="priceRef"
        v-model="nPrice"
        @focus="focused = true"
        @blur="focused = false"
      >
        <template v-slot:append>
          <q-btn label="Ok"
                 v-if="focused"
                 class="DefBtn"
                 dense
                 no-caps
                 flat
                 @click="savePrice" ></q-btn>

        </template>
        <template v-slot:after>
          <q-tooltip>Удалить</q-tooltip>
          <q-btn icon="delete" @click="delPrice" flat round size="xs"></q-btn>
        </template>
      </q-input>
    </q-item-section>
      <q-item-section side>

      </q-item-section>
  </q-item>
</template>

<script setup>

import ItemIcon from "components/ItemIcon.vue";
import {inject, ref} from "vue";
import {fDate} from "src/myFuncts.js"
import {api} from "boot/axios";
import {useQuasar} from "quasar";

const q = useQuasar()
const apiUrl = String(process.env.API)
const token = inject('token')

const Props = defineProps({
  price: ref(null)
})
const nPrice = ref(Props.price.price)
const priceRef = ref(null)
const focused = ref(false)

function delPrice(){
  console.log('sss')
}

function savePrice() {

  priceRef.value.blur()
  api.post(apiUrl + 'api/set/price.php', {
    params: {
      token: token.value,
      price: nPrice.value,
      itemId: Props.price.itemId
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
.PriceInput{
  padding: 0;
  min-width: 12em;
}
.PriceCell {
  width: 20em;
  font-size: 12px;
}

.PriceLabel {
  color: #6c3f00;
  cursor: pointer;
}

.DefBtn {
  font-size: 9px;
}
</style>
