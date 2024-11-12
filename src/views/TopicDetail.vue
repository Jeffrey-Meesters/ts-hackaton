<script setup lang="ts">
import CodeBlock from '@/components/detail/CodeBlock.vue';
import pageLayout from '@/components/pageLayout.vue';
import Card from 'primevue/card';
import Button from 'primevue/button';
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';

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
      description: 'Constructs a type with all properties of T set to optional.',
      level: 'basic',
      examples: [
        {
          title: 'Basic Usage',
          description: 'Use `Partial<T>` to make all properties of an interface optional.',
          code:
            '\ninterface User {\n  id: number;\n  name: string;\n}\n\nconst partialUser: Partial<User> = { name: "Alice" }; // id is optional\n              ',
        },
      ],
    },
  ],
};
</script>

<template>
  <pageLayout :name="data.name">
    <template #content>
      <article class="w-3/4 mx-auto">
        <div class="mb-2">
          <Button class="mr-2" label="First example" severity="secondary" />
          <Button label="Second example" severity="secondary" />
        </div>
        <Card>
          <template #title>
            <h2 class="mb-0">{{ data.subTopics[0].name }}</h2>
          </template>
          <template #content>
            <p>{{ data.subTopics[0].description }}</p>
            <div v-for="example in data.subTopics[0].examples" :key="example.title">
              <CodeBlock :title="example.title" :code="example.code" />
            </div>
          </template>
        </Card>
        <Accordion value="0" class="mt-8">
          <AccordionPanel v-for="tab in data.subTopics" :key="tab.name" :value="tab.name">
            <AccordionHeader>{{ tab.name }}</AccordionHeader>
            <AccordionContent>
              <p class="m-0">{{ tab.description }}</p>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
      </article>
    </template>
  </pageLayout>
</template>
