<template>
  <div class="text-center">
    <div class="mb-10">
      <span
        class="inline-flex items-center text-sm px-2.5 py-1.5 bg-primary-50 text-primary-500 ring-1 ring-inset ring-primary-500 ring-opacity-25 relative rounded-full font-semibold text-balance"
      >
        For and by the ABN community
      </span>
    </div>
    <h1 class="text-5xl font-medium tracking-tight text-[#303036] sm:text-7xl">Your personal TypeScript <strong class="text-black">cheat-sheet</strong></h1>
    <div class="mt-6 text-lg tracking-tight text-gray-600 text-balance">
      Learn TypeScript with our interactive cheat-sheet. Get started with TypeScript and learn the basics in minutes.
    </div>
    <div class="mt-10 flex flex-wrap gap-x-6 gap-y-3 justify-center">
      <router-link
        class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-full text-base gap-x-3 px-6 py-3 shadow-sm text-white !bg-[#303036] !text-white hover:bg-gray-800 disabled:bg-gray-900 aria-disabled:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 inline-flex items-center"
        to="/getStarted"
      >
        Get started
      </router-link>
      <router-link
        class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-full text-base gap-x-3 px-6 py-3 shadow-sm ring-1 ring-inset ring-gray-300 text-gray-700 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 aria-disabled:bg-gray-50 focus-visible:ring-2 focus-visible:ring-primary-500 inline-flex items-center"
        to="topics"
      >
        See all topics
      </router-link>
    </div>
  </div>
</template>
