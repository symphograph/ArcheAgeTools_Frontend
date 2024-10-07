<script setup>

import ItemIcon from "components/ItemIcon.vue";
import {inject, ref} from "vue";
import {fDate, notifyError, notifyOK} from "src/js/myFuncts"
import {priceColor, priceImager} from "src/myJS/price";
import {api} from "boot/axios";
import {copyToClipboard, useQuasar} from "quasar";
import DelBtn from "components/price/DelBtn.vue";
import {useRouter} from "vue-router";
import {PriceClass} from "src/js/price";

const q = useQuasar()
const router = useRouter()

const Props = defineProps({
  CurItem: ref(null),
  itemId: Number,
  authorNick: String,
  updatedAt: String,
  itemName: String
})

const emit = defineEmits(['delPrice', 'updated'])

const nPrice = ref(Props.CurItem.Item.Price.price)
const priceRef = ref(null)
const focused = ref(false)
const curAccount = inject('curAccount')

function goTo(id) {
  router.push({path: '/item/' + id})
}

async function delPrice() {
  priceRef.value.blur()

  if (await PriceClass.del(q, Props.CurItem.Item.id)) {
    emit('updated')
  }
}

async function savePrice() {
  priceRef.value.blur()

  if (await PriceClass.set(q, Props.CurItem.Item.id, nPrice.value)) {
    emit('updated')
  }
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

</script>

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
