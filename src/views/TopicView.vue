<script setup lang="ts">
import Card from 'primevue/card';
import Button from 'primevue/button';
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';
import { useDataStore } from '@/stores/useDataStore';
import { storeToRefs } from 'pinia';
import type { Topic } from '@/types/DataModel';
import { computed } from 'vue';

const { activeData, selectedTopic } = storeToRefs(useDataStore());
const data = computed(() => activeData.value as Topic);
</script>

<template>
  <article class="w-3/4 mx-auto">
    <Card>
      <template #title> </template>
      <template #content>
        <p>{{ data.description }}</p>
        <Accordion value="0">
          <AccordionPanel v-for="(tab, index) in data.subTopics" :key="tab.name" :value="tab.name">
            <AccordionHeader>{{ tab.name }} </AccordionHeader>
            <AccordionContent>
              <p class="m-0">{{ tab.description }}</p>
              <div class="text-right">
                <router-link :to="{ path: `${selectedTopic}/${index}` }">
                  <Button icon="pi pi-link" size="small" class="mt-2" label="Read Article" variant="text" severity="secondary" raised />
                </router-link>
              </div>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
      </template>
    </Card>
  </article>
</template>
