<script setup lang="ts">
import TopicTree from '@/components/topicTree/TopicTree.vue';
import Search from '@/components/Search.vue';
import Title from '@/components/home/Title.vue';
</script>

<template>
  <section class="md:max-w-4xl flex justify-center items-center flex-col mx-auto pt-[200px]">
    <Title />
    <div class="w-1/2 min-w-20 mt-20">
      <Search />
    </div>
    <TopicTree />
  </section>
</template>
