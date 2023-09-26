<script setup>
import {onMounted, ref, provide, computed} from "vue";
import {api} from "boot/axios";
import {notifyError} from "src/myFuncts";
import CitySelect from "components/CitySelect.vue";
import {useQuasar} from "quasar";

const apiUrl = String(process.env.DelivApi)
const q = useQuasar()
const cityList = ref([])
const companyList = ref([])

const sourceKladr = ref('5500000100000')
const targetKladr = ref('5400000100000')
provide('sourceKladr', sourceKladr)
provide('targetKladr', targetKladr)

const distance = ref(0);

const fast = ref(false)
const disabled = computed(() => {
  return !sourceKladr.value || !targetKladr.value || sourceKladr.value === targetKladr.value
})

const citiesProgress = ref(false)
const companiesProgress = ref(false)
const startedAt = ref('2023-09-26 17:45')

const weight = ref(2)

function anyProgress() {
  return citiesProgress.value || companiesProgress.value
}

function loadCities() {
  companiesProgress.value = true
  api.get(apiUrl + 'api/city.php', {
    params: {
      method: 'list',
    }
  })
      .then((response) => {
        if (!!!response?.data?.result) {
          throw new Error();
        }
        cityList.value = response?.data?.data ?? []

      })
      .catch((error) => {
        q.notify(notifyError(error))
      })
      .finally(() => {
        companiesProgress.value = false
      })
}

function onSelectFrom(id) {
  sourceKladr.value = id
}

function onSelectTo(id) {
  targetKladr.value = id
}

function loadCompanies() {
  if (disabled.value) return;
  companiesProgress.value = true
  api.get(apiUrl + 'api/delivery.php', {
    params: {
      method: 'list',
      type: fast.value ? 'fast' : 'slow',
      weight: weight.value,
      sourceKladr: sourceKladr.value,
      targetKladr: targetKladr.value,
      startedAt: startedAt.value
    }
  })
      .then((response) => {
        if (!!!response?.data?.result) {
          throw new Error();
        }
        companyList.value = response?.data?.data ?? []

      })
      .catch((error) => {
        q.notify(notifyError(error))
      })
      .finally(() => {
        companiesProgress.value = false
      })
}

onMounted(() => {
  loadCities()
})
</script>

<template>
  <div class="WindowArea column">
    <div class="navigator" ref="navigatorRef">
      <div>
        <CitySelect :cityList="cityList"
                    :cLabel="'Откуда'"
                    @onSelect="(id)=> onSelectFrom(id)"
        ></CitySelect>
        <CitySelect :cityList="cityList"
                    :cLabel="'Куда'"
                    @onSelect="(id)=> onSelectTo(id)"
        ></CitySelect>
      </div>

      <div>
        <div>
          <q-input type="number"
                   label="вес"
                   min="1"
                   suffix="кг"
                   class="Input"
                   borderless
                   v-model="weight"
          ></q-input>
          <q-toggle label="Быстрая" :model-value="fast" @click="fast = !fast" :disable="disabled"></q-toggle>
        </div>
      </div>
      <div>
        <q-input v-model="startedAt" class="Input" borderless>
          <template v-slot:prepend>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                <q-date v-model="startedAt" mask="YYYY-MM-DD HH:mm">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat/>
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>

          <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                <q-time v-model="startedAt" mask="YYYY-MM-DD HH:mm" format24h>
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat/>
                  </div>
                </q-time>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
        <q-btn icon="update"
               class="Input"
               flat
               :disable="disabled"
               label="рассчитать"
               @click="loadCompanies()"
        ></q-btn>
      </div>
    </div>
    <q-linear-progress :animation-speed="200" color="green" :indeterminate="anyProgress()"></q-linear-progress>
    <q-scroll-area class="col myScrollArea">
      <div class="ItemArea">
        <q-list separator>
          <template v-for="(company, idx) in companyList" :key="idx">
            <q-item v-if="!company.error">
              <q-item-section>
                <q-item-label>{{ company?.company?.name ?? 'kjk' }}</q-item-label>
                <q-item-label caption>
                  Доставит: {{ company?.deliveredAt }} за {{ company.price }}.р
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item v-else>
              <q-item-section>
                <q-item-label>
                  <span style="color: red">Произошла чудовищная ошибка</span>
                </q-item-label>
                <q-item-label caption>Данные этой компании не загрузились</q-item-label>
              </q-item-section>

            </q-item>
          </template>

        </q-list>
      </div>
    </q-scroll-area>
  </div>
</template>

<style scoped>
.ItemArea {
  padding: 1em;
}
</style>
