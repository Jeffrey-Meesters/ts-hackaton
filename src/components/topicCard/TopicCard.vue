<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
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
  nodes.value = randomTopic;
});
</script>

<template>
  <div>
    <div v-for="node in nodes" :key="node.label">
        {{ node }}
      <Card style="width: 25rem; overflow: hidden" @click="onNodeClick(node)">
        <template #header>
          <img alt="user header" src="https://primefaces.org/cdn/primevue/images/usercard.png" />
        </template>
        <template #title>{{ node.label }}</template>
        <template #subtitle>{{ node.children.code }}</template>
        <template #content>
          <p class="m-0">
            {{ node.description }}
          </p>
        </template>
        <template #footer>
          <div class="flex gap-4 mt-1">
            <Button label="Cancel" severity="secondary" outlined class="w-full" />
            <Button label="Save" class="w-full" />
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>
