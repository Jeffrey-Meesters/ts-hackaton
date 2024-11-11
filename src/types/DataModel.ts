type Level = 'basic' | 'advanced' | 'expert'

type Example = {
  title?: string
  description?: string
  code: string
}

type SubTopic = {
  name: string
  tags: string[]
  description: string
  level: Level
  examples: Example[]
}

type Topic = {
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
