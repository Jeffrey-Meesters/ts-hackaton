<template>
    <div class="relative">
    <input class="bg-gray-100 text-white pl-10 py-2 rounded" readonly @click="openModal" placeholder="Search..."/>
    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
    </div>
    <SearchModal :isVisible="isModalVisible" @close="closeModal" />
</div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import SearchModal from './SearchModal.vue'; // Adjust the path as needed
  
  const isModalVisible = ref(false);
  
  const openModal = () => {
    isModalVisible.value = true;
  };
  
  const closeModal = () => {
    isModalVisible.value = false;
  };
  </script>