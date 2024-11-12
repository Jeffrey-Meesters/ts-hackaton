import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { docs } from '@/data/docs'

import type { Ref } from 'vue'
import type {
  TypeScriptDocs,
  Topic,
  TopicKey,
  SubTopic,
  TopicTree,
  Example,
  CardItem,
} from '@/types/DataModel'

export const useDataStore = defineStore('dataStore', () => {
  const documentation: Ref<TypeScriptDocs> = ref(docs)
  const selectedTopic = ref<TopicKey | undefined>()
  const selectedSubtopic = ref<number | undefined>()

  const activeData = computed((): Topic | SubTopic | null => {
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

  // const searchList = computed((): Topic[] => {
  //   searchList = [topicName: 'name', subtopics: [{subtopicname: 'name', tags: ['tag1', 'tag2']}]]
  // })

  const cardList = computed((): CardItem[] => {
    return Object.keys(documentation.value).map(topic => {
      const subTopics = documentation.value[topic].subTopics
      return subTopics.map((subTopic: SubTopic) => {
        return {
          name: subTopic.name,
          code: subTopic.examples[0].code,
          description: subTopic.description,
        }
      })
    })
  })

  return {
    documentation,
    selectedTopic,
    selectedSubtopic,
    activeData,
    topicTree,
    cardList,
  }
})
