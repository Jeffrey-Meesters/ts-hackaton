<template>
  <nav class="border-b border-b-secondary">
    <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between gap-3 h-20">
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

      <ul class="items-center gap-x-8 hidden lg:flex">
        <li class="relative">
          <router-link class="text-sm/6 font-semibold flex items-center gap-1 hover:text-primary" to="/getStarted">Getting started</router-link>
        </li>
        <li class="relative">
          <router-link class="text-sm/6 font-semibold flex items-center gap-1 hover:text-primary" to="/topics">Topics</router-link>
        </li>
      </ul>

      <div class="flex items-center justify-end lg:flex-1 gap-3">
        <router-link
          class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-full text-sm gap-x-2 px-3 py-2 shadow-sm text-white bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 aria-disabled:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 items-center hidden lg:flex"
          to="/Download"
        >
          Download
        </router-link>
      </div>
    </div>
  </nav>
</template>
