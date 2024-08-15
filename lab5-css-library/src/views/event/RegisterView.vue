<script setup lang="ts">
import { toRefs } from 'vue'
import { type Event } from '@/types'
import { useRouter } from 'vue-router'
import { useMessageStore } from '@/stores/message'

const props = defineProps<{
  event: Event
  id: String
}>()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { event } = toRefs(props)
const router = useRouter()
const store = useMessageStore()
const register = () => {
  store.updateMessage('You are successfully registered for ' + props.event.title)
  setTimeout(() => {
    store.resetMessage()
  }, 3000)
  router.push({ name: 'event-detail-view', params: { id: props.event.id } })
}
</script>

<template>
  <p class="mb-3 mt-10">Register event here</p>
  <button class="bg-gray-200 py-2 px-4 mb-5  rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus: ring-green-600 font-bold" @click="register">Register</button>
</template>
