<template>
  <main class="text-gray-100 dark:text-gray-200 bg-white bg transition-all duration-300">
    <Navbar />
    
    <router-view />
    <Footer />
  </main>
</template>

<style>

.dark .bg {
/* background: hsla(0, 0%, 0%, 1);

background: linear-gradient(27deg, hsla(0, 0%, 0%, 1) 0%, hsla(0, 0%, 2%, 1) 47%, hsla(322, 98%, 41%, 1) 82%, hsla(345, 81%, 54%, 1) 88%, hsla(358, 100%, 63%, 1) 94%, hsla(23, 100%, 64%, 1) 100%);

background: -moz-linear-gradient(27deg, hsla(0, 0%, 0%, 1) 0%, hsla(0, 0%, 2%, 1) 47%, hsla(322, 98%, 41%, 1) 82%, hsla(345, 81%, 54%, 1) 88%, hsla(358, 100%, 63%, 1) 94%, hsla(23, 100%, 64%, 1) 100%);

background: -webkit-linear-gradient(27deg, hsla(0, 0%, 0%, 1) 0%, hsla(0, 0%, 2%, 1) 47%, hsla(322, 98%, 41%, 1) 82%, hsla(345, 81%, 54%, 1) 88%, hsla(358, 100%, 63%, 1) 94%, hsla(23, 100%, 64%, 1) 100%); */

background: hsla(0, 0%, 0%, 1);

background: linear-gradient(50deg, hsla(0, 0%, 0%, 1) 0%, hsla(0, 0%, 2%, 1) 71%, hsla(322, 98%, 41%, 1) 88%, hsla(345, 81%, 54%, 1) 92%, hsla(358, 100%, 63%, 1) 96%, hsla(23, 100%, 64%, 1) 100%);

background: -moz-linear-gradient(50deg, hsla(0, 0%, 0%, 1) 0%, hsla(0, 0%, 2%, 1) 71%, hsla(322, 98%, 41%, 1) 88%, hsla(345, 81%, 54%, 1) 92%, hsla(358, 100%, 63%, 1) 96%, hsla(23, 100%, 64%, 1) 100%);

background: -webkit-linear-gradient(50deg, hsla(0, 0%, 0%, 1) 0%, hsla(0, 0%, 2%, 1) 71%, hsla(322, 98%, 41%, 1) 88%, hsla(345, 81%, 54%, 1) 92%, hsla(358, 100%, 63%, 1) 96%, hsla(23, 100%, 64%, 1) 100%);

}
</style>
