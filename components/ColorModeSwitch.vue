<script setup lang="ts">
defineProps({
  size: {
    type: String,
    default: 'w-8 h-8'
  },
  spacing: {
    type: String,
    default: 'p-0'
  }
})

const colorMode = useColorMode()
const onClick = () => (colorMode.value === 'light' ? (colorMode.preference = 'dark') : (colorMode.preference = 'light'))
</script>

<template>
  <button aria-label="Color Mode" class="inline-block" @click="onClick">
    <ColorScheme placeholder="...">
      <Icon class="text-gray-900 w-[32px] h-[32px]" v-if="colorMode.value === 'light'" name="heroicons-solid:moon" />
      <Icon class="text-gray-100 w-[32px] h-[32px]" v-else name="heroicons-solid:sun" />
    </ColorScheme>
  </button>
</template>
