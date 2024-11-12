<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import CodeBlock from '@/components/detail/CodeBlock.vue'
import pageLayout from '@/components/pageLayout.vue'
import Card from 'primevue/card'
import Button from 'primevue/button'
import type { SubTopic } from '@/types/DataModel'
import { useDataStore } from '@/stores/useDataStore'
import { router } from '@/router'

const { activeData, selectedTopic, selectedSubtopic } =
  storeToRefs(useDataStore())
const data = computed(() => activeData.value as SubTopic)
console.log('activeData', activeData.value)
console.log('selectedTopic', selectedTopic.value)
console.log('selectedSubtopic', selectedSubtopic.value)
</script>

<template>
  <pageLayout :name="data.name">
    <template #content>
      <article class="w-3/4 mx-auto">
        <div class="mb-2">
          <Button
            v-for="(tag, index) in data.tags"
            :key="tag"
            class="mr-2"
            :label="tag"
            severity="secondary"
            @click="router.push({ path: `${selectedTopic}`)"
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
