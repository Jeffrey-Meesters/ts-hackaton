<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useDataStore } from '@/stores/useDataStore';

import { type TopicTree } from '@/types/DataModel';
const { topicTree } = storeToRefs(useDataStore());

const router = useRouter();
const nodes = ref<TopicTree[] | null>(null);
const expandedKeys = ref<Record<string, boolean>>({});

onMounted(() => {
  nodes.value = topicTree.value;
});

const expandAll = () => {
  if (nodes.value) {
    for (const node of nodes.value) {
      expandNode(node);
    }
    expandedKeys.value = { ...expandedKeys.value };
  }
};

const collapseAll = () => {
  expandedKeys.value = {};
};

const expandNode = (node: TopicTree) => {
  if (node.children && node.children.length) {
    expandedKeys.value[node.key] = true;
    for (const child of node.children) {
      expandNode(child);
    }
  }
};

const toCamelCase = (inputString:string) =>  {
    return inputString
        .split(' ')
        .map((word, index) => 
            index === 0 
            ? word.toLowerCase() 
            : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join('');
}

const onNodeClick = (node: TopicTree) => {
  if (node !== undefined) {
    const topic = toCamelCase(node.label);
      const subTopic = '0';
      router.push({ name: 'detail', params: { topic, subTopic } });
  }
};
</script>

<template>
  <div class="card">
    <div class="flex flex-wrap gap-2 mb-6">
      <Button type="button" icon="pi pi-plus" label="Expand All" @click="expandAll" />
      <Button type="button" icon="pi pi-minus" label="Collapse All" @click="collapseAll" />
    </div>
    <Tree
      v-model:expandedKeys="expandedKeys"
      :value="nodes"
      class="w-full md:w-[30rem] cursor-pointer"
    >
      <template #default="{ node }">
        <span @click="onNodeClick(node)">{{ node.label }}</span>
      </template>
    </Tree>
  </div>
</template>