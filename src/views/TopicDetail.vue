<script setup lang="ts">
const props = defineProps<{ topic: string }>()
const topic = props.topic || 'Default Topic'
</script>

<template>
  <div class="h-[30vh] flex justify-center items-center bg-[#007acc]">
    <h1 class="text-6xl text-white">{{ topic }}</h1>
  </div>
  <main class="p-5">
    <!-- Additional content goes here -->
  </main>
</template>
