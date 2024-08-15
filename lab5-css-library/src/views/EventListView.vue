<script setup lang="ts">
import EventCard from '@/components/EventCard.vue'
import { type Event } from '@/types'
import { ref, onMounted, computed, watchEffect } from 'vue'
import EventService from '@/services/EventService'
import { useRouter } from 'vue-router'

const router = useRouter()
const events = ref<Event[] | null>(null)
const totalEvents = ref(0)
const hasNextPage = computed(() => {
  // const totalPages = Math.ceil(totalEvents.value / pageSize.value)
  const totalPages = Math.ceil(totalEvents.value / 3)

  return page.value < totalPages
})
const props = defineProps({
  page: {
    type: Number,
    required: true
  },
  pageSize: {
    type: Number,
    default: 2
  }
})
const page = computed(() => props.page)
const pageSize = computed(() => props.pageSize)

// onMounted(() => {
//   watchEffect(() => {
//     EventService.getEvents(pageSize.value, page.value, pageSize.value)
//       .then((response) => {
//         events.value = response.data
//         totalEvents.value = parseInt(response.headers['x-total-count'])
//       })
//       .catch(() => {
//         router.push({ name: 'network-error-view'})
//       })
//   })
// })
onMounted(() => {
  watchEffect(() => {
    EventService.getEvents(3, page.value, pageSize.value)
      .then((response) => {
        events.value = response.data
        totalEvents.value = response.headers['x-total-count']
      })
      .catch(() => {
        router.push({ name: 'network-error-view' })
      })
  })
})
</script>

<template>
  <h1>Events For Good</h1>
  <!-- new element -->

  <div class="flex flex-col items-center">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <!-- <EventDetails v-for="event in events" :key="event.id" :event="event" /> -->
    <div class="flex w-[290px] mt-4">
      <RouterLink
        id="page-prev"
        class="flex-1 text-left hover:text-green-600"
        :to="{ name: 'event-list-view', query: { page: page - 1, pageSize: pageSize } }"
        rel="prev"
        v-if="page != 1"
        >&#60; Prev Page</RouterLink
      >
      <RouterLink
        id="page-next"
        class="flex-1 text-right hover:text-green-600"
        :to="{ name: 'event-list-view', query: { page: page + 1, pageSize: pageSize } }"
        rel="next"
        v-if="hasNextPage"
      >
        Next Page &#62;</RouterLink
      >
    </div>
  </div>
</template>
