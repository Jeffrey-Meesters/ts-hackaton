<script setup lang="ts">
import { useRouter } from 'vue-router';
import CodeBlock from '@/components/detail/CodeBlock.vue';

interface CardProps {
  name: string;
  code: string;
  description: string;
  parentName: string;
}

defineProps<CardProps>();

const router = useRouter();

const onNodeClick = (topic: string, subTopic: string) => {
  router.push({ name: 'detail', params: { topic, subTopic } });
};
</script>
<template>
  <Card class="!h-full" pt:body="flex-1 flex flex-col" pt:content="flex-1">
    <template #header>
      <CodeBlock :code="code" />
    </template>
    <template #title>{{ name }}</template>
    <template #content>
      <p class="m-0">
        {{ description }}
      </p>
    </template>
    <template #footer>
      <div class="flex gap-4 mt-1">
        <Button label="See Detail" class="w-full" @click="onNodeClick(parentName, '0')" />
      </div>
    </template>
  </Card>
</template>
