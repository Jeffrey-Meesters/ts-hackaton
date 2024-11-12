import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { docs } from '@/data/docs'

import type { Ref } from 'vue'
import type {
  TypeScriptDocs,
  Topic,
  SubTopic,
  TopicTree,
  Example,
} from '@/types/DataModel'

export const useDataStore = defineStore('dataStore', () => {
  const documentation: Ref<TypeScriptDocs> = ref(docs)
  const selectedTopic: Ref<string> = ref('')
  const selectedSubtopic: Ref<string> = ref('')

  const activeData = computed((): Topic | SubTopic | null => {
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
    return Object.keys(documentation.value).map((key: string) => {
      const topic: Topic = documentation.value[key]
      return {
        key: key,
        label: topic.name,
        children: topic.subTopics.map((subTopic: SubTopic) => ({
          key: subTopic.name,
          label: subTopic.name,
          children: subTopic.examples.map((example: Example) => ({
            key: example.title,
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
    selectedTopic,
    selectedSubtopic,
    activeData,
    topicTree,
    threeRandomTopics,
  }
})
