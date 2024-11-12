<script setup lang="ts">
import pageLayout from '@/components/pageLayout.vue'
import { Card } from 'primevue'
import Accordion from 'primevue/accordion'
import AccordionPanel from 'primevue/accordionpanel'
import AccordionHeader from 'primevue/accordionheader'
import AccordionContent from 'primevue/accordioncontent'
import { useDataStore } from '@/stores/useDataStore'
import { storeToRefs } from 'pinia'
import type { Topic } from '@/types/DataModel'
import { computed } from 'vue'

const { activeData } = storeToRefs(useDataStore())
const data = computed(() => activeData.value as Topic)
</script>

<template>
  <pageLayout :name="data.name">
    <template #content>
      <article class="w-3/4 mx-auto">
        <Card>
          <template #title>
            <h2 class="mb-0">{{ data.name }}</h2>
          </template>
          <template #content>
            <p>{{ data.description }}</p>
            <Accordion value="0">
              <AccordionPanel
                v-for="tab in data.subTopics"
                :key="tab.name"
                :value="tab.name"
              >
                <AccordionHeader>{{ tab.name }}</AccordionHeader>
                <AccordionContent>
                  <p class="m-0">{{ tab.description }}</p>
                </AccordionContent>
              </AccordionPanel>
            </Accordion>
          </template>
        </Card>
      </article>
    </template>
  </pageLayout>
</template>
