<script setup lang="ts">
import '@/assets/typography.css'
import '@/assets/spacing.css'

import Card from 'primevue/card'
import AppHeader from './components/layout/AppHeader.vue'
import AppSidebar from '@/components/layout/AppSidebar.vue'
import AppFooterContent from '@/components/layout/AppFooterContent.vue'
</script>

<template>
  <div
    class="grid gap-1 grid-cols-[225px_minmax(100px,_1fr)] grid-flow-row auto-rows-max"
  >
    <header class="col-span-full">
      <AppHeader />
    </header>

    <aside class="min-h-screen">
      <Card class="min-h-screen">
        <template #content>
          <AppSidebar />
        </template>
      </Card>
    </aside>

    <main class="min-h-screen">
      <Card class="min-h-screen">
        <template #content>
          <RouterView />
        </template>
      </Card>
    </main>

    <footer class="col-span-2">
      <Card>
        <template #content>
          <AppFooterContent />
        </template>
      </Card>
    </footer>
  </div>
</template>
