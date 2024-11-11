<script setup lang="ts">
import CodeBlock from '@/components/detail/CodeBlock.vue'
// import { useDataStore } from '@/stores/useDataStore'
// const dataStore = useDataStore()
// const data = dataStore.activeData
const data = {
  name: 'Utility Types',
  description: 'Predefined types to facilitate common type transformations.',
  level: 'advanced',
  code: '',
  subTopics: [
    {
      name: 'Partial<T>',
      tags: ['utility', 'generic'],
      description:
        'Constructs a type with all properties of T set to optional.',
      level: 'basic',
      examples: [
        {
          title: 'Basic Usage',
          description:
            'Use `Partial<T>` to make all properties of an interface optional.',
          code: `
interface User {
  id: number;
  name: string;
}

const partialUser: Partial<User> = { name: "Alice" }; // id is optional
              `,
        },
      ],
    },
  ],
}
</script>

<template>
  <div class="h-[10vh] flex justify-center items-center bg-[#007acc]">
    <h1 class="text-6xl text-white">{{ data.name }}</h1>
  </div>
  <article class="w-3/4 mx-auto pt-4">
    <p>
      {{ data.description }}
    </p>

    <div class="pt-4" v-for="subTopic in data.subTopics" :key="subTopic.name">
      <h2 class="mb-0">{{ subTopic.name }}</h2>
      <p>{{ subTopic.description }}</p>

      <div v-for="example in subTopic.examples" :key="example.title">
        <CodeBlock :title="example.title" :code="example.code" />
      </div>
    </div>
  </article>
</template>
