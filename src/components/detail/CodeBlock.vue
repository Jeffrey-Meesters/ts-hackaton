<script setup lang="ts">
import VCodeBlock from '@wdns/vue-code-block'

interface CodeBlockProps {
  code: string
  title?: string
}

defineProps<CodeBlockProps>()
</script>

<template>
  <label class="text-2xl" v-if="title">{{ title }}</label>
  <VCodeBlock
    :code="code"
    highlightjs
    lang="typescript"
    theme="neon-bunny-carrot"
  />
</template>
