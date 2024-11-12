<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue';
import { useDataStore } from '@/stores/useDataStore';
import { storeToRefs } from 'pinia';
const { activeData } = storeToRefs(useDataStore());
</script>

<template>
  <div w-full h-screen bg-slate-300>
    <header class="bg-white col-span-full">
      <AppHeader />
    </header>
    <div class="-mt-12">
      <div class="h-[12vh] mb-12 flex justify-center items-center bg-primary">
        <h1 class="text-5xl mb-0 text-white">{{ activeData?.name }}</h1>
      </div>
    </div>
    <main>
      <slot />
    </main>
  </div>
</template>
