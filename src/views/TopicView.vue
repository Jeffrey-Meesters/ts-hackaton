<script setup lang="ts">
import pageLayout from '@/components/pageLayout.vue'
import { Card } from 'primevue'
import { useDataStore } from '@/stores/useDataStore'
import { storeToRefs } from 'pinia'
import type { Topic } from '@/types/DataModel'
import { computed } from 'vue'

const { activeData } = storeToRefs(useDataStore())
const data = computed(() => activeData.value as Topic)
</script>

<template>
  <pageLayout :name="activeData.name">
    <template #content>
      <article class="w-3/4 mx-auto">
        <div class="mb-2">
          <Button class="mr-2" label="First example" severity="secondary" />
          <Button label="Second example" severity="secondary" />
        </div>
        <Card>
          <template #title>
            <h2 class="mb-0">{{ data.name }}</h2>
          </template>
          <template #content>
            <p>{{ data.description }}</p>
            <div v-for="sub in data.subTopics" :key="sub.name">
              {{ sub.name }}
            </div>
          </template>
        </Card>
      </article>
    </template>
  </pageLayout>
</template>
