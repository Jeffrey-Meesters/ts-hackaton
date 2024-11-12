<script setup lang="ts">
import { useRouter } from 'vue-router';
import CodeBlock from '@/components/detail/CodeBlock.vue';

interface CardProps {
  name: string,
  code: string,
  description: string,
  parentName: string,
};

defineProps<CardProps>();

const router = useRouter();

</script>
<template>
  <div>
      <Card style="width: 20rem; padding:1rem; margin:4rem; overflow: hidden">
        <template #header>
          <CodeBlock :code="code"/>
        </template>
        <template #title>{{ name }}</template>
        <template #content>
          <p class="m-0">
            {{ description }}
          </p>
        </template>
        <template #footer>
          <div class="flex gap-4 mt-1">
            <Button label="See Detail" class="w-full" @click="router.push({ path: `/${parentName}/${name}` })" />
          </div>
        </template>
      </Card>
    </div>
</template>
