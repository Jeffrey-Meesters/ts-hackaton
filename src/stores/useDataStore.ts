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

  const selectedTopic: Ref<Topic | null> = ref(null)
  const selectedSubtopic: Ref<SubTopic | null> = ref(null)

  const activeData = computed(() => {
    if (selectedSubtopic.value) {
      return selectedSubtopic.value
    }
    if (selectedTopic.value) {
      return selectedTopic.value
    }
    return null
  })

  // const topicTree = com

  return {
    documentation,
    // topics,
    selectedTopic,
    selectedSubtopic,
    activeData,
    // topicTree,
  }
})

export const NodeService = {
  getTreeNodesData() {
    return Promise.resolve([
      {
        key: '0',
        label: 'Root',
        children: [
          {
            key: '0-0',
            label: 'Child 1',
            children: [
              {
                key: '0-0-0',
                label: 'Grandchild 1-1',
              },
              {
                key: '0-0-1',
                label: 'Grandchild 1-2',
              },
            ],
          },
          {
            key: '0-1',
            label: 'Child 2',
            children: [
              {
                key: '0-1-0',
                label: 'Grandchild 2-1',
              },
            ],
          },
        ],
      },
      {
        key: '1',
        label: 'Root 2',
        children: [
          {
            key: '1-0',
            label: 'Child 1',
          },
          {
            key: '1-1',
            label: 'Child 2',
            children: [
              {
                key: '1-1-0',
                label: 'Grandchild 2-1',
              },
              {
                key: '1-1-1',
                label: 'Grandchild 2-2',
              },
            ],
          },
        ],
      },
    ])
  },
}
