<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import CodeBlock from '@/components/detail/CodeBlock.vue'
import Card from 'primevue/card'
import Button from 'primevue/button'
import type { SubTopic } from '@/types/DataModel'
import { useDataStore } from '@/stores/useDataStore'
import { useRouter } from 'vue-router'

const { activeData, selectedTopic, selectedSubtopic, activeTopicSubtopicList } =
  storeToRefs(useDataStore())
const data = computed(() => activeData.value as SubTopic)
const router = useRouter()
</script>

<template>
  <article class="w-3/4 mx-auto">
    <div class="mb-5">
      <Button
        v-for="(name, index) in activeTopicSubtopicList"
        class="mr-2 !bg-[#303036] !text-white !border-0"
        :class="index === selectedSubtopic ? '!bg-green-800' : ''"
        :key="name"
        :label="name"
        size="small"
        @click="router.push({ path: `/${selectedTopic}/${index}` })"
      />
    </div>
    <Card>
      <template #title>
        <h2 class="mb-0">{{ data.name }}</h2>
      </template>
      <template #content>
        <p class="mb-4">{{ data.description }}</p>
        <div v-for="example in data.examples" :key="example.title">
          <CodeBlock :title="example.title" :code="example.code" />
        </div>
      </template>
    </Card>
  </article>
</template>
