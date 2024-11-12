<script setup lang="ts">
import '@/assets/typography.css';
import '@/assets/spacing.css';
import { shallowRef } from 'vue';
import ContentLayout from '@/layouts/Content.vue';
import PageLayout from '@/layouts/Page.vue';
import PlainLayout from '@/layouts/Plain.vue';
import { useRoute, useRouter, RouterView } from 'vue-router';
import MainFooter from '@/components/footer/MainFooter.vue';

const layouts = {
  plain: PlainLayout,
  page: PageLayout,
  content: ContentLayout,
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
  <div class="bg-slate-200 min-h-screen flex flex-col">
    <component :key="currentLayout" v-bind:is="currentLayout" class="flex-1 pb-12">
      <RouterView />
    </component>
    <MainFooter />
  </div>
</template>
