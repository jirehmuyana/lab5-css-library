<script setup lang="ts">
import { defineProps } from 'vue'
import type { Event } from '@/types'

const props = defineProps<{
  event: Event
}>()
</script>

<template>
  <div class="event-details">
    <p>{{ event.category }}</p>
    <p>{{ event.organizer }}</p>
  </div>
</template>

<style scoped>
.event-details {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
  text-align: right;
}
.event-details:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
