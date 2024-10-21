<script setup lang="ts">
import Toolbar from 'primevue/toolbar'
import Avatar from 'primevue/avatar'

import SearchField from '@/components/inputs/SearchField.vue'
</script>

<template>
  <Toolbar>
    <template #start>
      <span>SoMe LoGo</span>
    </template>

    <template #center>
      <SearchField />
    </template>

    <template #end>
      <Avatar icon="pi pi-user" class="mr-2" size="large" />
    </template>
  </Toolbar>
</template>
