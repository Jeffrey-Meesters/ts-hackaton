<script setup lang="ts">
<<<<<<< Updated upstream
import CodeBlock from '@/components/detail/CodeBlock.vue'
const props = defineProps<{ topic: string }>()
const topic = props.topic || 'Default Topic'
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

    <p></p>
  </article>
=======
import { useRoute } from 'vue-router';

const route = useRoute();
const topic = route.params.topic;
const subTopic = route.params.subTopic;

const data = dataStore.data[topic].subTopics[subTopic] || null;
</script>

<template>
  <div>
    <h1>Topic details view</h1>

    {{ data }}
  </div>
>>>>>>> Stashed changes
</template>
