<script setup lang="ts">
import { useDataStore } from '@/stores/useDataStore';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';

const route = useRoute();
const topic = route.params.topic;

const { activeData } = storeToRefs(useDataStore());
</script>

<template>
  <div>
    <h1>Topic view</h1>
    {{ activeData }}
  </div>
</template>
