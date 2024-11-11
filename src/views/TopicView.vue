<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
const topic = route.params.topic;

const data = dataStore.data[topic] || null;
</script>

<template>
  <div>
    <h1>Topic view</h1>
    {{ data }}
  </div>
</template>
