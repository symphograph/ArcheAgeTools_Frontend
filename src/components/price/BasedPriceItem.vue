<template>
  <q-item dense class="PriceCell">
    <q-item-section>
      <q-item-label :lines="1">
        <div class="PriceLabel">{{price.name}}</div>
      </q-item-label>
      <q-tooltip v-if="disable">Сервер не выбран</q-tooltip>
      <q-input
        mask="## ## ##"
        class="PriceInput"
        dense
        filled
        borderless
        :disable="!!disable"
        :label-color="priceColor(price.method)"
        stack-label
        :label="price.accountId === 1 ? 'Не указано' : price.author"
        reverse-fill-mask
        ref="priceRef"
        v-model="nPrice.price"
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
          <DelBtn @onOk="delPrice" :disable="price.accountId !== curAccount.id"></DelBtn>
        </template>
      </q-input>
    </q-item-section>
  </q-item>
</template>

<script setup>
import {useQuasar} from "quasar"
import {inject, ref} from "vue"
import {useRouter} from "vue-router"
import {priceColor} from "src/myFuncts.js"
import {api} from "boot/axios";
import DelBtn from "components/price/DelBtn.vue"
import ItemIcon from "components/ItemIcon.vue"

const q = useQuasar()
const apiUrl = String(process.env.API)
const token = inject('token')
const router = useRouter()
const curAccount = inject('curAccount')

const Props = defineProps({
  price: ref(null)
})

const emit = defineEmits(['delPrice'])

const nPrice = ref(Props.price)
const priceRef = ref(null)
const focused = ref(false)

const disable = inject('disable')

function goTo(id){
  router.push({ path: '/item/' + id })
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
      price: nPrice.value.price,
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
        nPrice.value.accountId = curAccount.value.id
        nPrice.value.author = curAccount.value.AccSets.publicNick
        nPrice.value.method = 'bySolo'
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
  padding: 1em;
}

.PriceLabel {
  color: #6c3f00;
  cursor: pointer;
}

.DefBtn {
  font-size: 9px;
}
</style>
