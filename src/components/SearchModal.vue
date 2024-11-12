<template>
    <div v-if="isVisible" class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center" @click.self="closeModal">
      <div class="bg-white rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3 p-6 relative">
        <button class="absolute top-3 right-3 text-gray-600 hover:text-gray-900" @click="closeModal">&times;</button>
        <Search @closeModal="closeModal"/>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, watch } from 'vue';
  import Search from '@/components/Search.vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const props = defineProps<{ isVisible: boolean }>();
  const emit = defineEmits(['close']);
  
  const searchQuery = ref('');
  
  const closeModal = () => {
    console.log('88888')
    emit('close');
  };
  
  const handleSearch = () => {
    console.log('Searching for:', searchQuery.value);
    // Add logic to handle search, like API calls
  };
  </script>