<template>
  <div class="CraftInfo" v-if="Craft">
    <div>
      <q-list dense>
        <q-item>
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
        <q-item dense class="listItem" >
          <q-item-section>
            <q-item-label>
              Коэф SPM:
            </q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-item-label>
              {{ round(Craft.countData.spmu)}}
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item dense class="listItem" >
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
        <q-item dense class="listItem" v-if="profit !== false" >
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
      </q-list>
    </div>
    <div>
      <q-list dense>
        <q-item dense class="listItem" >
          <q-item-section>
            <q-item-label>
              ОР на рецепт:
            </q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-item-label>
              {{ round(Craft.countData.LaborData.forThisCraftBonused)}}
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
              {{ round(Craft.countData.LaborData.forOneUnitOfThisCraft)  }}
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
import {priceImager} from "src/myFuncts.js"
import {copyToClipboard, useQuasar} from "quasar";

const q = useQuasar()

const props = defineProps({
  Craft: ref(null)
})

//const Craft = inject('Craft')
const Item = inject('Item')
const profit = computed(()=> {
  if(!Item.value.Pricing.isGoldable){
    return 0
  }
  if(!Item.value.Pricing.Price.price){
    return false
  }
  let price = Item.value.Pricing.Price.price + ''
  price = price.replace(/[^0-9]/g,"") * 0.9
  price = Math.round(price)
  return price - props.Craft.countData.craftCost

})

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

function profNeed(need)
{
  if (!need){
    return ''
  }
  if(need < 1000){
    return need
  }
  return Math.round(need/1000)  + 'k'
}

function round(val)
{
  return Math.round(val * 100) / 100
}
</script>

<style scoped>
.listItem {
  min-height: 20px;
}
</style>
