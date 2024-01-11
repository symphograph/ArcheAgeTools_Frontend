<template>
  <q-item dense class="PriceCell">
    <q-item-section>
      <q-item-label :lines="1">
        <div class="PriceLabel" @click="copy(CurItem.Item.name)">{{ CurItem.Item.name }}</div>
      </q-item-label>
      <q-input
        mask="## ## ##"
        class="PriceInput"
        :label="fDate(CurItem.Item.Price.updatedAt) + ' - ' + CurItem.Item.Price.author"
        :label-color="priceColor(CurItem.Item.Price.method)"
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
          <q-btn
            class="no-padding"
            dense flat
            :to="'/item/' + CurItem.Item.Price.itemId" @click="goTo(CurItem.Item.Price.itemId)"
          >
            <ItemIcon :icon="CurItem.Item.icon" :grade="CurItem.Item.grade" :tool-text="CurItem.Item.name"></ItemIcon>
          </q-btn>
        </template>
        <template v-slot:append>
          <q-btn label="Ok"
                 v-if="focused"
                 class="DefBtn"
                 dense
                 no-caps
                 flat
                 @click="savePrice"></q-btn>
        </template>
        <template v-slot:after>
          <q-tooltip>Удалить</q-tooltip>
          <DelBtn @onOk="delPrice" :disable="CurItem.Item.Price.accountId !== curAccount.id"></DelBtn>
        </template>
      </q-input>
      <q-item-label style="font-size: 14px; padding: 3px 0">
        1<img class="imgValut" :src="'/img/valuta/' + CurItem.Item.currencyId + '.png'" alt=""> =
        <span v-html="priceImager(CurItem.currencyPrice)"></span>
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>

import ItemIcon from "components/ItemIcon.vue";
import {inject, ref} from "vue";
import {fDate, notifyError, notifyOK} from "src/myFuncts.js"
import {priceColor, priceImager} from "src/myJS/price";
import {api} from "boot/axios";
import {copyToClipboard, useQuasar} from "quasar";
import DelBtn from "components/price/DelBtn.vue";
import {useRouter} from "vue-router";

const q = useQuasar()
const apiUrl = String(process.env.API)
const router = useRouter()

const Props = defineProps({
  CurItem: ref(null)
})

const emit = defineEmits(['delPrice', 'updated'])

const nPrice = ref(Props.CurItem.Item.Price.price)
const priceRef = ref(null)
const focused = ref(false)
const buyable = ref(Props.CurItem.Item.Price.buyOnly)
const curAccount = inject('curAccount')

function goTo(id) {
  router.push({path: '/item/' + id})
}

function delPrice() {
  api.post(apiUrl + 'api/price.php', {
    params: {
      method: 'del',
      itemId: Props.CurItem.Item.id
    }
  })
    .then((response) => {
      if(!!!response?.data?.result){
        throw new Error();
      }
      q.notify(notifyOK(response?.data?.result ?? 'Ой!'))
    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
}

function savePrice() {

  priceRef.value.blur()
  api.post(apiUrl + 'api/price.php', {
    params: {
      method: 'set',
      price: nPrice.value,
      itemId: Props.CurItem.Item.id
    }
  })
    .then((response) => {
      if(!!!response?.data?.result){
        throw new Error();
      }
      q.notify(notifyOK(response?.data?.result ?? 'Ой!'))
      emit('updated')
    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
}

function copy (val) {
  copyToClipboard(val)
    .then(() => {
      q.notify({
        color: 'positive',
        position: 'center',
        message: 'Скопировано',
        icon: 'content_copy',
        timeout: 1
      })
    })
    .catch(() => {
      // fail
    })
}

function test(){
  return '<img class="imgValut" src="/img/valuta/' + Props.CurItem.Item.currencyId + '.png" ' + ' alt="v"/>'
}
</script>

<style scoped>
.PriceInput {
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
