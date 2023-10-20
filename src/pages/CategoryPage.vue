<template>
  <div class="WindowArea column">
    <CategoryNavigator :filters="filters"></CategoryNavigator>
      <ItemList v-if="filteredList.length && !listProgress"></ItemList>
  </div>

</template>

<script setup>
import {computed, inject, nextTick, onMounted, provide, ref, watch} from "vue";
import CategoryNavigator from "components/category/CategoryNavigator.vue"
import ItemRow from "components/category/ItemRow.vue"
import ItemList from "components/items/ItemList.vue"
import {api} from "boot/axios";
import {layoutFix, notifyError} from "src/myFuncts";
import {useQuasar} from "quasar";

const q = useQuasar()
const selCategId = inject('selCategId')
const searchText = ref('')
provide('searchText', searchText)

const listProgress = ref(false)

const filters = ref({
  craftable: true,
  uncraftable: true,
  personal: true,
  public: true
})

const filterProgress = ref(false)
const onlyPersonal = computed(() => {
  if (!filters.value.personal)
    return []
  let result = itemList.value
  return result.filter(el => el.personal)
})

const onlyPublic = computed(() => {
  if (!filters.value.public)
    return []
  let result = itemList.value
  return result.filter(el => !el.personal)
})

const filteredByPersonal = computed(() => {
  if (!itemList.value || !itemList.value.length) {
    return []
  }
  let result = []

  result.push(...onlyPersonal.value)
  result.push(...onlyPublic.value)

  return result
})

const onlyCraftable = computed(() => {
  if (!filters.value.craftable)
    return []
  let result = filteredByPersonal.value
  return result.filter(el => el.craftable)
})

const onlyUnCraftable = computed(() => {
  if (!filters.value.uncraftable)
    return []
  let result = filteredByPersonal.value
  return result.filter(el => !el.craftable)
})
const filteredByCheckbox = computed(() => {
  if (!filteredByPersonal.value || !filteredByPersonal.value.length) {
    return []
  }
  let result = []

  result.push(...onlyCraftable.value)
  result.push(...onlyUnCraftable.value)

  return result
})

const filteredList = computed(() => {
  if (!filteredByCheckbox.value || !filteredByCheckbox.value.length) {
    return []
  }
  let result = filteredByCheckbox.value
  let fixedText = layoutFix(searchText.value)
  if (fixedText !== '') {
    let search = fixedText.toLowerCase()
    result = result.filter(el =>
      el.name.toLowerCase().indexOf(search) !== -1
    )
  }
  return result
})
provide('filteredList', filteredList)
onMounted(() => {
  getListFromIdxDB()
  //loadList()
})

watch(selCategId,() => {
    resetList()
})

watch(filters.value,() => {
    resetList()
}, {deep: true})

const SearchList = ref([])

const itemList = computed(() => {
  if(!SearchList.value || !SearchList.value.length){
    return []
  }
  let list = [...SearchList.value]
  return  list.filter(item => item.categId === selCategId.value)
})

function resetList() {
    listProgress.value = true
    nextTick(() =>{
        listProgress.value = false
    })
}

function getListFromIdxDB()
{
  let openRequest = indexedDB.open('prepData', 1)
  openRequest.onupgradeneeded = function() {
    //console.log('иницилиазия бд')
    // срабатывает, если на клиенте нет базы данных
    // ...выполнить инициализацию...
    let db = openRequest.result;
    if (!db.objectStoreNames.contains('cachedData')) {
      db.createObjectStore('cachedData', {keyPath: 'id'})
    }
  }

  openRequest.onerror = function() {
    console.error("Error", openRequest.error);
  }

  openRequest.onsuccess = function() {
    let db = openRequest.result;
    // продолжить работу с базой данных, используя объект db
    let transaction = db.transaction('cachedData', 'readonly')
    let cachedData = transaction.objectStore("cachedData")
    let list = cachedData.get('searchList')
    list.onsuccess = (event) => {
      let result = event.target.result
      if(result){
        SearchList.value = result.content
      } else {
        loadList()
      }
    }

    list.onerror = (event) => {
      console.log('SearchList не сохранен')
    }
  }
}

function indexDB(list) {
  let openRequest = indexedDB.open('prepData', 1)
  openRequest.onupgradeneeded = function() {
    console.log('иницилиазия бд')
    // срабатывает, если на клиенте нет базы данных
    // ...выполнить инициализацию...
    let db = openRequest.result;
    if (!db.objectStoreNames.contains('cachedData')) {
      db.createObjectStore('cachedData', {keyPath: 'id'});
    }
  };

  openRequest.onerror = function() {
    console.error("Error", openRequest.error);
  }

  openRequest.onsuccess = function() {
    let db = openRequest.result;
    // продолжить работу с базой данных, используя объект db
    console.log('вижу бд')
    let transaction = db.transaction('cachedData', 'readwrite');
    let cachedData = transaction.objectStore("cachedData")
    let searchList = {
      id: 'searchList',
      content: list
    };
    let request = cachedData.add(searchList);
    request.onsuccess = function() { // (4)
      console.log("Список добавлен в хранилище", request.result);
    };

    request.onerror = function() {
      console.log("Ошибка", request.error);
    };
  };
}

function loadList() {

  api.post(apiUrl + 'api/options.php', {
    params: {
      method: 'getSearchList'
    }
  })
    .then((response) => {
      if(!!!response?.data?.result){
        throw new Error();
      }
      indexDB(response?.data?.data ?? [])
      SearchList.value = response?.data?.data ?? []
    })
    .catch((error) => {
      q.notify(notifyError(error, 'Ой! Search Не работает :('))
    })
}
</script>

<style scoped>
.navigator {
  flex-wrap: wrap;
}
</style>
