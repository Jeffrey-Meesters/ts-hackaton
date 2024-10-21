<script setup lang="ts">
import { ref } from 'vue'
import PanelMenu from 'primevue/panelmenu'

const items = ref([
  {
    key: '0',
    label: 'The basics',
    icon: 'pi pi-compass',
    items: [
      {
        key: '0_1',
        label: 'Primitives',
      },
      {
        key: '0_1_0',
        label: 'Arrays',
      },
      {
        key: '0_1_1',
        label: 'Object Types',
      },
    ],
  },
  {
    key: '1',
    label: 'Type manipulation',
    icon: 'pi pi-cog',
    items: [
      {
        key: '1_0',
        label: 'Generics',
      },
      {
        key: '1_1',
        label: 'Keyof type',
      },
      {
        key: '1_2',
        label: 'Typeof type',
      },
      {
        key: '1_2',
        label: 'Indexed access types',
      },
    ],
  },
])
</script>

<template>
  <PanelMenu :model="items" />
</template>
