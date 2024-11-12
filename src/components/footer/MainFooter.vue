<script lang="ts">
</script>
<template>
<footer class="text-gray-600 body-font h-screen-0 bg bg-blue-500">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap md:text-left text-center order-first">
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium tracking-widest text-sm mb-3 text-white">CATEGORIES</h2>
        <nav class="list-none mb-10">
          <router-link
          to="/getStarted"
          aria-current="page"
          class="router-link-active router-link-exact-active flex-shrink-0 flex items-end gap-1.5 text-white"
          aria-label="Getting started"
        >Getting started</router-link>
          <router-link
          to="/topics"
          aria-current="page"
          class="router-link-active router-link-exact-active flex-shrink-0 flex items-end gap-1.5 text-white"
          aria-label="Topics"
        >Topics</router-link>
        </nav>
      </div>
    </div>
  </div>
  <div class="bg-gray-100">
    <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
      <div class="lg:flex-1 flex items-center gap-1.5">
        <router-link
          to="/"
          aria-current="page"
          class="router-link-active router-link-exact-active flex-shrink-0 font-bold text-xl text-gray-900 flex items-end gap-1.5"
          aria-label="Nuxt UI Pro"
        >
          Typescript
          <span
            class="inline-flex items-center font-medium rounded-md text-xs px-2 py-1 bg-primary-50 text-primary-500 ring-1 ring-inset ring-primary-500 ring-opacity-25 mb-0.5"
            >Cheat sheet</span
          >
        </router-link>
      </div>
    </div>
  </div>
</footer>
</template>