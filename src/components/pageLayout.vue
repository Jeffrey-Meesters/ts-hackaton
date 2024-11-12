<script setup lang="ts">
type props = {
  name: string
}
defineProps<props>()
</script>

<template>
  <div class="w-full h-screen bg-slate-300">
    <div class="mb-4 h-[10vh] flex justify-center items-center bg-[#007acc]">
      <h1 class="text-6xl text-white">{{ name }}</h1>
    </div>
    <slot name="content"></slot>
  </div>
</template>
