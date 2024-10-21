<script setup lang="ts">
import Tag from 'primevue/tag'
</script>

<template>
  <span class="grid grid-cols-2">
    <section class="col-span-1 flex flex-col gap-1">
      <span class="font-bold w-24">Powered by:</span>
      <span class="flex gap-1 w-24">
        <Tag severity="secondary">TypeScript</Tag>
        <Tag severity="secondary">Primevue</Tag>
        <Tag severity="secondary">Tailwindcss</Tag>
      </span>
    </section>
    <section class="col-span-1 font-bold place-content-end">
      <span> © {{ new Date().getFullYear() }} Hackaton app </span>
    </section>
  </span>
</template>
