<script setup>
import {LocalStorage} from "quasar";
import {onMounted} from "vue";
import {useRouter} from "vue-router";

const router = useRouter()

function redirect() {
  router.push({ path: LocalStorage.getItem('lastPath') ?? '/' })
}
onMounted(() => {
  redirect()
})
</script>

<style scoped>

</style>
