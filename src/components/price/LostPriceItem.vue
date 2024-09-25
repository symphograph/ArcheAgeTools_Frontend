<template>
  <q-item dense class="PriceCell">
    <q-item-section>
      <q-item-label :lines="1" @click="copy(price.name, q)">
        <div class="PriceLabel">{{price.name}}</div>
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
                 @click="savePrice" ></q-btn>
        </template>
      </q-input>
    </q-item-section>
  </q-item>
</template>

<script setup>
import ItemIcon from "components/ItemIcon.vue";
import {useQuasar} from "quasar";
import {inject, ref} from "vue";
import {useRouter} from "vue-router";
import {api} from "boot/axios";
import {copy, fDate, notifyError, notifyOK} from "src/js/myFuncts"

const q = useQuasar()
const apiUrl = String(process.env.API)
const router = useRouter()

const Props = defineProps({
  price: ref(null)
})

const nPrice = ref(Props.price.price)
const priceRef = ref(null)
const focused = ref(false)

function goTo(id){
  router.push({ path: '/item/' + id })
}

function savePrice() {

  priceRef.value.blur()
  api.post(apiUrl + 'api/price.php', {
    params: {
      method: 'set',
      price: nPrice.value,
      itemId: Props.price.itemId
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
