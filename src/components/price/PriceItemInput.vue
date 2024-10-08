<script setup>

import ItemIcon from "components/ItemIcon.vue";
import {inject, ref} from "vue";
import {copy, fDate, notifyError, notifyOK} from "src/js/myFuncts"
import {api} from "boot/axios";
import {copyToClipboard, useQuasar} from "quasar";
import DelBtn from "components/price/DelBtn.vue";
import {useRouter} from "vue-router";
import {ItemClass} from "src/js/item";
import {myAxios} from "src/js/myAxios";
import {PriceClass} from "src/js/price";

const q = useQuasar()
const apiUrl = String(process.env.API)
const router = useRouter()

const Props = defineProps({
  price: ref(null)
})

const emit = defineEmits(['delPrice'])

const nPrice = ref(Props.price.price)
const priceRef = ref(null)
const focused = ref(false)
const buyable = ref(Props.price.buyOnly)

function goTo(id) {
  router.push({path: '/item/' + id})
}

function setBuyable() {
  ItemClass.setBuyOnly(q,Props.price.itemId,buyable.value)
}

function delPrice() {
  api.post(apiUrl + 'api/price.php', {
    params: {
      method: 'del',
      itemId: Props.price.itemId
    }
  })
    .then((response) => {
      if(!!!response?.data?.result){
        throw new Error();
      }
      q.notify(notifyOK(response?.data?.result ?? 'Ой!'))
      emit('delPrice')
    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
}

function savePrice() {
  priceRef.value.blur()
  PriceClass.set(q,Props.price.itemId,nPrice.value)
}


</script>

<template>
  <q-item dense class="PriceCell">
    <q-item-section>
      <q-item-label :lines="1">
        <div class="PriceLabel" @click="copy(price.name, q)">{{ price.name }}</div>
      </q-item-label>
      <q-input
        mask="## ## ##"
        class="PriceInput"
        :label="fDate(price.updatedAt)"
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
                 @click="savePrice"></q-btn>
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
