type Level = 'basic' | 'advanced' | 'expert'

type Example = {
  title?: string
  description?: string
  code: string
}

type Topic = {
  name: string
  tags: string[]
  description: string
  level: Level
  examples: Example[]
}

type Subject = {
  name: string
  description: string
  level: Level
  topics: Topic[]
}
export type TypeScriptDocs = {
  version: string
  subjects: {
    utilityTypes: Subject
    decorators: Subject
    declarationMerging: Subject
    enums: Subject
    iteratorsAndGenerators: Subject
    jsx: Subject
    mixins: Subject
    namespaces: Subject
    namespacesAndModules: Subject
    symbols: Subject
    tripeSlashDirectives: Subject
    typeCompatibility: Subject
    typeInference: Subject
    variableDeclaration: Subject
    narrowing: Subject
    functions: Subject
    objectTypes: Subject
    typesFromTypes: Subject
    generics: Subject
    keyofTypeOperator: Subject
    typeofTypeOperator: Subject
    indexedAccessTypes: Subject
    conditionalTypes: Subject
    mappedTypes: Subject
    templateLiteralTypes: Subject
    classes: Subject
    modules: Subject
    abn: Subject
  }
}

export type SubjectKey = keyof TypeScriptDocs['subjects']
export type SubjectSummary = {
  name: string
  key: SubjectKey
  description: string
  level: string
  tags: string[]
  topics: string[]
}
