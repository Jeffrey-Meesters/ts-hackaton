<script setup lang="ts">
import { useDataStore } from '@/stores/useDataStore'

const dataStore = useDataStore()

console.log(dataStore)
</script>

<template>
  <section class="md:max-w-4xl">
    <h1>Homepage</h1>
  </section>
</template>
