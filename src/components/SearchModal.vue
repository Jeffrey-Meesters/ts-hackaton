<template>
    <div v-if="isVisible" class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50" @click.self="closeModal">
      <div class="rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3 p-6 relative">
        <Search @closeModal="closeModal"/>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import Search from '@/components/Search.vue';


  defineProps<{ isVisible: boolean }>();
  const emit = defineEmits(['close']);
    
  const closeModal = () => {
    emit('close');
  };
  </script>