<template>
    <ZaptimeCalendar @event-changed="onEventChanged" :config="calypsoConfig" calendar-id="full-view-calendar-external"></ZaptimeCalendar>
</template>

<script setup lang="ts">
import { IEvent } from '@zaptime/core';
import { IZapTimeConfig } from '@zaptime/vue3'
const colorMode = useColorMode();
//iversion of site dark/light mode
const calendarDarkMode = computed(() => {
    if (colorMode && colorMode.value === 'dark') {
        return 'light';
    }

    return 'dark';
});

const onEventChanged = (event: IEvent) => {
    alert(`Event Changed\nFrom: ${event.start}\nTo: ${event.end}`)
};

const calypsoConfig = computed((): IZapTimeConfig => {
    return {
        token: 'PpBC1z6M01ofd24Ojdy7OHC9iL7fctju',
        min: 0,
        max: 1,
        externalBooking: true,
        profileImage:
            'https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

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
