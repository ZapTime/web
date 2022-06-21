<template>
  <div class="max-h-[570px] shadow-2xl rounded-xl  shadow-gray-900">
    <ZapTimeCalendar @event-changed="event => $emit('event-changed', event)" :calendar-id="calendarId" :config="config" />
  </div>
</template>

<script setup lang="ts">
import { ZapTimeCalendar, IZapTimeConfig } from '@zaptime/vue3'

defineProps<{
  config: IZapTimeConfig,
  calendarId?: string
}>()
</script>

<style>
@import url('/node_modules/@zaptime/vue3/dist/style.css');
</style>
