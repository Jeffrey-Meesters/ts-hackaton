<template>
  <div class="inline-block w-full" ref="searchContainer">
    <form class="mx-auto">
      <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
      <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>
        <input
          v-model="query"
          @input="onInput"
          @focus="showResults = true"
          type="search"
          id="default-search"
          class="block w-full p-6 px-12 text-xl ps-10 text-gray-900 border border-gray-300 rounded-full bg-slate-100 focus:ring-blue-500 focus:border-blue-500 d"
          placeholder="Search..."
          required
        />
        <button
          type="submit"
          class="text-white absolute end-5 bottom-5 bg-red-400 rounded-full hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-4 py-2"
        >
          Search
        </button>
      </div>
    </form>
    <div v-if="showResults" class="bg-slate-200 mt-3 shadow-xl rounded-xl overflow-hidden">
      <span v-if="topics" class="bg-slate-700 text-white block py-2 pl-2">Topics</span>
      <ul v-if="topics">
        <li :key="key" v-for="(topic, key) of topics" class="py-1 pl-2" @click="showResults = false">
          <router-link :to="key">{{ topic?.name }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { docs } from '../data/docs';
import type { PartialTypeScriptDocs, SubTopic } from '@/types/DataModel';

type listType = string[];
const query = ref<string>('');
const searchList = ref<listType>([]);
const showResults = ref<boolean>(false);
const searchContainer = ref<HTMLElement | null>(null);
const topics = ref<PartialTypeScriptDocs | null>(null);
const subTopics = ref<SubTopic[] | null>(null);

const fetchSearchResults = () => {
  const result = Object.entries(docs).filter(([key, value]) => {
    if (value.subTopics.length) {
      const subtopicList = value.subTopics.filter((item) => {
        if (item.name.toLowerCase().includes(query.value.toLowerCase())) {
          return item as SubTopic;
        }
      });
      subTopics.value = subtopicList;
    }
    if (value.name.toLowerCase().includes(query.value.toLowerCase())) {
      return [key, value];
    }
  });
  topics.value = Object.fromEntries(result) as PartialTypeScriptDocs;
  console.log(subTopics.value);
};

const onInput = () => {
  showResults.value = query.value.length > 0;
  fetchSearchResults();
};

const handleClickOutside = (event: MouseEvent) => {
  if (searchContainer.value && !searchContainer.value.contains(event.target as Node)) {
    showResults.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>
