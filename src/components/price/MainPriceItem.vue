<script setup lang="ts">
import {copy, fDate} from "src/js/myFuncts";
import {useQuasar} from "quasar";
import DelBtn from "components/price/DelBtn.vue";
import ItemIcon from "components/ItemIcon.vue";
import {ref} from "vue";
import {useRouter} from "vue-router";
import {PriceClass} from "src/js/price";
import {priceColor, priceImager} from "src/myJS/price";

const q = useQuasar()
const router = useRouter()
const priceRef = ref()

const props = withDefaults(defineProps<{
  itemName: string
  itemId: number
  icon: string
  grade: number
  val: number
  updatedAt: string
  author: string
  method: string
}>(), {
  val: 0
})
const valMutable = ref(props.val)

const focused = ref(false)

function getLabel () {
  return priceImager(valMutable)
}

function goTo(id: number) {
  router.push({path: `/item/${id}`})
}

function savePrice() {
  priceRef.value.blur()
  PriceClass.set(q,props.itemId,valMutable.value)
}

function delPrice() {
  priceRef.value.blur()
  PriceClass.del(q, props.itemId)
}
</script>

<template>
  <q-item dense class="PriceCell">
    <q-item-section>
      <q-item-label :lines="1">
        <div v-if="focused" v-html="priceImager(valMutable)"></div>
        <div class="PriceLabel" v-else @click="copy(itemName, q)">{{ itemName }}</div>
      </q-item-label>
      <q-input
        mask="## ## ##"
        class="PriceInput"
        :label="`${fDate(updatedAt)} - ${author}`"
        :label-color="PriceClass.color(method)"
        dense
        filled
        borderless
        reverse-fill-mask
        ref="priceRef"
        v-model="valMutable"
        @focus="focused = true"
        @blur="focused = false"
      >
        <template v-slot:before>
          <q-btn class="no-padding" dense flat :to="`/item/${itemId}`" @click="goTo(itemId)">
            <ItemIcon :icon="icon" :grade="grade" :tool-text="itemName"></ItemIcon>
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
