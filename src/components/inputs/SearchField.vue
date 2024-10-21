<script setup lang="ts">
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import InputText from 'primevue/inputtext'
</script>

<template>
  <IconField>
    <InputIcon>
      <i class="pi pi-search" />
    </InputIcon>
    <InputText placeholder="Search" variant="filled" />
  </IconField>
</template>
