<template>
  <div class="prose w-full max-w-[840px]">
    <ContentDoc :key="router.currentRoute.value.path" :path="router.currentRoute.value.path" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'docs-layout'
})

const router = useRouter()
</script>

<style>
 html {
   background-color: #F3F4F6;
 }
</style>
