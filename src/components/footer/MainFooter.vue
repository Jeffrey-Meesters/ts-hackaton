<script lang="ts"></script>
<template>
  <footer class="text-gray-600 body-font h-screen-0 bg bg-[#3178C6]">
    <div class="md:max-w-6xl px-5 py-12 mx-auto">
      <div class="flex flex-wrap md:text-left text-center order-first">
        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 class="title-font tracking-widest font-bold mb-3 text-white">CATEGORIES</h2>
          <nav class="list-none mb-10 flex flex-col gap-y-3">
            <router-link
              to="/getStarted"
              aria-current="page"
              class="router-link-active router-link-exact-active flex-shrink-0 flex items-end text-white"
              aria-label="Getting started"
              >Getting started</router-link
            >
            <router-link
              to="/topics"
              aria-current="page"
              class="router-link-active router-link-exact-active flex-shrink-0 flex items-end text-white"
              aria-label="Topics"
              >Topics</router-link
            >
            <router-link
              to="/topics"
              aria-current="page"
              class="router-link-active router-link-exact-active flex-shrink-0 flex items-end text-white"
              aria-label="Topics"
              >Vision</router-link
            >
            <router-link
              to="/topics"
              aria-current="page"
              class="router-link-active router-link-exact-active flex-shrink-0 flex items-end text-white"
              aria-label="Topics"
              >About us</router-link
            >
          </nav>
        </div>
      </div>
    </div>
    <div class="bg-gray-100">
      <div class="md:max-w-6xl px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
        <div class="lg:flex-1 flex items-center">
          <router-link
            to="/"
            aria-current="page"
            class="router-link-active router-link-exact-active flex-shrink-0 font-medium flex items-end"
            aria-label="Nuxt UI Pro"
          >
            ABN Amro - {{ new Date().getFullYear() }}
          </router-link>
        </div>
      </div>
    </div>
  </footer>
</template>
