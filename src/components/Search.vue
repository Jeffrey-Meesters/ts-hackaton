<template>
  <div class="inline-block w-full relative">
    <span
      class="p-input-icon-left search-box rounded-full bg-white relative block"
    >
      <i class="pi pi-search absolute left-5 h-full content-center" />
      <AutoComplete
        ref="autoCompleteRef"
        size="large"
        variant="filled"
        class="custom-style"
        inputId="searchInputId"
        fluid
        v-model="query"
        :suggestions="searchResult"
        @complete="onInput"
        @item-select="selectTopic"
        optionLabel="name"
        optionGroupLabel="type"
        optionGroupChildren="items"
      >
        <template #optiongroup="slotProps">
          <div class="flex items-center">
            <div>{{ slotProps.option?.type }}</div>
          </div>
        </template>
      </AutoComplete>
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { docs } from '../data/docs'
import AutoComplete from 'primevue/autocomplete'
import type { SearchResultItem, SubTopic, SearchResultItems } from '@/types/DataModel'

const router = useRouter()
const autoCompleteRef = ref<InstanceType<typeof AutoComplete> | null>(null)
const query = ref<string>('')
const searchResult = ref<SearchResultItems>([])
const emit = defineEmits(['closeModal'])

const fetchSearchResultsbaseOnSubTopics = (
  subTopicList: SubTopic[],
  parent: string,
) => {
  if (subTopicList.length) {
    subTopicList.forEach((item, index) => {
      if (item.name.toLowerCase().includes(query.value.toLowerCase())) {
        searchResult.value[1].items.push({
          ...item,
          index,
          parent: parent,
          path: `/${parent}/${index}`,
        })
      }
    })
  }
}

const fetchSearchResultsbaseOnTopics = () => {
  Object.entries(docs).map(([key, value]) => {
    fetchSearchResultsbaseOnSubTopics(value.subTopics, key)
    if (value.name.toLowerCase().includes(query.value.toLowerCase())) {
      searchResult.value[0].items.push({
        ...value,
        parent: key,
        path: `/${key}`,
      })
    }
  })
  if (!searchResult.value[1].items.length) {
    searchResult.value.splice(1, 1)
  }
  if (!searchResult.value[0].items.length) {
    searchResult.value.splice(0, 1)
  }
}

const onInput = () => {
  if (query.value.length > 2) {
    searchResult.value = [
      {
        type: 'Topics',
        items: [],
      },
      {
        type: 'SubTopics',
        items: [],
      },
    ]
    fetchSearchResultsbaseOnTopics()
  }
}

const selectTopic = (event: { value: SearchResultItem }) => {
  query.value = ''
  setTimeout(() => {
    router.push(event.value.path)
    emit('closeModal')
  }, 100);
}

onMounted(() => {
  autoCompleteRef.value?.$el.querySelector('input').focus()
})
</script>

<style scoped>
.custom-style * {
  padding: 20px 20px 20px 50px;
  border: none;
  background-color: transparent !important;
  box-shadow: none;
}
.search-box {
  border: 1px solid gray;
}
</style>
