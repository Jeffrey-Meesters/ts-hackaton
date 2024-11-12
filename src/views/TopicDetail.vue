<script setup lang="ts">
import CodeBlock from '@/components/detail/CodeBlock.vue'
import pageLayout from '@/components/pageLayout.vue'
import Card from 'primevue/card'
import Button from 'primevue/button'

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
          code: '\ninterface User {\n  id: number;\n  name: string;\n}\n\nconst partialUser: Partial<User> = { name: "Alice" }; // id is optional\n              ',
        },
      ],
    },
  ],
}
</script>

<template>
  <pageLayout :name="data.name">
    <template #content>
      <article class="w-3/4 mx-auto">
        <div class="mb-2">
          <Button
            class="mr-2"
            label="First example"
            severity="secondary"
            rounded
          />
          <Button label="Second example" severity="secondary" rounded />
        </div>
        <Card>
          <template #title>
            <h2 class="mb-0">{{ data.subTopics[0].name }}</h2>
          </template>
          <template #content>
            <p>{{ data.subTopics[0].description }}</p>
            <div
              v-for="example in data.subTopics[0].examples"
              :key="example.title"
            >
              <CodeBlock :title="example.title" :code="example.code" />
            </div>
          </template>
        </Card>
      </article>
    </template>
  </pageLayout>
</template>
