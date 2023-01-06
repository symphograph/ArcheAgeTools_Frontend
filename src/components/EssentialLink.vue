<template>
  <q-item
    clickable
    tag="a"
    :to="link"
  >
    <q-item-section
      v-if="icon || ava"
      avatar
    >
      <q-icon v-if="icon" :name="icon" />
      <q-avatar v-if="ava" rounded>
        <q-img :src="ava" :ratio="30/30"></q-img>
      </q-avatar>
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    },
    ava: {
      type: String,
      default: ''
    }

  }
})
</script>
