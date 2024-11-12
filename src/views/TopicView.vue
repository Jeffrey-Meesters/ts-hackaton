<script setup lang="ts">
import pageLayout from '@/components/pageLayout.vue'
import { useDataStore } from '@/stores/useDataStore'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'

const route = useRoute()
const topic = route.params.topic

const { activeData } = storeToRefs(useDataStore())
</script>

<template>
  <pageLayout :name="activeData.name">
    <template #content>
      {{ activeData }}
    </template>
  </pageLayout>
</template>
