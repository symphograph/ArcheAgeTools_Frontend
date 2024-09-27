<script setup lang="ts">

import {computed, inject, Ref, ref} from "vue";
import ItemIcon from "components/ItemIcon.vue"
import {copy} from "src/js/myFuncts"
import {useQuasar} from "quasar";
import {priceImager} from "src/myJS/price";
import {ItemClass} from "src/js/item";
import {Craft} from "src/js/craft";

const q = useQuasar()

const props = defineProps<{
  craft: Craft
}>()

const loading = ref(false)

const isUBest = ref(props.craft.countData.isUBest);
const isBest = ref(props.craft.countData.isBest);

const emit = defineEmits(['onSetUBest'])
const curItem = inject('Item') as Ref<ItemClass>

const profit = computed(() => {
  if (!curItem.value.Pricing.isGoldable) {
    return 0
  }
  if (!curItem.value.Pricing.Price.price) {
    return false
  }

  let price = curItem.value.Pricing.Price.price
  price = String(price)
  price = price.replace(/[^0-9]/g, "") * 0.9
  price = Math.round(price)
  return price - props.craft.countData.craftCost

})

function profNeed(need: number) {
  if (!need) {
    return ''
  }
  if (need < 1000) {
    return need
  }
  return Math.round(need / 1000) + 'k'
}

function round(val: number) {
  return Math.round(val * 100) / 100
}

function setBuyable() {
 ItemClass.setBuyOnly(q,curItem.value.id, curItem.value.isBuyOnly)
}

function changeUBest(){
  isUBest.value
    ? setAsUBest()
    : delUBest()
}

async function setAsUBest() {
  loading.value = true
  if (await Craft.setAsUBest(q, props.craft.id)) {
    emit('onSetUBest')
  }
  loading.value = false
}

async function delUBest() {
  loading.value = true
  if (await Craft.resetUBest(q, props.craft.id)) {
    emit('onSetUBest')
  }
  loading.value = false
}
</script>

<template>
  <div class="CraftInfo" v-if="craft">
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
          <q-btn :label="craft.id"
                 icon-right="content_copy"
                 class="no-padding"
                 dense flat
                 @click="copy(craft.id, q)"
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
            {{ round(craft.countData.spmu) }}
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
            <span v-html="priceImager(craft.countData.craftCost)"></span>
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
            <ItemIcon :grade="craft.Prof?.lvl || 0"
                      :locIcon="'/img/profs/' + craft.Prof.id + '.png'"
                      :tool-text="'Профессия'"
                      :size="'30px'"></ItemIcon>
          </q-item-section>
          <q-item-section>
            {{ craft.Prof.name }}
          </q-item-section>
          <q-item-section side>
            {{ profNeed(craft.profNeed) }}
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
            {{ craft.doodName }}
          </q-item-section>
          <q-item-section side>
          </q-item-section>
        </q-item>
        <q-item tag="label"
                v-if="isBest && curItem.isMat && !curItem.personal"
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
            <q-checkbox v-model="curItem.isBuyOnly"
                        :disable="loading"
                        @update:modelValue="setBuyable()"></q-checkbox>
          </q-item-section>
        </q-item>
        <q-item tag="label"
                v-if="!curItem.personal"
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
              {{ round(craft.countData.LaborData.forThisCraftBonused) }}
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
              {{ round(craft.countData.LaborData.forOneUnitOfThisCraft) }}
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
              {{ round(craft.countData.laborTotal) }}
              <img class="smallIcon" src="/img/valuta/2.png" alt=""/>
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<style scoped>
.InfoCol {
  width: 100%;
  max-width: 270px;
}

.listItem {
  min-height: 20px;
}
</style>
