<script setup lang="ts">
import { useEventStore } from '@/stores/event'
import { storeToRefs } from 'pinia'

const store = useEventStore()
const { event } = storeToRefs(store)
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <nav class="mb-5 mt-10">
      <RouterLink class="text-lg hover:text-green-600" exact-active-class="text-green-500" :to="{ name: 'event-detail-view' }">Details</RouterLink>
      |
      <RouterLink class="text-lg hover:text-green-600" exact-active-class="text-green-500" :to="{ name: 'event-register-view' }">Register</RouterLink>
      |
      <RouterLink class="text-lg hover:text-green-600" exact-active-class="text-green-500" :to="{ name: 'event-edit-view' }">Edit</RouterLink>
    </nav>
    <RouterView :event="event" />
  </div>
</template>
