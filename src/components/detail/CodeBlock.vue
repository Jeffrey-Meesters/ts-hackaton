<script setup lang="ts">
import VCodeBlock from '@wdns/vue-code-block';

interface CodeBlockProps {
  code: string;
  title?: string;
  height?: string;
  copyTab?: boolean;
}

const { copyTab = true } = defineProps<CodeBlockProps>();
</script>

<template>
  <label class="font-bold underline" v-if="title">{{ title }}</label>
  <VCodeBlock :code="code" highlightjs :height="height" lang="typescript" :copyTab theme="neon-bunny-carrot" />
</template>
