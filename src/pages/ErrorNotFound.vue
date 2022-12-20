<template>
  <div class="WindowArea">
    <div style="height: 100%" class="bg-blue text-white text-center q-pa-md flex flex-center">
      <div>
        <div style="font-size: 30vh">
          404
        </div>

        <div class="text-h2" style="opacity:.4">
          Ой. Мы куда-то не туда попали...
        </div>

        <q-btn
          class="q-mt-xl"
          color="white"
          text-color="blue"
          unelevated
          to="/"
          label="На главную"
          no-caps
        />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ErrorNotFound'
})
</script>
