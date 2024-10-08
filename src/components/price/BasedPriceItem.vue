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
import {inject, onMounted, ref} from "vue"
import {useRouter} from "vue-router"
import {notifyError, notifyOK} from "src/js/myFuncts"
import {api} from "boot/axios";
import DelBtn from "components/price/DelBtn.vue"
import ItemIcon from "components/ItemIcon.vue"
import {priceColor} from "src/myJS/price";
import {PriceClass} from "src/js/price";

const q = useQuasar()
const apiUrl = String(process.env.API)
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
    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
}

function savePrice() {
  priceRef.value.blur()
  PriceClass.set(q,Props.price.itemId, nPrice.value.price)
}

onMounted(() => {

})
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
