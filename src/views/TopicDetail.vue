<script setup lang="ts">
import { useRoute } from 'vue-router'
import CodeBlock from '@/components/detail/CodeBlock.vue'
import dataStore from '@/store/dataStore'
const route = useRoute()

const props = defineProps<{ topic: string }>()
const topic = props.topic || 'Default Topic'
const subTopic = route.params.subTopic

const data = dataStore.data[topic].subTopics[subTopic] || null
</script>

<template>
  <div class="h-[30vh] flex justify-center items-center bg-[#007acc]">
    <h1 class="text-6xl text-white">{{ topic }}</h1>
  </div>
  <article>
    <h1>Generics</h1>
    <p>
      Lorem ipsum for some info about this topic Lorem ipsum for some info about
      this topic Lorem ipsum for some info about this topic Lorem ipsum for some
      info about this topic Lorem ipsum for some info about this topic Lorem
      ipsum for some info about this topic
    </p>

    <CodeBlock title="Generics" code="const name = (name: string) => ({})" />
    {{ data }}

    <p></p>
  </article>
</template>
