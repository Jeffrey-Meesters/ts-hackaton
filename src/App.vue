<script setup lang="ts">
import '@/assets/typography.css'
import '@/assets/spacing.css'
import AppHeader from './components/layout/AppHeader.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div>
    <header class="col-span-full">
      <AppHeader />
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>
