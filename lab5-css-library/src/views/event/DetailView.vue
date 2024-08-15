<script setup lang="ts">
import { toRefs, defineProps } from 'vue'
import { type Event } from '@/types'

const props = defineProps<{
  event: Event
  id: String
}>()
const { event } = toRefs(props)
</script>
<template>
  <p class="mb-3">{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
  <p class="italic">{{ event.description }}</p>
</template>
