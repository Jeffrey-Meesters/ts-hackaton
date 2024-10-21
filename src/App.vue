<script setup lang="ts">
import AppHeader from './components/layout/AppHeader.vue'
import AppSidebar from '@/components/layout/AppSidebar.vue'
import AppFooterContent from '@/components/layout/AppFooterContent.vue'
</script>

<template>
  <div
    class="grid gap-4 grid-cols-[225px_minmax(100px,_1fr)] grid-flow-row auto-rows-max"
  >
    <header class="col-span-full">
      <AppHeader />
    </header>

    <aside class="min-h-screen">
      <AppSidebar />
    </aside>

    <main class="min-h-screen">
      <RouterView />
    </main>

    <footer class="col-span-2 p-4">
      <AppFooterContent />
    </footer>
  </div>
</template>
