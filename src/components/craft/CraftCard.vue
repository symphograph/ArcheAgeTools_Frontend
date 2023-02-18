<template>
  <q-card class="CraftCard"
          v-if="Item && !progress"
          transition-show="jump-down"
          transition-hide="jump-up"
  >
    <q-card-section>
      <CraftInfo :Craft="Craft"></CraftInfo>
    </q-card-section>
    <q-card-section>
      <div class="wrapContainer">
        <div class="wrapElement">
          <MatRow :Craft="Craft"></MatRow>
        </div>
        <div class="wrapElement" v-if="!isSingleCraft">
          <q-btn class="DefBtn"
                 label="Предпочитать"
                 v-if="!Craft.countData.isUBest"
                 @click="setAsUBest"
          >
            <q-tooltip class="bg-tooltip">
              Всегда выбирать этот рецепт при расчетах
            </q-tooltip>
          </q-btn>
          <q-btn v-else class="DefBtn" label="Сбросить" @click="delUBest"></q-btn>
        </div>
      </div>
    </q-card-section>
    <q-card-section v-if="Craft.matPool">
      <MatPool :matPool="Craft.matPool"></MatPool>
      <TrashPool :trashPool="Craft.trashPool"></TrashPool>
    </q-card-section>
  </q-card>
</template>

<script setup>


import {inject, provide, ref} from "vue";
import CraftInfo from "components/craft/CraftInfo.vue";
import MatRow from "components/craft/MatRow.vue";
import MatPool from "components/craft/MatPool.vue";
import {api} from "boot/axios";
import {useQuasar} from "quasar";
import TrashPool from "components/craft/TrashPool.vue";
import {notifyError, notifyOK} from "src/myFuncts";

const q = useQuasar()
const apiUrl = String(process.env.API)
const token = inject('token')

const itemId = inject('itemId')
const Item = inject('Item')
const props = defineProps({
  Craft: ref(null)
})
const progress = inject('progress')
const isSingleCraft = inject('isSingleCraft')
//const resultAmount = ref(props.Craft.resultAmount)
provide('resultAmount', props.Craft.resultAmount)

const emit = defineEmits(['setUBest', 'delUBest'])


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
      emit('setUBest')
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
      emit('setUBest')
    })
    .catch((error) => {
      q.notify(notifyError(error))
    })
}
</script>

<style scoped>
.wrapContainer {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.wrapElement {
  padding: 1em;
}

.listItem {
  min-height: 1px;
}

.CraftCard {
  background-color: rgba(211, 238, 144, 0.06);
  box-shadow: 0 0 1em 0 rgb(0 0 0 / 9%);
  margin: 1em 0;
  padding: 1em;
}


.CraftInfo {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.InfoCell {
  display: flex;
  justify-content: space-between;
  min-width: 250px;
}

.TextBottom {
  height: 100%;
  display: flex;
  align-items: flex-end;
}

.DefBtn {
  font-size: 12px;
}

@media screen and (min-width: 600px) {

}

</style>
