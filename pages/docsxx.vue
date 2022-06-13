<script lang="ts" setup>

definePageMeta({
  layout: 'docs-layout'
})

const supportLinks = [
  {
    name: 'I just want a simple script',
    href: '#',
    label: 'Simple',
    description:
      'Create an configuration for a ZapTime Calendar in our app. Add code to <script/> section of your website with your token and be done.'
  },
  {
    name: 'I want Vue Components!',
    href: '#',
    label: 'Vue',

    description:
      'Better integration with existing forms in your app. Add ZapTime to your website and simply grab the reactive selected event. Book it, reserve it, cancel it, you can do it all.'
  },
  {
    name: 'Let\'s go headless',
    href: '#',
    label: 'Headless',

    description:
      'Want to create your own calendars, but don\'t want to deal with all the intrigues and gotchas dates bring? No problem! For Vue3 we have a composable function which will guide you through the calendar journey.'
  },
  {
    name: 'Only here for an API',
    href: '#',
    label: 'API',

    description:
      'With our public API interface you can have all the perks and automations that ZapTime brings and make the front-end part completely yourself.'
  }
]
</script>
<template>
  <section class=" max-w-5xl mx-auto relative pb-32 px-4 sm:px-6 lg:px-8" aria-labelledby="contact-heading">
    <div class="grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-y-12 lg:gap-x-8">
      <div v-for="link in supportLinks" :key="link.name" class="flex flex-col bg-white rounded-2xl  shadow-xl">
        <div class="flex-1 relative pt-10 px-6 pb-6 md:px-8">
          <div class="absolute top-0 px-3 py-1 inline-block bg-gradient-to-l font-medium text-md  text-white from-z-orange-600 to-z-pink-400 rounded-xl shadow-lg transform -translate-y-1/2">
            {{ link.label }}
          </div>
          <h3 class="text-xl font-medium text-gray-900">
            {{ link.name }}
          </h3>
          <p class="mt-4 text-base text-gray-500">
            {{ link.description }}
          </p>
        </div>
        <div class="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
          <a :href="link.href" class="text-base font-medium text-z-pink-700 bg-gradient-to-l text-transparent bg-clip-text from-z-orange-600 to-z-pink-400">Read more<span aria-hidden="true"> &rarr;</span></a>
        </div>
      </div>
    </div>
  </section>
</template>
