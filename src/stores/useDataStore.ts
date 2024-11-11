import { defineStore } from 'pinia'
import { ref, Ref } from 'vue'
import { docs } from '@/data/docs'

import { TypeScriptDocs } from '@/types/DataModel'

export const useDataStore = defineStore('dataStore', () => {
  const documentation: Ref<TypeScriptDocs> = ref(docs)

  return {
    documentation,
  }
})
