<template>
  <main class="text-gray-700 dark:text-gray-200 bg-[#F3F4F6] h-screen">
    <Navbar />

    <div class="flex mt-8 text-gray-800">
      <DocsLeftMenu class="mr-5" />

      <router-view />
    </div>
    <!-- <Footer /> -->
  </main>
</template>
