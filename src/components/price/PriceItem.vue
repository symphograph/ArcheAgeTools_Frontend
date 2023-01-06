<template>
    <q-item dense class="PriceCell">
      <q-item-section>
        <q-item-label :lines="1">
          <div class="PriceLabel">{{price.name}}</div>
        </q-item-label>
        <q-input
          mask="## ## ##"
          class="PriceInput"
          :label="fDate(price.datetime)"
          dense
          filled
          borderless
          reverse-fill-mask
          ref="priceRef"
          v-model="nPrice"
          @focus="focused = true"
          @blur="focused = false"
        >
          <template v-slot:before>
           <q-btn class="no-padding" dense flat :to="'/item/' + price.itemId" @click="goTo(price.itemId)">
             <ItemIcon :icon="price.icon" :grade="price.grade" :tool-text="price.name"></ItemIcon>
           </q-btn>
          </template>
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
            <DelBtn @onOk="delPrice"></DelBtn>
          </template>
        </q-input>
        <q-checkbox v-model="buyable"
                    dense
                    v-if="price.craftable"
                    @update:model-value="setBuyable"
        >
          <q-tooltip>Предпочитать цену покупки вместо крафта</q-tooltip>
          Покупаемый
        </q-checkbox>
        <q-item-label v-else>некрафтабельно</q-item-label>
      </q-item-section>
    </q-item>
</template>

<script setup>

import ItemIcon from "components/ItemIcon.vue";
import {inject, ref} from "vue";
import {fDate} from "src/myFuncts.js"
import {api} from "boot/axios";
import {useQuasar} from "quasar";
import DelBtn from "components/price/DelBtn.vue";
import {useRouter} from "vue-router";

const q = useQuasar()
const apiUrl = String(process.env.API)
const token = inject('token')
const router = useRouter()

const Props = defineProps({
  price: ref(null)
})

const emit = defineEmits(['delPrice'])

const nPrice = ref(Props.price.price)
const priceRef = ref(null)
const focused = ref(false)
const buyable = ref(Props.price.buyOnly)

function goTo(id){
  router.push({ path: '/item/' + id })
}

function setBuyable(){
  api.post(apiUrl + 'api/set/price/buyable.php', {
    params: {
      token: token.value,
      buyable: buyable.value,
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

function delPrice(){
  api.post(apiUrl + 'api/set/price/del.php', {
    params: {
      token: token.value,
      itemId: Props.price.itemId
    }
  })
    .then((response) => {

      if (response.data.result) {
        q.notify({
          color: 'positive',
          position: 'center',
          message: response.data.result,
          timeout: 100,
          closeBtn: 'Закрыть'
        })
        emit('delPrice')
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

function savePrice() {

  priceRef.value.blur()
  api.post(apiUrl + 'api/set/price/price.php', {
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
  padding: 0.5em 0;
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
