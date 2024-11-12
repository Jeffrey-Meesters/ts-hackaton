<script setup lang="ts">
import Card from 'primevue/card';
</script>

<template>
  <div class="md:max-w-4xl mx-auto">
    <h1 class="mb-10">Get Started</h1>
    <div class="grid grid-cols-2 gap-6">
      <Card v-for="i of 4">
        <template #content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dignissimos, aliquam minima nisi provident expedita delectus facere, maiores, assumenda
          architecto iusto sequi totam perspiciatis sunt explicabo consectetur eveniet voluptas ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eius alias minima ipsam autem placeat eos quo pariatur minus modi optio cupiditate eveniet laboriosam tempore consequatur, quis reiciendis a ea
          quisquam.
        </template>
      </Card>
    </div>
  </div>
</template>
