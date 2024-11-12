import { defineStore } from 'pinia'
import { ref, type Ref, computed } from 'vue'
import { docs } from '@/data/docs'

import type {
  TypeScriptDocs,
  Topic,
  SubTopic,
  TopicTree,
  TopicKey,
} from '@/types/DataModel'

export const useDataStore = defineStore('dataStore', () => {
  const documentation: Ref<TypeScriptDocs> = ref(docs)

  // const topics = computed(() => {
  //   return Object.keys(documentation.value).map(key => {
  //     const topic = documentation.value[key]
  //     return {
  //       // name: topic.name,
  //       // key,
  //       // description: topic.description,
  //       // level: topic.level,
  //       tags: topic.topics.map(subTopic => subTopic.tags).flat(),
  //       // topics: topic.topics.map((subTopic) => subTopic.name)
  //     }
  //   })
  // })

  const selectedTopic = ref<TopicKey>()
  const selectedSubtopic = ref<number>()

  const activeData = computed((): Topic | SubTopic => {
    if (selectedTopic.value && selectedSubtopic.value) {
      return documentation.value[selectedTopic.value].subTopics[
        selectedSubtopic.value
      ]
    }
    if (selectedTopic.value) {
      return documentation.value[selectedTopic.value]
    }
    return null
  })

  const topicTree = computed((): TopicTree[] => {
    return Object.keys(documentation.value).map(key => {
      const topic = documentation.value[key]
      return {
        key: key,
        label: topic.name,
        children: topic.subTopics.map(subTopic => ({
          key: subTopic,
          label: subTopic.name,
          children: subTopic.examples.map(example => ({
            key: example,
            label: example.title,
          })),
        })),
      }
    })
  })

  const threeRandomTopics = computed((): Topic[] => {
    const keys = Object.keys(documentation.value)
    const randomKeys = keys.sort(() => Math.random() - 0.5).slice(0, 3)
    return randomKeys.map(key => documentation.value[key])
  })

  return {
    documentation,
    // topics,
    selectedTopic,
    selectedSubtopic,
    activeData,
    topicTree,
    threeRandomTopics,
  }
})
