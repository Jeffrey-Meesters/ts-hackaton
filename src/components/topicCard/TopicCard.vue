<script setup lang="ts">
import { useRouter } from 'vue-router';
import CodeBlock from '@/components/detail/CodeBlock.vue';

interface CardProps {
  name: string;
  code: string;
  description: string;
}

defineProps<CardProps>();

const router = useRouter();

const onNodeClick = (label: string) => {
  router.push({ name: 'topic', params: { topic: label } });
};
</script>
<template>
  <div class="h-full">
    <Card style="width: 20rem; padding: 1rem; margin: 4rem; overflow: hidden" class="!h-full">
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
          <Button label="See Detail" @click="onNodeClick(name)" class="!bg-[#303036] !text-white w-full !border-none" />
        </div>
      </template>
    </Card>
  </div>
</template>
