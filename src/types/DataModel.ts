type Level = 'basic' | 'advanced' | 'expert'

export type CardItem = {
  parentName: string
  name: string
  code: string
  description: string
}

export type SearchItem = {
  topicName: string
  subtopics: [
    {
      subTopicName: string
      tags: string[]
    },
  ]
}

export type SearchResultItem = {
  index?: number,
  parent: string,
  name: string,
  path: string,
}

export type SearchResultItems = {
  type: "Topics" | "SubTopics",
  items: SearchResultItem[]
}[]

export type Example = {
  title?: string
  description?: string
  code: string
}

export type TopicTree = {
  key: string
  label: string
  children?: TopicTree[]
}

export type SubTopic = {
  name: string
  tags: string[]
  description: string
  level: Level
  examples: Example[]
}

export type Topic = {
  name: string
  description: string
  level: Level
  subTopics: SubTopic[]
  code: string
}
export type TypeScriptDocs = {
  utilityTypes: Topic
  decorators: Topic
  declarationMerging: Topic
  enums: Topic
  iteratorsAndGenerators: Topic
  jsx: Topic
  mixins: Topic
  namespaces: Topic
  namespacesAndModules: Topic
  symbols: Topic
  tripeSlashDirectives: Topic
  typeCompatibility: Topic
  typeInference: Topic
  variableDeclaration: Topic
  narrowing: Topic
  functions: Topic
  objectTypes: Topic
  typesFromTypes: Topic
  generics: Topic
  keyofTypeOperator: Topic
  typeofTypeOperator: Topic
  indexedAccessTypes: Topic
  conditionalTypes: Topic
  mappedTypes: Topic
  templateLiteralTypes: Topic
  classes: Topic
  modules: Topic
  abn: Topic
}

export type TopicKey = keyof TypeScriptDocs
export type PartialTypeScriptDocs = Partial<TypeScriptDocs>
