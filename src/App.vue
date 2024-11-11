<script setup lang="ts">
import '@/assets/typography.css'
import '@/assets/spacing.css'
import Search from './components/Search.vue'
import AppHeader from './components/layout/AppHeader.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div>
    <header class="col-span-full">
      <AppHeader />
    </header>
    <main>
      <div class="w-1/2 min-w-20 mx-auto mt-20"><Search/></div>
      <RouterView />
    </main>
  </div>
</template>
