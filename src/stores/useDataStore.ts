import { defineStore } from 'pinia'
import { ref, type Ref, computed } from 'vue'
import { docs } from '@/data/docs'

import {
  type TypeScriptDocs,
  type Topic,
  type SubTopic,
  type TopicTree,
} from '@/types/DataModel'

export const useDataStore = defineStore('dataStore', () => {
  const documentation: Ref<TypeScriptDocs> = ref(docs)
  const selectedTopic: Ref<string> = ref('')
  const selectedSubtopic: Ref<string> = ref('')

  const activeData = computed((): Topic | SubTopic => {
    if (selectedSubtopic.value) {
      const topicKeys = Object.keys(documentation.value)
      for (const key of topicKeys) {
        const topic: Topic = documentation.value[key]
        const subTopic: SubTopic = topic.subTopics.find(
          subTopic => subTopic.name === selectedSubtopic.value,
        )
        if (subTopic) {
          return subTopic
        }
      }
      return null
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
  }
})
