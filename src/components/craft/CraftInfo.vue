<template>
  <div class="CraftInfo" v-if="Craft">
    <div class="InfoCol">
      <q-item dense v-if="isBest">
        <q-item-section>
          {{ isUBest ? 'Выбран вами' : 'Выбран калькулятором' }}
        </q-item-section>
      </q-item>
      <q-item dense>
        <q-item-section>
          Craft Id:
        </q-item-section>
        <q-item-section side>
          <q-btn :label="Craft.id"
                 icon-right="content_copy"
                 class="no-padding"
                 dense flat
                 @click="copy(Craft.id)"
          >
          </q-btn>
        </q-item-section>
      </q-item>
      <q-item dense class="listItem">
        <q-item-section>
          <q-item-label>
            Коэф SPM:
          </q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-item-label>
            {{ round(Craft.countData.spmu) }}
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-item dense class="listItem">
        <q-item-section>
          <q-item-label>
            Себестоимость:
          </q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-item-label>
            <span v-html="priceImager(Craft.countData.craftCost)"></span>
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-item dense class="listItem" v-if="profit !== false">
        <q-item-section>
          <q-item-label>
            Прибыль:
          </q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-item-label>
            <span v-html="priceImager(profit)"></span>
          </q-item-label>
        </q-item-section>
      </q-item>
    </div>
    <div class="InfoCol">
      <q-list dense>
        <q-item dense>
          <q-item-section avatar>
            <ItemIcon :grade="Craft.Prof.lvl"
                      :locIcon="'/img/profs/' + Craft.Prof.id + '.png'"
                      :tool-text="'Профессия'"
                      :size="'30px'"></ItemIcon>
          </q-item-section>
          <q-item-section>
            {{ Craft.Prof.name }}
          </q-item-section>
          <q-item-section side>
            {{ profNeed(Craft.profNeed) }}
          </q-item-section>
        </q-item>
        <q-item dense>
          <q-item-section avatar>
            <ItemIcon :grade="1"
                      :locIcon="'/img/interface/doodad.png'"
                      :tool-text="'Приспособление'"
                      :size="'30px'"></ItemIcon>
          </q-item-section>
          <q-item-section>
            {{ Craft.doodName }}
          </q-item-section>
          <q-item-section side>
          </q-item-section>
        </q-item>
        <q-item tag="label"
                v-if="isBest && Item.isMat && !Item.personal"
                dense
                v-ripple
        >
          <q-tooltip class="bg-tooltip">
            Использовать в расчетах цену покупки вместо стоимости крафта
          </q-tooltip>
          <q-item-section avatar>
            <q-avatar size="2.5em">
              <img src="/img/interface/perdaru.png" alt="">
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>Покупаемый</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-checkbox v-model="Item.isBuyOnly" @update:modelValue="setBuyable()"></q-checkbox>
          </q-item-section>
        </q-item>
        <q-item tag="label"
                v-if="!Item.personal"
                dense
                v-ripple
        >
          <q-tooltip class="bg-tooltip">
            Выбирать этот рецепт при расчетах
          </q-tooltip>
          <q-item-section avatar>
              <ItemIcon :grade="12"
                        :locIcon="'/img/interface/perdaru.png'"
                        :tool-text="'Предпочитаемый'"
                        :size="'30px'"
              ></ItemIcon>
          </q-item-section>
          <q-item-section>
            <q-item-label>Предпочитаемый</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-checkbox v-model="isUBest" @update:modelValue="changeUBest()"></q-checkbox>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
    <div class="InfoCol">
      <q-list dense>
        <q-item dense class="listItem">
          <q-item-section>
            <q-item-label>
              ОР на рецепт:
            </q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-item-label>
              {{ round(Craft.countData.LaborData.forThisCraftBonused) }}
              <img class="smallIcon" src="/img/valuta/2.png" alt=""/>
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item dense class="listItem">
          <q-item-section class="no-padding">
            <q-item-label>
              ОР на 1шт:
            </q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-item-label>
              {{ round(Craft.countData.LaborData.forOneUnitOfThisCraft) }}
              <img class="smallIcon" src="/img/valuta/2.png" alt=""/>
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item dense class="listItem">
          <q-item-section>
            <q-item-label>
              ОР на цепочку:
            </q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-item-label>
              {{ round(Craft.countData.laborTotal) }}
              <img class="smallIcon" src="/img/valuta/2.png" alt=""/>
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script setup>

import {computed, inject, ref} from "vue";
import ItemIcon from "components/ItemIcon.vue"
import {notifyError, notifyOK, priceImager} from "src/myFuncts.js"
import {copyToClipboard, useQuasar} from "quasar";
import {api} from "boot/axios";

const q = useQuasar()
const apiUrl = String(process.env.API)

const props = defineProps({
  Craft: ref(null)
})

const isUBest = ref(props.Craft.countData.isUBest);
const isBest = ref(props.Craft.countData.isBest);
const isBuyOnly = ref(props.Craft.countData.isBuyOnly);
const emit = defineEmits(['onSetUBest'])
const Item = inject('Item')
const profit = computed(() => {
  if (!Item.value.Pricing.isGoldable) {
    return 0
  }
  if (!Item.value.Pricing.Price.price) {
    return false
  }
  let price = Item.value.Pricing.Price.price + ''
  price = price.replace(/[^0-9]/g, "") * 0.9
  price = Math.round(price)
  return price - props.Craft.countData.craftCost

})

function copy(val) {
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

function profNeed(need) {
  if (!need) {
    return ''
  }
  if (need < 1000) {
    return need
  }
  return Math.round(need / 1000) + 'k'
}

function round(val) {
  return Math.round(val * 100) / 100
}

function setBuyable() {
  api.post(apiUrl + 'api/set/price/buyable.php', {
    params: {
      buyable: Item.value.isBuyOnly,
      itemId: Item.value.id
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

function changeUBest(){
  isUBest.value
    ? setAsUBest()
    : delUBest()
}

function setAsUBest() {
  api.post(apiUrl + 'api/set/craft/ubest.php', {
    params: {
      craftId: props.Craft.id
    }
  })
    .then((response) => {
      if(!!!response?.data?.result){
        throw new Error();
      }
      q.notify(notifyOK(response?.data?.result ?? 'Ой!'))
      emit('onSetUBest')
    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
}

function delUBest() {
  api.post(apiUrl + 'api/set/craft/delubest.php', {
    params: {
      craftId: props.Craft.id
    }
  })
    .then((response) => {
      if(!!!response?.data?.result){
        throw new Error();
      }
      q.notify(notifyOK(response?.data?.result ?? 'Ой!'))
      emit('onSetUBest')
    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
}
</script>

<style scoped>
.InfoCol {
  width: 100%;
  max-width: 270px;
}

.listItem {
  min-height: 20px;
}
</style>
