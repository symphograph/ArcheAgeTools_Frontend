<template>
  <q-item dense class="PriceCell">
    <q-item-section avatar>
      <q-item-label caption :lines="1">
        {{fDate(price.updatedAt)}}
      </q-item-label>
      <q-btn class="no-padding" dense flat :to="'/item/' + price.itemId" @click="goTo(price.itemId)">
        <ItemIcon :icon="price.icon" :grade="price.grade" :tool-text="price.name"></ItemIcon>
      </q-btn>
    </q-item-section>
    <q-item-section top>
      <q-item-label>
        <div class="PriceLabel">{{ price.name }}</div>
      </q-item-label>
      <q-item-label :lines="1">
        <PriceImagerComponent :price="price.price" :currency-id="500"></PriceImagerComponent>
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>

import ItemIcon from "components/ItemIcon.vue";
import {inject, ref} from "vue";
import {fDate, notifyError, notifyOK} from "src/js/myFuncts"
import {api} from "boot/axios";
import {useQuasar} from "quasar";
import DelBtn from "components/price/DelBtn.vue";
import {useRouter} from "vue-router";
import PriceImagerComponent from "components/price/PriceImagerComponent.vue";

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
