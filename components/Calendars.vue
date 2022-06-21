<template>
  <div class="relative mb-32 w-[400px]" @mouseover="hovered = true" @mouseleave="onMouseLeave">
    <div
      class="absolute hidden 2xl:block w-full hover:z-50 transition-all translate-y-2 scale-95 hover:scale-100 hover:translate-y-0 hover:translate-x-4 ease-out duration-300 left-60"
      :class="[autoElevated === 'calypso-theme-calendar' && !hovered ? 'z-40 translate-y-0 translate-x-4 scale-100' : 'z-auto']">
      <ZaptimeCalendar calendar-id="calypso-theme-calendar" :config="calypsoConfig" />
    </div>
    <div
      class="absolute w-full top-10 hover:z-50 translate-y-2 scale-95 hover:scale-100 hover:translate-y-0 hover:translate-x-4 ease-out transition-all duration-300 left-40"
      :class="[autoElevated === 'mullbery-theme-calendar' && !hovered ? 'z-40 translate-y-0 translate-x-4 scale-100' : 'z-10']">
      <ZaptimeCalendar calendar-id="mullbery-theme-calendar" :config="mullberyConfig" />
    </div>

    <div
      class="absolute w-full top-20 hover:z-50 translate-y-2 scale-95 hover:scale-100 hover:translate-y-0 hover:translate-x-4 ease-out transition-all duration-300 left-20"
      :class="[autoElevated === 'green-theme-calendar' && !hovered ? 'z-40 translate-y-0 translate-x-4 scale-100' : 'z-20']">
      <ZaptimeCalendar calendar-id="green-theme-calendar" :config="greenConfig" />
    </div>

    <div
      class="absolute w-full transition-all translate-y-2 scale-95 hover:scale-100 hover:z-50 hover:translate-y-0 hover:translate-x-4 ease-out duration-300 top-32"
      :class="[autoElevated === 'blueviolet-theme-calendar' && !hovered ? 'z-40 translate-y-0 translate-x-4 scale-100' : 'z-30']">
      <ZaptimeCalendar calendar-id="blueviolet-theme-calendar" :config="blueConfig" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { IZapTimeConfig, book, confirm, cancel } from '@zaptime/vue3'

const calendarKeys = ['blueviolet-theme-calendar', 'green-theme-calendar', 'mullbery-theme-calendar', 'calypso-theme-calendar']

const hovered = ref(false)

const colorMode = useColorMode();

const index = ref(0)

const autoElevated = computed(() => {
  return calendarKeys[index.value]
})

const onMouseLeave = () => {
  hovered.value = false
  index.value = 0
}

let interval

onMounted(() => {
  interval = setInterval(() => {
    if (!hovered.value) {
      if (index.value + 1 > calendarKeys.length - 1) {
        index.value = 0
      } else {
        index.value++
      }
    }
  }, 3500)
})

onBeforeUnmount(() => {
  clearInterval(interval)
})

//iversion of site dark/light mode
const calendarDarkMode = computed(() => {  
  if (colorMode && colorMode.value === 'dark') {
    return 'light';
  }

  return 'dark';
});

const calypsoConfig = computed((): IZapTimeConfig => {
  return {
    token: 'PpBC1z6M01ofd24Ojdy7OHC9iL7fctju',
    min: 0,
    max: 1,
    externalBooking: false,
    compact: true,
    profileImage:
      'https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

    theme: {
      mode: calendarDarkMode.value,
      colors: {
        25: '#DBEFF2',
        50: '#F1FAFA',
        100: '#DBEFF2',
        200: '#8DC7D3',
        300: '#58A7B8',
        400: '#58A7B8',
        500: '#3C8B9E',
        600: '#38798E',
        700: '#305E6E',
        800: '#2E4F5C',
        900: '#2A434F'
      }
    }
  }
})

const mullberyConfig = computed((): IZapTimeConfig => {
  return {
    token: 'zcQB081VOx1ZjIlMwbYFYzR5pqNgaWtI',
    min: 0,
    max: 1,
    externalBooking: false,
    compact: true,
    profileImage:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=250&h=350&dpr=1',

    theme: {
      mode: calendarDarkMode.value,
      colors: {
        25: '#F9EAF4',
        50: '#F5D5E8',
        100: '#FDF8FB',
        200: '#EDB4D5',
        300: '#E185B8',
        400: '#FBF4F8',
        500: '#D55F9D',
        600: '#C34682',
        700: '#A63065',
        800: '#8A2A54',
        900: '#742749'
      }
    }
  }
})

const greenConfig = computed((): IZapTimeConfig => {
  return {
    token: 'hxmDoQQM0hT05V8zPPqQ3D1I0aybS4Lf',
    min: 0,
    max: 1,
    externalBooking: false,
    compact: true,
    profileImage:
      'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=250&h=350&dpr=1',

    theme: {
      mode: calendarDarkMode.value,
      colors: {
        25: '#F5FDF8',
        50: '#EEFBF4',
        100: '#D5F6E1',
        200: '#AFEBC8',
        300: '#7BDAAA',
        400: '#39AF77',
        500: '#22A76C',
        600: '#148756',
        700: '#106C48',
        800: '#0F563A',
        900: '#0E4631'
      }
    }
  }
});

const blueConfig = computed((): IZapTimeConfig => {

  return {


    token: 'R1znGb26YwqUGjxRUROWnXXgxbhb46wL',
    min: 0,
    max: 1,
    externalBooking: false,

    compact: true,
    profileImage:
      'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=350&h=250&dpr=1',

    locale: {
      texts: {
        introduction: 'Let\'s start simple'

      },
      confirmationForm: {
        buttons: {
          goBack: 'Back'
        }
      }
    },

    theme: {
      mode: calendarDarkMode.value,
      colors: {
        25: '#E3E4F6',
        50: '#CDD1F0',
        100: '#F8F8FD',
        200: '#ABB1E5',
        300: '#828AD8',
        400: '#F3F3FB',
        500: '#6567CC',
        600: '#5651BF',
        700: '#5349B4',
        800: '#483E8F',
        900: '#3B3672'
      }
    }
  }
})



</script>
