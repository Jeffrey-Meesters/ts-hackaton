<script setup lang="ts">
import TopicCardsBlock from '@/components/topicCardsBlock/TopicCardsBlock.vue';
import Search from '@/components/Search.vue';
import Title from '@/components/home/Title.vue';
</script>

<template>
  <section class="flex justify-center items-center flex-col">
    <div class="bg-white min-w-20 flex flex-col items-center mx-auto pt-[8rem] w-full">
      <Title class="md:max-w-4xl" />
      <Search class="my-20 min-w-20 max-w-[40rem]" />
    </div>
      <TopicCardsBlock />
  </section>
</template>
