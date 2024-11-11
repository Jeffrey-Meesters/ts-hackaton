<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { NodeService } from '@/service/NodeService';

interface TreeNode {
  key: string;
  label: string;
  children?: TreeNode[];
}

const nodes = ref<TreeNode[] | undefined>(undefined);
const expandedKeys = ref<Record<string, boolean>>({});
const router = useRouter();

onMounted(() => {
  NodeService.getTreeNodesData().then((data: TreeNode[]) => {
    nodes.value = data;
  });
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

const expandNode = (node: TreeNode) => {
  if (node.children && node.children.length) {
    expandedKeys.value[node.key] = true;
    for (const child of node.children) {
      expandNode(child);
    }
  }
};

const onNodeClick = (node: TreeNode) => {
  router.push({ name: 'topic', params: { topic: node.label } });
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
      @node-click="onNodeClick"
    >
      <template #default="{ node }">
        <span @click="onNodeClick(node)">{{ node.label }}</span>
      </template>
    </Tree>
  </div>
</template>