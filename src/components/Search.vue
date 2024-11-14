<template>
  <div class="inline-block w-full relative" ref="searchContainer">
    <form class="mx-auto">
      <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
      <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
          <svg class="w-6 h-6 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>
        <input
          v-model="query"
          @input="onInput"
          @click="checkResult"
          @keydown="handleKeydown"
          ref="inputRef"
          type="search"
          id="search"
          class="block w-full p-6 px-12 text-xl ps-12 text-gray-900 border border-gray-300 rounded-full bg-slate-100 focus:outline-none"
          placeholder="Search..."
          aria-label="Search input"
        />
        <button
          type="submit"
          class="text-white absolute end-5 bottom-5 bg-red-400 rounded-full hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-4 py-2"
          aria-label="Submit search"
        >
          Search
        </button>
      </div>
    </form>
    <section
      class="bg-slate-200 mt-3 p-4 shadow-xl rounded-xl overflow-hidden absolute w-full z-50"
      v-if="showSearchResult"
      aria-label="Search results"
    >
      <ul>
        <li :key="key" v-for="(topic, key) of topics" @click="selectTopic" class="hover:text-green-700" ref="resultItems" @keydown.enter="selectTopic">
          <router-link class="block p-2" :to="`/${key}`">{{ topic?.name }}</router-link>
        </li>
        <li :key="index" v-for="(subTopic, index) in subTopics" @click="selectTopic" class="hover:text-green-700" ref="resultItems" @keydown.enter="selectTopic">
          <router-link class="block p-2" :to="`/${subTopic.parent}/${subTopic.index}`">{{ subTopic?.name }}</router-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import { docs } from '../data/docs';

import type { PartialTypeScriptDocs, SearchResultItem, SubTopic } from '@/types/DataModel';

const focusedItemIndex = ref<number>(-1);
const inputRef = ref<HTMLInputElement | null>(null); 
const resultItems = ref<HTMLElement[]>([]);
const query = ref<string>('');
const isFocusOnSearch = ref<boolean>(false);
const searchContainer = ref<HTMLElement | null>(null);
const topics = ref<PartialTypeScriptDocs | null>(null);
const subTopics = ref<SearchResultItem[]>();
const emit = defineEmits(['closeModal']);

const showSearchResult = computed<boolean>(() => {
  return isFocusOnSearch.value && query.value.length > 2 && (JSON.stringify(topics.value).length > 4|| subTopics.value?.length) ? true : false;
});

const fetchSearchResultsbaseOnSubTopics = (subTopicList: SubTopic[], parent: string) => {
  if (subTopicList.length) {
    subTopicList.forEach((item, index) => {
      if (item.name.toLowerCase().includes(query.value.toLowerCase())) {
        subTopics.value?.push({...item, index, parent: parent});
      }
    });
  }
};


const fetchSearchResultsbaseOnTopics = () => {
  const result = Object.entries(docs).filter(([key, value]) => {
    fetchSearchResultsbaseOnSubTopics(value.subTopics, key)
    if (value.name.toLowerCase().includes(query.value.toLowerCase())) {
      return [key, value];
    }
  });
  topics.value = Object.fromEntries(result) as PartialTypeScriptDocs;
};

const onInput = () => {
  if(query.value.length > 2){
    topics.value= {};
    subTopics.value = [];
    isFocusOnSearch.value = query.value.length > 2;
    fetchSearchResultsbaseOnTopics();
  }
};

const handleClickOutside = (event: MouseEvent) => {
  if (searchContainer.value && !searchContainer.value.contains(event.target as Node)) {
    isFocusOnSearch.value = false;
  }
};

const selectTopic = () => {
  query.value = '';
  isFocusOnSearch.value = false;
  emit('closeModal');
};

function checkResult() {
  isFocusOnSearch.value = true;
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'ArrowDown') {
    event.preventDefault();
    focusedItemIndex.value = (focusedItemIndex.value + 1) % resultItems.value.length;
    resultItems.value[focusedItemIndex.value]?.focus();
  } else if (event.key === 'ArrowUp') {
    event.preventDefault();
    focusedItemIndex.value = (focusedItemIndex.value - 1 + resultItems.value.length) % resultItems.value.length;
    resultItems.value[focusedItemIndex.value]?.focus();
  }
};

onMounted(() => {
  inputRef.value?.focus();
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>
