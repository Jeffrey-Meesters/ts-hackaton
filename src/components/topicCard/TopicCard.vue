<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import CodeBlock from '@/components/detail/CodeBlock.vue';
import { useDataStore } from '@/stores/useDataStore';
import type { SubTopic } from '@/types/DataModel';
const dataStore = useDataStore();
const router = useRouter();
const randomTopic = dataStore.topicTree[18].children || [];  
const nodes = ref<SubTopic[]>([]);

const onNodeClick = (node: SubTopic) => {
  if (node !== undefined) {
    router.push({ name: 'topic', params: { topic: node.label } });
  }
};

onMounted(() => {
  // nodes.value = randomTopic;
  nodes.value = [
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

const partialUser: Partial<User> = 
  { name: "Alice" }; // id is optional
              `,
          },
        ],
      },
    ]
});
</script>

<template>
  <div>
    <div v-for="node in nodes" :key="node.name">
      {{ node.examples.code }}
      <Card style="width: 20rem; padding:1rem; margin:4rem; overflow: hidden">
        <template #header>
          <CodeBlock :code="node.examples[0].code"/>
        </template>
        <template #title>{{ node.name }}</template>
        <template #content>
          <p class="m-0">
            {{ node.description }}
          </p>
        </template>
        <template #footer>
          <div class="flex gap-4 mt-1">
            <Button label="See Detail" class="w-full" @click="onNodeClick(node)" />
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>