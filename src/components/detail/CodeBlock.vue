<script setup lang="ts">
import VCodeBlock from '@wdns/vue-code-block'

interface CodeBlockProps {
  code: string
  title: string
}

defineProps<CodeBlockProps>()
</script>

<template>
  <label>{{ title }}</label>
  <VCodeBlock :code="code" highlightjs lang="typescript" theme="neon-bunny" />
</template>
