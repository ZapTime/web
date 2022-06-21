<script setup lang="ts">
import { SearchIcon } from '@heroicons/vue/solid'

const { data: navigation } = await useAsyncData('navigation', () => {
  return fetchContentNavigation()
})
const docsNavigation = navigation.value.find(route => route._path === '/docs')

const router = useRouter()

const isActive = (url: string) => {
  return url === router.currentRoute.value.path
}

const navigateTo = (to: string): void => {
  router.push(to)
}

</script>

<template>
  <div class="w-[285px] px-6">
    <div class="mt-1 relative rounded-md shadow-sm">
      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <SearchIcon class="h-5 w-5 text-gray-400 dark:text-gray-600" aria-hidden="true" />
      </div>
      <input id="search" type="text" name="serach" class="focus:ring-z-orange-500 focus:ring text-gray-900 py-2 px-3 focus:border-z-orange-500 focus:outline-none block w-full pl-10 sm:text-sm border-gray-300 dark:border-gray-600 rounded-md placeholder:text-gray-400 dark:placeholder:text-gray-600" placeholder="Quick search">
    </div>
    <ul v-for="(group, i) in docsNavigation.children" :key="i" class="mt-5">
      <li>
        <h2 class="text-gray-900 dark:text-gray-100 font-medium mb-2">
          {{ group.title }}
        </h2>
        <ul class="border-l-2">
          <li v-for="(item, k) in group.children" :key="k" class="mt-1.5">
            <button class="text-gray-700 dark:text-gray-300 hover:dark:text-gray-200 block pl-3 ml-[-2px] hover:text-gray-900 transition-all duration-100" :class="{'pt-2': k !== 0, 'pt-2.5': k === 0, 'border-orange-500 hover:border-orange-500 border-l-2 font-semibold text-z-orange-500 hover:text-z-orange-500': isActive(item.link)}" @click="navigateTo(item._path)">
              {{ item.navTitle }}
            </button>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
