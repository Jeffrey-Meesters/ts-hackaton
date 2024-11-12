<script setup lang="ts">
import '@/assets/typography.css';
import '@/assets/spacing.css';
import Search from './components/Search.vue'
import { shallowRef } from 'vue';
import PageLayout from '@/layouts/Page.vue';
import PlainLayout from '@/layouts/Plain.vue';
import { useRoute, useRouter, RouterView } from 'vue-router';

const layouts = {
  plain: PlainLayout,
  page: PageLayout,
};

const router = useRouter();
const currentLayout = shallowRef(PlainLayout);

const setLayout = () => {
  type LayoutKey = keyof typeof layouts;
  const newLayout = useRoute()?.meta?.layout as LayoutKey;
  currentLayout.value = layouts[newLayout] || PlainLayout;
};

router.afterEach(setLayout);
</script>

<template>
  <div>
    <component :key="currentLayout" v-bind:is="currentLayout">
      <div class="w-1/2 min-w-20 mx-auto mt-20"><Search/></div>
      <RouterView />
    </component>
  </div>
</template>

