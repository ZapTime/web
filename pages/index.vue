<script setup lang="ts">
import { CheckIcon } from '@heroicons/vue/solid'

definePageMeta({
  layout: 'default'
})

const steps = [
  { name: 'Create an account', description: '', href: '#', status: 'current' },
  {
    name: 'Setup Google Calendar Integration',
    description: 'In order to synchronize events in your customer\'s calendar and Zaptime you need to integrate Google Calendar.',
    href: '#',
    status: 'current'
  },
  { name: 'Create meetings', description: 'Recurring events, single events, seats, type, we have it all.', href: '#', status: 'current' },
  { name: 'Customize the calendar as you want', description: 'Multiple lanaguages, custom textations, custom colors, predefined themes and much much more.', href: '#', status: 'current' },
  { name: 'Embed to your website', description: 'Use script to emebed or integrate Zaptime directly using NPM package.', href: '#', status: 'complete' }
]
</script>

<template>
  <section class="relative">
    <div class="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:pb-96 lg:pt-40 lg:text-left">
      <div class="flex justify-center items-start">
        <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16 pt-40">
          <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl">
            <span class="block xl:inline">Easy way to manage your meetings and calls</span>
          </h1>
          <p class="mt-3 max-w-xs  text-lg text-[#7E848E] sm:text-xl md:mt-8 md:max-w-sm">
            Set your free time slots and invite people to&nbsp;choose the right time to contact you.
          </p>
          <div class="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div class="rounded-md shadow">
              <a href="#" class="w-full flex shadow-md items-center justify-center px-12 py-3 border border-transparent text-base font-medium rounded-md text-white to-z-pink-600 from-z-orange-600 bg-gradient-to-r  hover:bg-z-pink-700 md:py-4 md:text-lg md:px-14">
                Get started
              </a>
            </div>
          </div>
        </div>

        <div class="">
          <Calendars />
        </div>
      </div>
    </div>

    <!-- <div class="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
      <img class="absolute inset-0 mt-24 w-full h-[32rem] shadow-xl  shadow-orange-100 rounded-lg object-cover" src="/calendar.svg" alt="Calendar Preview">
    </div> -->

    <div class="flex justify-center my-24 ">
      <div class="relative">
        <img class="absolute -top-28  right-10  -rotate-12" src="/circles/scene-2.png" alt="">
        <img class="absolute -top-28  left-10 " src="/circles/scene-1.png" alt="">
        <img class="absolute  -bottom-36   -left-24 " src="/circles/scene-4.png" alt="">
        <!-- <img class="absolute  -bottom-40   right-24 " src="/circles/scene-4.png" alt=""> -->
        <ol role="list" class="overflow-hidden relative bg-white p-6 rounded-xl shadow-2xl shadow-z-orange-100">
          <li v-for="(step, stepIdx) in steps" :key="step.name" :class="[stepIdx !== steps.length - 1 ? 'pb-10' : '', 'relative']">
            <template v-if="step.status === 'complete'">
              <div v-if="(stepIdx !== steps.length - 1)" class="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full to-z-pink-600 from-z-orange-600 bg-gradient-to-r" aria-hidden="true" />
              <p class="relative flex items-start group">
                <span class="h-9 flex items-center">
                  <span class="relative z-10 w-8 h-8 flex items-center justify-center to-z-pink-600 from-z-orange-600 bg-gradient-to-r rounded-full group-hover:bg-z-orange-800">
                    <CheckIcon class="w-5 h-5 text-white" aria-hidden="true" />
                  </span>
                </span>
                <span class="ml-4 min-w-0 flex flex-col justify-center">
                  <span class="text-xs font-bold tracking-wide uppercase text-gray-500">{{ step.name }}</span>
                  <span class="text-sm text-gray-500 max-w-md">{{ step.description }}</span>
                </span>
              </p>
            </template>
            <template v-else-if="step.status === 'current'">
              <div v-if="(stepIdx !== steps.length - 1)" class="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300" aria-hidden="true" />
              <p class="relative flex items-center group" aria-current="step">
                <span class="h-9 flex items-center" aria-hidden="true">
                  <span class="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-z-orange-600 bg-gradient-to-r from-z-orange-600 to-z-pink-600 bg-origin-border rounded-full">
                    <span class="h-2.5 w-2.5 bg-white rounded-full" />
                  </span>
                </span>
                <span class="ml-4 min-w-0 flex flex-col justify-center">
                  <span class="text-xs font-bold tracking-wide uppercase text-gray-500">{{ step.name }}</span>
                  <span v-if="step.description" class="text-sm text-gray-500 max-w-md">{{ step.description }}</span>
                </span>
              </p>
            </template>
            <template v-else>
              <div v-if="(stepIdx !== steps.length - 1)" class="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300" aria-hidden="true" />
              <p class="relative flex items-start group">
                <span class="h-9 flex items-center" aria-hidden="true">
                  <span class="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                    <span class="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300" />
                  </span>
                </span>
                <span class="ml-4 min-w-0 flex flex-col">
                  <span class="text-xs font-bold tracking-wide uppercase text-gray-500">{{ step.name }}</span>
                  <span class="text-sm text-gray-500 max-w-md">{{ step.description }}</span>
                </span>
              </p>
            </template>
          </li>
          <li class="flex justify-center mt-8">
            <a href="/" class="shadow-md items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white to-z-pink-600 from-z-orange-600 bg-gradient-to-r  hover:bg-z-pink-700 md:text-lg ">
              Start now!
            </a>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>
