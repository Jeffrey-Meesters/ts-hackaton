<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import TopicCard from '@/components/topicCard/TopicCard.vue';
import { useDataStore } from '@/stores/useDataStore';
import type { CardItem } from '@/types/DataModel';

const { cardList } = storeToRefs(useDataStore());
const cardDetails = ref<CardItem[]>([]);

function getRandomCards(cards: CardItem[], count: number): CardItem[] {
  const shuffled = cards.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

onMounted(() => {
  const flattenedCards = cardList.value
    .filter(array => array.length > 0)
    .flat();

  cardDetails.value = getRandomCards(flattenedCards, 3);
});
</script>

<template>
  <div class="flex flex-row">
    <div v-for="cardDetail in cardDetails" :key="cardDetail.name">
      <TopicCard
        :name="cardDetail.name"
        :code="cardDetail.code"
        :description="cardDetail.description"
      />
    </div>
  </div>
</template>
