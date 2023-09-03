<script setup>
import {computed, inject, nextTick, ref} from "vue";
import ItemRow from "components/category/ItemRow.vue";

const filteredList = inject('filteredList')
const pageSize = 50
const lastPage = Math.ceil(filteredList.length / pageSize)

const loading = ref(false)
const nextPage = ref(2)
const offset = ref(0)
const end = ref(20)

const items = ref([ {}, {}, {}, {}, {}, {}, {} ])
const options = computed(() => {
  if(!filteredList.value?.length) return []
  return filteredList.value.slice(0, end.value)
})
function onLoad (index, done) {
  setTimeout(() => {
    end.value += 20
    done()
  }, 1)
}
function onScroll({ to, ref }){
  console.log('scrrrrr', { to, ref })
  const lastIndex = options.value.length - 1
  if (loading.value !== true && nextPage.value < lastPage && to === lastIndex) {
    loading.value = true

    setTimeout(() => {
      nextPage.value++
      nextTick(() => {
        ref.refresh()
        loading.value = false
      })
    }, 500)
  }

}
</script>

<template>
  <q-scroll-area class="col myScrollArea">
    <q-list  dense separator>
        <q-infinite-scroll @load="onLoad" :offset="100" >
          <template v-for="(item, idx) in options" :key="idx">
            <ItemRow :item="item"></ItemRow>
          </template>
          <template v-slot:loading v-if="end < filteredList.length">
            <div class="row justify-center q-my-md">
              <q-spinner-dots color="primary" size="40px" />
            </div>
          </template>
        </q-infinite-scroll>
    </q-list>
      </q-scroll-area>


</template>

<style scoped>

</style>
