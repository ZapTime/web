<template>
    <ZaptimeCalendar :config="calypsoConfig" calendar-id="full-view-calendar"></ZaptimeCalendar>
</template>

<script setup lang="ts">
import { IZapTimeConfig } from '@zaptime/vue3'
const colorMode = useColorMode();
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
</script>
