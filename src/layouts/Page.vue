<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue';
</script>

<template>
  <div>
    <header class="bg-white col-span-full">
      <AppHeader />
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>
