<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import CodeBlock from '@/components/detail/CodeBlock.vue'
import pageLayout from '@/components/pageLayout.vue'
import Card from 'primevue/card'
import Button from 'primevue/button'
import type { SubTopic } from '@/types/DataModel'
import { useDataStore } from '@/stores/useDataStore'

const { activeData } = storeToRefs(useDataStore())
const data = computed(() => activeData.value as SubTopic)
</script>

<template>
  <pageLayout :name="data.name">
    <template #content>
      <article class="w-3/4 mx-auto">
        <div class="mb-2">
          <Button
            v-for="tag in data.tags"
            :key="tag"
            class="mr-2"
            :label="tag"
            severity="secondary"
          />
        </div>
        <Card>
          <template #title>
            <h2 class="mb-0">{{ data.name }}</h2>
          </template>
          <template #content>
            <p>{{ data.description }}</p>
            <div v-for="example in data.examples" :key="example.title">
              <CodeBlock :title="example.title" :code="example.code" />
            </div>
          </template>
        </Card>
      </article>
    </template>
  </pageLayout>
</template>
