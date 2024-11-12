import type { TypeScriptDocs } from '@/types/DataModel'

export const docs: TypeScriptDocs = {
  declarationMerging: {
    name: 'Declaration Merging',
    description: 'Combining multiple declarations into a single definition.',
    level: 'advanced',
    code: 'interface Box { height: number; width: number; }\ninterface Box { scale: number; }\nlet box: Box = { height: 5, width: 6, scale: 10 };',
    subTopics: [
      {
        name: 'Interface Merging',
        tags: ['interfaces', 'typescript'],
        description:
          'Demonstrates how multiple interface declarations with the same name are merged into a single interface.',
        level: 'advanced',
        examples: [
          {
            title: 'Basic Interface Merging',
            description:
              'Two interfaces with the same name are combined into one.',
            code: "interface User { name: string; }\ninterface User { age: number; }\nlet user: User = { name: 'Alice', age: 30 };",
          },
        ],
      },
      {
        name: 'Module Augmentation',
        tags: ['modules', 'augmentation'],
        description:
          'Shows how to add new fields to existing modules using declaration merging.',
        level: 'advanced',
        examples: [
          {
            title: 'Extending Module Configurations',
            description:
              "Add new properties to a module's configuration interface.",
            code: "declare module 'my-module' { export interface Config { setting: boolean; } }\ndeclare module 'my-module' { export interface Config { version: string; } }\nimport { Config } from 'my-module';\nlet config: Config = { setting: true, version: '1.0.0' };",
          },
        ],
      },
      {
        name: 'Class Merging',
        tags: ['classes', 'typescript'],
        description:
          'Explains how classes can also participate in declaration merging to extend class definitions.',
        level: 'advanced',
        examples: [
          {
            title: 'Class and Interface Merging',
            description:
              'A class and an interface with the same name are merged to extend class behavior.',
            code: 'class Point { x: number; constructor(x: number) { this.x = x; } }\ninterface Point { y: number; }\nlet point: Point = { x: 10, y: 20 };',
          },
        ],
      },
    ],
  },
  jsx: {
    name: 'JSX',
    description:
      "TypeScript's support for JSX, a syntax extension for JavaScript.",
    level: 'advanced',
    code: '<div>Hello, world!</div>',
    subTopics: [
      {
        name: 'Basic JSX Usage',
        tags: ['jsx', 'typescript', 'react'],
        description:
          'Introduction to using JSX syntax in TypeScript with React.',
        level: 'basic',
        examples: [
          {
            title: 'Simple JSX Element',
            description: 'Creating a basic JSX element in a TypeScript file.',
            code: 'const element = <h1>Hello, world!</h1>;',
          },
        ],
      },
      {
        name: 'Type Checking in JSX',
        tags: ['jsx', 'typescript', 'type-checking'],
        description:
          'Explains how TypeScript performs type checking on JSX elements.',
        level: 'advanced',
        examples: [
          {
            title: 'JSX with Props Type Checking',
            description:
              'TypeScript checks the types of props passed to JSX components.',
            code: 'interface GreetingProps { name: string; }\nconst Greeting: React.FC<GreetingProps> = ({ name }) => <h1>Hello, {name}!</h1>;\n<Greeting name="Alice" />;',
          },
        ],
      },
      {
        name: 'JSX in TypeScript Projects',
        tags: ['jsx', 'typescript', 'project-setup'],
        description: 'Setting up a TypeScript project to support JSX.',
        level: 'advanced',
        examples: [
          {
            title: 'Configuring tsconfig.json for JSX',
            description:
              'Modify the TypeScript configuration to support JSX syntax.',
            code: '{\n  "compilerOptions": {\n    "jsx": "react",\n    "allowJs": true,\n    "checkJs": false\n  }\n}',
          },
        ],
      },
    ],
  },
  namespaces: {
    name: 'Namespaces',
    description: 'Organize and manage code within a TypeScript application.',
    level: 'basic',
    code: 'namespace MyNamespace {\n  export const greet = () => "Hello, world!";\n}\nconsole.log(MyNamespace.greet());',
    subTopics: [
      {
        name: 'Creating Namespaces',
        tags: ['namespaces', 'typescript'],
        description: 'Learn how to define and use namespaces in TypeScript.',
        level: 'basic',
        examples: [
          {
            title: 'Basic Namespace Declaration',
            description: 'Create a simple namespace to encapsulate code.',
            code: 'namespace Utilities {\n  export function log(message: string) {\n    console.log(message);\n  }\n}\nUtilities.log("Logging a message");',
          },
        ],
      },
      {
        name: 'Nested Namespaces',
        tags: ['namespaces', 'typescript', 'nested'],
        description: 'Explore how to nest namespaces within each other.',
        level: 'advanced',
        examples: [
          {
            title: 'Using Nested Namespaces',
            description: 'Define a namespace within another namespace.',
            code: 'namespace Outer {\n  export namespace Inner {\n    export const name = "InnerNamespace";\n  }\n}\nconsole.log(Outer.Inner.name);',
          },
        ],
      },
      {
        name: 'Merging Namespaces',
        tags: ['namespaces', 'typescript', 'merging'],
        description: 'Understand how to merge multiple namespace declarations.',
        level: 'expert',
        examples: [
          {
            title: 'Namespace Merging Example',
            description: 'Merge two namespace declarations into one.',
            code: 'namespace Shapes {\n  export function square(x: number) { return x * x; }\n}\nnamespace Shapes {\n  export function circle(r: number) { return Math.PI * r * r; }\n}\nconsole.log(Shapes.square(2), Shapes.circle(3));',
          },
        ],
      },
    ],
  },
  namespacesAndModules: {
    name: 'Namespaces and Modules',
    description:
      'Understand the differences and use cases of namespaces and modules.',
    level: 'basic',
    code: '',
    subTopics: [
      {
        name: 'Namespaces vs. Modules',
        tags: ['namespaces', 'modules', 'typescript'],
        description:
          'Learn the key differences between namespaces and modules in TypeScript.',
        level: 'basic',
        examples: [
          {
            title: 'Basic Comparison',
            description:
              'A simple example illustrating the difference between namespaces and modules.',
            code: '// Namespace example\nnamespace Utilities {\n  export function log(message: string) {\n    console.log(message);\n  }\n}\nUtilities.log("Namespace logging");\n\n// Module example\n// utilities.ts\nexport function log(message: string) {\n  console.log(message);\n}\n// usage in another file\n// import { log } from "./utilities";\n// log("Module logging");',
          },
        ],
      },
      {
        name: 'When to Use Namespaces',
        tags: ['namespaces', 'typescript'],
        description: 'Understand scenarios where namespaces are beneficial.',
        level: 'basic',
        examples: [
          {
            title: 'Using Namespaces for Internal Modules',
            description:
              'Namespaces are ideal for organizing code in internal libraries.',
            code: 'namespace InternalLibrary {\n  export function internalFunction() {\n    console.log("Internal function");\n  }\n}\nInternalLibrary.internalFunction();',
          },
        ],
      },
      {
        name: 'When to Use Modules',
        tags: ['modules', 'typescript'],
        description: 'Learn when modules are preferred over namespaces.',
        level: 'basic',
        examples: [
          {
            title: 'Modules for External Libraries',
            description:
              'Modules are used for creating and consuming external libraries.',
            code: '// math.ts\nexport function add(x: number, y: number): number {\n  return x + y;\n}\n// usage in another file\n// import { add } from "./math";\n// console.log(add(2, 3));',
          },
        ],
      },
    ],
  },
  symbols: {
    name: 'Symbols',
    description: 'A primitive data type for unique identifiers.',
    level: 'advanced',
    code: 'const uniqueSymbol = Symbol("unique");',
    subTopics: [
      {
        name: 'Creating Symbols',
        tags: ['symbols', 'unique identifiers', 'typescript'],
        description:
          'Learn how to create and use symbols as unique identifiers.',
        level: 'basic',
        examples: [
          {
            title: 'Basic Symbol Creation',
            description: 'Create a new symbol using the Symbol function.',
            code: 'const mySymbol = Symbol("description");\nconsole.log(typeof mySymbol); // "symbol"',
          },
        ],
      },
      {
        name: 'Symbols as Object Keys',
        tags: ['symbols', 'object keys', 'typescript'],
        description:
          'Use symbols as keys in objects for unique property identifiers.',
        level: 'advanced',
        examples: [
          {
            title: 'Using Symbols for Object Properties',
            description:
              'Demonstrates how symbols can be used as object property keys.',
            code: 'const symKey = Symbol("key");\nconst obj = { [symKey]: "value" };\nconsole.log(obj[symKey]); // "value"',
          },
        ],
      },
      {
        name: 'Global Symbols',
        tags: ['symbols', 'global registry', 'typescript'],
        description:
          'Understand how to use the global symbol registry for shared symbols.',
        level: 'advanced',
        examples: [
          {
            title: 'Shared Symbols with Symbol.for',
            description:
              'Use Symbol.for to create or retrieve symbols from the global registry.',
            code: 'const globalSym = Symbol.for("shared");\nconst sameGlobalSym = Symbol.for("shared");\nconsole.log(globalSym === sameGlobalSym); // true',
          },
        ],
      },
      {
        name: 'Well-Known Symbols',
        tags: ['symbols', 'well-known symbols', 'typescript'],
        description:
          'Explore well-known symbols that are built into JavaScript.',
        level: 'expert',
        examples: [
          {
            title: 'Using Well-Known Symbols',
            description:
              'Example of using Symbol.iterator to make an object iterable.',
            code: 'const iterableObj = {\n  [Symbol.iterator]: function* () {\n    yield 1;\n    yield 2;\n    yield 3;\n  }\n};\nfor (const value of iterableObj) {\n  console.log(value); // 1, 2, 3\n}',
          },
        ],
      },
    ],
  },
  tripeSlashDirectives: {
    name: 'Triple-Slash Directives',
    description: 'Special comments for compiler directives.',
    level: 'basic',
    code: '/// <reference path="..." />',
    subTopics: [
      {
        name: 'Reference Directives',
        tags: ['triple-slash', 'typescript', 'reference'],
        description:
          'Learn how to use triple-slash reference directives to include files.',
        level: 'basic',
        examples: [
          {
            title: 'Basic Reference Directive',
            description:
              'Use a triple-slash directive to include a reference to another file.',
            code: '/// <reference path="helper.ts" />\nconsole.log("This file references helper.ts");',
          },
        ],
      },
      {
        name: 'Types Reference Directive',
        tags: ['triple-slash', 'typescript', 'types'],
        description:
          'Use types reference directive to include declaration files.',
        level: 'basic',
        examples: [
          {
            title: 'Including Type Declarations',
            description:
              'Include type declarations from DefinitelyTyped packages.',
            code: '/// <reference types="node" />\nimport * as fs from "fs";\nconsole.log("Node.js types included");',
          },
        ],
      },
      {
        name: 'No-Default-Lib Directive',
        tags: ['triple-slash', 'typescript', 'no-default-lib'],
        description: 'Exclude the default library files from the compilation.',
        level: 'advanced',
        examples: [
          {
            title: 'Excluding Default Libraries',
            description:
              'Use the no-default-lib directive to exclude default libraries.',
            code: '/// <reference no-default-lib="true"/>\nconsole.log("Default libraries excluded");',
          },
        ],
      },
    ],
  },
  typeCompatibility: {
    name: 'Type Compatibility',
    description: 'Determines if one type is assignable to another.',
    level: 'advanced',
    code: '',
    subTopics: [
      {
        name: 'Structural Typing',
        tags: ['type compatibility', 'typescript', 'structural typing'],
        description:
          'Understand how TypeScript uses structural typing to determine compatibility.',
        level: 'advanced',
        examples: [
          {
            title: 'Basic Structural Typing',
            description:
              'Illustrates how objects with the same shape are compatible.',
            code: 'interface Point { x: number; y: number; }\nlet p: Point = { x: 10, y: 20 };\nlet q = { x: 10, y: 20, z: 30 };\np = q; // OK, because q has at least x and y',
          },
        ],
      },
      {
        name: 'Function Compatibility',
        tags: ['type compatibility', 'typescript', 'functions'],
        description:
          'How functions are compared based on their parameter and return types.',
        level: 'advanced',
        examples: [
          {
            title: 'Function Parameter Compatibility',
            description:
              'Examples of how function parameters affect compatibility.',
            code: 'let func1 = (a: number) => a;\nlet func2 = (b: number, c: string) => b;\nfunc1 = func2; // Error: func2 has more parameters\nfunc2 = func1; // OK: func1 can be called with fewer parameters',
          },
        ],
      },
      {
        name: 'Enum Compatibility',
        tags: ['type compatibility', 'typescript', 'enums'],
        description:
          'Understand how enum types are compatible with numeric values.',
        level: 'basic',
        examples: [
          {
            title: 'Enum and Number Compatibility',
            description: 'Shows compatibility between enums and numbers.',
            code: 'enum Status { Ready, Waiting };\nlet num: number = Status.Ready;\nlet status: Status = 1; // OK, because enums are compatible with numbers',
          },
        ],
      },
      {
        name: 'Class Compatibility',
        tags: ['type compatibility', 'typescript', 'classes'],
        description:
          'Explains how classes are compatible based on their structure.',
        level: 'advanced',
        examples: [
          {
            title: 'Class Structural Compatibility',
            description:
              'Two classes are compatible if they have the same members.',
            code: 'class Animal {\n  feet: number;\n  constructor(name: string, numFeet: number) {\n    this.feet = numFeet;\n  }\n}\nclass Size {\n  feet: number;\n  constructor(numFeet: number) {\n    this.feet = numFeet;\n  }\n}\nlet a: Animal = new Size(4); // OK, because Size has at least feet',
          },
        ],
      },
    ],
  },
  variableDeclaration: {
    name: 'Variable Declaration',
    description: 'Syntax and rules for declaring variables in TypeScript.',
    level: 'basic',
    code: '',
    subTopics: [
      {
        name: 'let and const',
        tags: ['variable declaration', 'typescript', 'let', 'const'],
        description:
          'Learn the differences between let and const for variable declarations.',
        level: 'basic',
        examples: [
          {
            title: 'Using let and const',
            description: 'Examples of declaring variables using let and const.',
            code: 'let count = 0;\ncount = 1; // OK\nconst name = "Alice";\n// name = "Bob"; // Error: Assignment to constant variable.',
          },
        ],
      },
      {
        name: 'Type Annotations',
        tags: ['variable declaration', 'typescript', 'type annotations'],
        description: 'Specify types for variables using type annotations.',
        level: 'basic',
        examples: [
          {
            title: 'Declaring Variables with Type Annotations',
            description: 'Add type annotations to variable declarations.',
            code: 'let isDone: boolean = false;\nlet age: number = 25;\nlet username: string = "Alice";',
          },
        ],
      },
      {
        name: 'Variable Scope',
        tags: ['variable declaration', 'typescript', 'scope'],
        description: 'Understand the scoping rules for var, let, and const.',
        level: 'advanced',
        examples: [
          {
            title: 'Scoping with var, let, and const',
            description: 'Differences in scoping with var, let, and const.',
            code: 'if (true) {\n  var x = 10;\n  let y = 20;\n  const z = 30;\n}\nconsole.log(x); // 10\n// console.log(y); // Error: y is not defined\n// console.log(z); // Error: z is not defined',
          },
        ],
      },
      {
        name: 'Destructuring Assignment',
        tags: ['variable declaration', 'typescript', 'destructuring'],
        description:
          'Use destructuring to extract values from arrays and objects.',
        level: 'advanced',
        examples: [
          {
            title: 'Array and Object Destructuring',
            description: 'Examples of destructuring arrays and objects.',
            code: 'let [a, b] = [1, 2];\nconsole.log(a, b); // 1, 2\nlet { name, age } = { name: "Alice", age: 25 };\nconsole.log(name, age); // Alice, 25',
          },
        ],
      },
    ],
  },
  narrowing: {
    name: 'Type Narrowing',
    description: 'Refine types through control flow analysis.',
    level: 'basic',
    code: '',
    subTopics: [
      {
        name: 'Type Guards',
        tags: ['type narrowing', 'typescript', 'type guards'],
        description: 'Use type guards to narrow types in TypeScript.',
        level: 'basic',
        examples: [
          {
            title: 'Using typeof for Type Guards',
            description: 'Narrow types using the typeof operator.',
            code: 'function printId(id: string | number) {\n  if (typeof id === "string") {\n    console.log("String ID:", id.toUpperCase());\n  } else {\n    console.log("Number ID:", id.toFixed(2));\n  }\n}',
          },
        ],
      },
      {
        name: 'Instanceof Type Guard',
        tags: ['type narrowing', 'typescript', 'instanceof'],
        description: 'Use instanceof to narrow down object types.',
        level: 'basic',
        examples: [
          {
            title: 'Using instanceof for Type Guards',
            description: 'Narrow types using the instanceof operator.',
            code: 'class Cat { meow() {} }\nclass Dog { bark() {} }\nfunction makeNoise(animal: Cat | Dog) {\n  if (animal instanceof Cat) {\n    animal.meow();\n  } else {\n    animal.bark();\n  }\n}',
          },
        ],
      },
      {
        name: 'In Operator',
        tags: ['type narrowing', 'typescript', 'in operator'],
        description: 'Use the in operator to check for properties in objects.',
        level: 'advanced',
        examples: [
          {
            title: 'Using in for Type Guards',
            description:
              'Narrow types by checking for the existence of a property.',
            code: 'type Fish = { swim: () => void };\ntype Bird = { fly: () => void };\nfunction move(animal: Fish | Bird) {\n  if ("swim" in animal) {\n    animal.swim();\n  } else {\n    animal.fly();\n  }\n}',
          },
        ],
      },
      {
        name: 'Control Flow Analysis',
        tags: ['type narrowing', 'typescript', 'control flow'],
        description:
          'Understand how TypeScript uses control flow analysis to narrow types.',
        level: 'advanced',
        examples: [
          {
            title: 'Control Flow Based Type Narrowing',
            description:
              'TypeScript automatically narrows types based on control flow.',
            code: 'function example(x: string | null) {\n  if (x === null) {\n    console.log("x is null");\n  } else {\n    console.log("x is a string:", x);\n  }\n}',
          },
        ],
      },
    ],
  },
  objectTypes: {
    name: 'Object Types',
    description: 'Defining and working with complex object structures.',
    level: 'basic',
    code: '',
    subTopics: [
      {
        name: 'Defining Object Types',
        tags: ['object types', 'typescript', 'interfaces'],
        description: 'Learn how to define object types using interfaces.',
        level: 'basic',
        examples: [
          {
            title: 'Basic Interface Definition',
            description:
              'Create an interface to define the shape of an object.',
            code: 'interface Person {\n  name: string;\n  age: number;\n}\nconst person: Person = {\n  name: "Alice",\n  age: 30\n};',
          },
        ],
      },
      {
        name: 'Optional Properties',
        tags: ['object types', 'typescript', 'optional properties'],
        description: 'Define object types with optional properties.',
        level: 'basic',
        examples: [
          {
            title: 'Using Optional Properties in Interfaces',
            description:
              'Specify optional properties in an interface using the ? operator.',
            code: 'interface Car {\n  make: string;\n  model: string;\n  year?: number;\n}\nconst car: Car = {\n  make: "Toyota",\n  model: "Corolla"\n};',
          },
        ],
      },
      {
        name: 'Index Signatures',
        tags: ['object types', 'typescript', 'index signatures'],
        description:
          'Use index signatures to define objects with flexible property names.',
        level: 'advanced',
        examples: [
          {
            title: 'Defining Index Signatures',
            description:
              'Create an object type with dynamic property names using an index signature.',
            code: 'interface StringDictionary {\n  [key: string]: string;\n}\nconst dictionary: StringDictionary = {\n  hello: "world",\n  goodbye: "everyone"\n};',
          },
        ],
      },
      {
        name: 'Nested Object Types',
        tags: ['object types', 'typescript', 'nested objects'],
        description: 'Define complex object types with nested structures.',
        level: 'advanced',
        examples: [
          {
            title: 'Nested Object Type Example',
            description: 'Create an interface with nested object properties.',
            code: 'interface Address {\n  street: string;\n  city: string;\n}\ninterface User {\n  name: string;\n  address: Address;\n}\nconst user: User = {\n  name: "Alice",\n  address: {\n    street: "123 Main St",\n    city: "Wonderland"\n  }\n};',
          },
        ],
      },
    ],
  },
  typesFromTypes: {
    name: 'Types from Types',
    description: 'Derive new types from existing types.',
    level: 'advanced',
    code: '',
    subTopics: [
      {
        name: 'Type Aliases',
        tags: ['types from types', 'typescript', 'type aliases'],
        description:
          'Create type aliases to simplify complex type definitions.',
        level: 'basic',
        examples: [
          {
            title: 'Defining a Type Alias',
            description:
              'Use a type alias to create a simpler name for a type.',
            code: 'type Point = { x: number; y: number; };\nconst point: Point = { x: 10, y: 20 };',
          },
        ],
      },
      {
        name: 'Union Types',
        tags: ['types from types', 'typescript', 'union types'],
        description: 'Combine multiple types into a single union type.',
        level: 'advanced',
        examples: [
          {
            title: 'Creating Union Types',
            description:
              'Define a type that can be one of several types using unions.',
            code: 'type Status = "success" | "error" | "loading";\nfunction handleStatus(status: Status) {\n  if (status === "success") {\n    console.log("Operation successful");\n  }\n}',
          },
        ],
      },
      {
        name: 'Intersection Types',
        tags: ['types from types', 'typescript', 'intersection types'],
        description:
          'Combine multiple types into one using intersection types.',
        level: 'advanced',
        examples: [
          {
            title: 'Defining Intersection Types',
            description:
              'Use intersection types to create a type that has all properties of multiple types.',
            code: 'type Draggable = { drag: () => void; };\ntype Resizable = { resize: () => void; };\ntype UIElement = Draggable & Resizable;\nconst element: UIElement = {\n  drag: () => console.log("Drag"),\n  resize: () => console.log("Resize")\n};',
          },
        ],
      },
      {
        name: 'Mapped Types',
        tags: ['types from types', 'typescript', 'mapped types'],
        description:
          'Create new types by transforming properties of existing types.',
        level: 'expert',
        examples: [
          {
            title: 'Creating Mapped Types',
            description:
              'Use mapped types to transform each property in a type.',
            code: 'type ReadOnly<T> = {\n  readonly [P in keyof T]: T[P];\n};\ninterface Person {\n  name: string;\n  age: number;\n}\nconst readonlyPerson: ReadOnly<Person> = {\n  name: "Alice",\n  age: 30\n};\n// readonlyPerson.name = "Bob"; // Error: Cannot assign to \'name\' because it is a read-only property.',
          },
        ],
      },
    ],
  },
  keyofTypeOperator: {
    name: 'Keyof Type Operator',
    description: 'Retrieve keys of a given type as a union.',
    level: 'advanced',
    code: '',
    subTopics: [
      {
        name: 'Basic Usage of Keyof',
        tags: ['keyof', 'typescript', 'type operator'],
        description:
          'Learn how to use the keyof operator to get keys of an object type.',
        level: 'basic',
        examples: [
          {
            title: 'Using Keyof with Interfaces',
            description:
              'Retrieve keys of an interface using the keyof operator.',
            code: 'interface User {\n  id: number;\n  name: string;\n  age: number;\n}\ntype UserKeys = keyof User; // "id" | "name" | "age"',
          },
        ],
      },
      {
        name: 'Keyof with Index Signatures',
        tags: ['keyof', 'typescript', 'index signatures'],
        description:
          'Understand how keyof interacts with index signatures in types.',
        level: 'advanced',
        examples: [
          {
            title: 'Keyof and Index Signatures',
            description: 'Using keyof with a type that has an index signature.',
            code: 'type Dictionary = { [key: string]: string };\ntype DictionaryKeys = keyof Dictionary; // string or number',
          },
        ],
      },
      {
        name: 'Keyof in Generic Constraints',
        tags: ['keyof', 'typescript', 'generic constraints'],
        description:
          'Use keyof in generic type constraints to enforce certain keys.',
        level: 'advanced',
        examples: [
          {
            title: 'Generic Function with Keyof Constraint',
            description:
              'Create a generic function that uses keyof for type constraints.',
            code: 'function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {\n  return obj[key];\n}\nconst user = { id: 1, name: "Alice" };\nconst userName = getProperty(user, "name"); // OK',
          },
        ],
      },
      {
        name: 'Combining Keyof with Mapped Types',
        tags: ['keyof', 'typescript', 'mapped types'],
        description:
          'Combine keyof with mapped types to create advanced type transformations.',
        level: 'expert',
        examples: [
          {
            title: 'Creating a Mapped Type with Keyof',
            description:
              'Use keyof in combination with mapped types to transform object types.',
            code: 'type Partial<T> = {\n  [P in keyof T]?: T[P];\n};\ninterface Product {\n  name: string;\n  price: number;\n}\ntype PartialProduct = Partial<Product>; // { name?: string; price?: number; }',
          },
        ],
      },
    ],
  },
  typeofTypeOperator: {
    name: 'Typeof Type Operator',
    description: 'Obtain the type of a value at runtime.',
    level: 'advanced',
    code: '',
    subTopics: [
      {
        name: 'Basic Usage of Typeof',
        tags: ['typeof', 'typescript', 'type operator'],
        description:
          'Learn how to use the typeof operator to get the type of a variable.',
        level: 'basic',
        examples: [
          {
            title: 'Using Typeof with Variables',
            description:
              'Use typeof to capture the type of a variable for later use.',
            code: 'let count = 10;\ntype CountType = typeof count; // number\nconst increment: CountType = 1;',
          },
        ],
      },
      {
        name: 'Typeof with Functions',
        tags: ['typeof', 'typescript', 'functions'],
        description: 'Use typeof to obtain the type of a function.',
        level: 'advanced',
        examples: [
          {
            title: 'Getting Function Types with Typeof',
            description: 'Capture the type of a function using typeof.',
            code: 'function greet(name: string): string {\n  return `Hello, ${name}`;\n}\ntype GreetType = typeof greet;\nconst greetUser: GreetType = (name) => `Hi, ${name}`;',
          },
        ],
      },
      {
        name: 'Combining Typeof with Keyof',
        tags: ['typeof', 'typescript', 'keyof'],
        description:
          'Use typeof in combination with keyof to dynamically access types.',
        level: 'advanced',
        examples: [
          {
            title: 'Using Typeof and Keyof Together',
            description:
              'Combine typeof and keyof to create flexible type definitions.',
            code: 'const user = {\n  id: 1,\n  name: "Alice",\n  age: 30\n};\ntype UserKeys = keyof typeof user; // "id" | "name" | "age"',
          },
        ],
      },
      {
        name: 'Typeof in Contextual Typing',
        tags: ['typeof', 'typescript', 'contextual typing'],
        description: 'Leverage typeof for contextual typing scenarios.',
        level: 'expert',
        examples: [
          {
            title: 'Using Typeof for Contextual Typing',
            description:
              'Apply typeof in contexts where inferred types are used.',
            code: 'const settings = {\n  theme: "dark",\n  layout: "grid"\n};\ntype Settings = typeof settings;\nconst newSettings: Settings = {\n  theme: "light",\n  layout: "list"\n};',
          },
        ],
      },
    ],
  },
  indexedAccessTypes: {
    name: 'Indexed Access Types',
    description: 'Access the type of a property by key.',
    level: 'advanced',
    code: '',
    subTopics: [
      {
        name: 'Basic Usage of Indexed Access Types',
        tags: ['indexed access', 'typescript', 'type operator'],
        description:
          'Learn how to access a property type using indexed access types.',
        level: 'basic',
        examples: [
          {
            title: 'Accessing Property Types',
            description:
              'Use indexed access types to get the type of a specific property.',
            code: 'interface User {\n  id: number;\n  name: string;\n  age: number;\n}\ntype UserNameType = User["name"]; // string',
          },
        ],
      },
      {
        name: 'Nested Indexed Access Types',
        tags: ['indexed access', 'typescript', 'nested types'],
        description:
          'Access types of nested properties using indexed access types.',
        level: 'advanced',
        examples: [
          {
            title: 'Accessing Nested Property Types',
            description:
              'Use indexed access types to get the type of a nested property.',
            code: 'interface Product {\n  details: {\n    manufacturer: string;\n    warranty: boolean;\n  };\n}\ntype ManufacturerType = Product["details"]["manufacturer"]; // string',
          },
        ],
      },
      {
        name: 'Using Indexed Access in Generics',
        tags: ['indexed access', 'typescript', 'generics'],
        description:
          'Utilize indexed access types within generic type definitions.',
        level: 'expert',
        examples: [
          {
            title: 'Generic Function with Indexed Access Types',
            description:
              'Create a generic function using indexed access types.',
            code: 'function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {\n  return obj[key];\n}\nconst user = { id: 1, name: "Alice" };\nconst userName = getProperty(user, "name"); // "Alice"',
          },
        ],
      },
      {
        name: 'Combining Indexed Access with Mapped Types',
        tags: ['indexed access', 'typescript', 'mapped types'],
        description:
          'Combine indexed access types with mapped types for advanced type transformations.',
        level: 'expert',
        examples: [
          {
            title: 'Using Indexed Access in Mapped Types',
            description: 'Leverage indexed access types within mapped types.',
            code: 'type User = {\n  id: number;\n  name: string;\n};\ntype ReadOnly<T> = {\n  readonly [P in keyof T]: T[P];\n};\ntype ReadOnlyUser = ReadOnly<User>; // { readonly id: number; readonly name: string; }',
          },
        ],
      },
    ],
  },
  conditionalTypes: {
    name: 'Conditional Types',
    description:
      'Types that choose one of two possible types based on a condition.',
    level: 'expert',
    code: '',
    subTopics: [
      {
        name: 'Basic Conditional Types',
        tags: ['conditional types', 'typescript', 'type operator'],
        description:
          'Learn the syntax and basic usage of conditional types in TypeScript.',
        level: 'advanced',
        examples: [
          {
            title: 'Simple Conditional Type',
            description: 'Define a type that resolves based on a condition.',
            code: 'type IsString<T> = T extends string ? "Yes" : "No";\ntype Result = IsString<"Hello">; // "Yes"',
          },
        ],
      },
      {
        name: 'Inferring Types with Conditional Types',
        tags: ['conditional types', 'typescript', 'infer'],
        description:
          'Use conditional types to infer types in complex scenarios.',
        level: 'expert',
        examples: [
          {
            title: 'Inferring Type with Conditional Types',
            description:
              'Example of using infer keyword within a conditional type.',
            code: 'type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : never;\nfunction foo() { return 42; }\ntype ReturnTypeOfFoo = GetReturnType<typeof foo>; // number',
          },
        ],
      },
      {
        name: 'Distributive Conditional Types',
        tags: ['conditional types', 'typescript', 'distributive'],
        description:
          'Understand how conditional types distribute over union types.',
        level: 'expert',
        examples: [
          {
            title: 'Distributive Conditional Type Example',
            description:
              'Illustrates how conditional types apply to each member of a union.',
            code: 'type ToArray<T> = T extends any ? T[] : never;\ntype StrArrOrNumArr = ToArray<string | number>; // string[] | number[]',
          },
        ],
      },
      {
        name: 'Conditional Types with Mapped Types',
        tags: ['conditional types', 'typescript', 'mapped types'],
        description:
          'Combine conditional types with mapped types for advanced type mapping.',
        level: 'expert',
        examples: [
          {
            title: 'Using Conditional Types in Mapped Types',
            description: 'Apply conditional logic within a mapped type.',
            code: 'type NullableProperties<T> = {\n  [K in keyof T]: null extends T[K] ? K : never;\n}[keyof T];\ninterface User {\n  id: number;\n  name: string | null;\n  age: number | null;\n}\ntype NullableKeys = NullableProperties<User>; // "name" | "age"',
          },
        ],
      },
    ],
  },
  templateLiteralTypes: {
    name: 'Template Literal Types',
    description: 'Build types using template literal syntax.',
    level: 'expert',
    code: '',
    subTopics: [
      {
        name: 'Basic Template Literal Types',
        tags: ['template literal types', 'typescript', 'type syntax'],
        description:
          'Learn how to construct types using template literal syntax.',
        level: 'advanced',
        examples: [
          {
            title: 'Simple Template Literal Type',
            description:
              'Create a basic template literal type by combining string literals.',
            code: 'type Greeting = `Hello, ${string}`;\nlet greet: Greeting = "Hello, world"; // Valid',
          },
        ],
      },
      {
        name: 'Inferring Types with Template Literals',
        tags: ['template literal types', 'typescript', 'infer'],
        description:
          'Use template literal types to infer and manipulate string types.',
        level: 'expert',
        examples: [
          {
            title: 'Inferring Parts of a Template Literal',
            description:
              'Extract parts of a string type using template literals and inferring.',
            code: 'type ExtractName<T> = T extends `Hello, ${infer U}` ? U : never;\ntype Name = ExtractName<"Hello, Alice">; // "Alice"',
          },
        ],
      },
      {
        name: 'Combining with Union and Intersection Types',
        tags: ['template literal types', 'typescript', 'union', 'intersection'],
        description:
          'Combine template literal types with union and intersection types for complex type definitions.',
        level: 'expert',
        examples: [
          {
            title: 'Union and Intersection with Template Literals',
            description:
              'Create complex types by combining template literals with unions and intersections.',
            code: 'type Color = "red" | "green" | "blue";\ntype Brightness = "light" | "dark";\ntype ColorTheme = `${Brightness}-${Color}`;\nlet theme: ColorTheme = "light-red"; // Valid',
          },
        ],
      },
      {
        name: 'Using Template Literals in Mapped Types',
        tags: ['template literal types', 'typescript', 'mapped types'],
        description:
          'Leverage template literal types within mapped types for dynamic key creation.',
        level: 'expert',
        examples: [
          {
            title: 'Dynamic Keys with Template Literals in Mapped Types',
            description:
              'Use template literals to dynamically create keys in a mapped type.',
            code: 'type Person = {\n  name: string;\n  age: number;\n};\ntype PersonActions = {\n  [K in keyof Person as `set${Capitalize<string & K>}`]: (value: Person[K]) => void;\n};\n// Results in: { setName: (value: string) => void; setAge: (value: number) => void; }',
          },
        ],
      },
    ],
  },
  classes: {
    name: 'Classes',
    description: 'Define blueprints for creating objects.',
    level: 'basic',
    code: '',
    subTopics: [
      {
        name: 'Class Declaration',
        tags: ['classes', 'typescript', 'declaration'],
        description: 'Learn how to declare a class in TypeScript.',
        level: 'basic',
        examples: [
          {
            title: 'Basic Class Declaration',
            description: 'Create a simple class with properties and methods.',
            code: 'class Animal {\n  name: string;\n  constructor(name: string) {\n    this.name = name;\n  }\n  move(distance: number) {\n    console.log(`${this.name} moved ${distance} meters.`);\n  }\n}\nconst cat = new Animal("Cat");\ncat.move(10);',
          },
        ],
      },
      {
        name: 'Inheritance',
        tags: ['classes', 'typescript', 'inheritance'],
        description: 'Understand how to extend classes using inheritance.',
        level: 'advanced',
        examples: [
          {
            title: 'Class Inheritance',
            description: 'Create a subclass that inherits from a parent class.',
            code: 'class Bird extends Animal {\n  fly(distance: number) {\n    console.log(`${this.name} flew ${distance} meters.`);\n  }\n}\nconst sparrow = new Bird("Sparrow");\nsparrow.move(5);\nsparrow.fly(15);',
          },
        ],
      },
      {
        name: 'Access Modifiers',
        tags: ['classes', 'typescript', 'access modifiers'],
        description:
          'Learn about public, private, and protected access modifiers in classes.',
        level: 'advanced',
        examples: [
          {
            title: 'Using Access Modifiers',
            description:
              'Control access to properties and methods using access modifiers.',
            code: 'class Person {\n  public name: string;\n  private age: number;\n  protected gender: string;\n  constructor(name: string, age: number, gender: string) {\n    this.name = name;\n    this.age = age;\n    this.gender = gender;\n  }\n}\nconst john = new Person("John", 30, "male");\nconsole.log(john.name); // Accessible\n// console.log(john.age); // Error: Property \'age\' is private\n// console.log(john.gender); // Error: Property \'gender\' is protected',
          },
        ],
      },
      {
        name: 'Abstract Classes and Methods',
        tags: ['classes', 'typescript', 'abstract'],
        description:
          'Define classes and methods as abstract to create base classes.',
        level: 'expert',
        examples: [
          {
            title: 'Abstract Class Example',
            description:
              'Use abstract classes and methods to define a blueprint for subclasses.',
            code: 'abstract class Shape {\n  abstract area(): number;\n}\nclass Circle extends Shape {\n  constructor(private radius: number) {\n    super();\n  }\n  area(): number {\n    return Math.PI * this.radius * this.radius;\n  }\n}\nconst circle = new Circle(5);\nconsole.log(circle.area());',
          },
        ],
      },
    ],
  },
  modules: {
    name: 'Modules',
    description: 'Reusable pieces of code in TypeScript.',
    level: 'basic',
    code: '',
    subTopics: [
      {
        name: 'Exporting and Importing',
        tags: ['modules', 'typescript', 'export', 'import'],
        description: 'Learn how to export and import modules in TypeScript.',
        level: 'basic',
        examples: [
          {
            title: 'Basic Export and Import',
            description:
              'Export a function from one file and import it in another.',
            code: '// math.ts\nexport function add(a: number, b: number): number {\n  return a + b;\n}\n\n// main.ts\nimport { add } from "./math";\nconsole.log(add(2, 3)); // Output: 5',
          },
        ],
      },
      {
        name: 'Default Exports',
        tags: ['modules', 'typescript', 'default export'],
        description:
          'Understand how to use default exports in TypeScript modules.',
        level: 'basic',
        examples: [
          {
            title: 'Using Default Export',
            description:
              'Export a single entity as the default export from a module.',
            code: '// logger.ts\ndefault export function log(message: string): void {\n  console.log(message);\n}\n\n// app.ts\nimport log from "./logger";\nlog("Hello, world!");',
          },
        ],
      },
      {
        name: 'Re-exporting',
        tags: ['modules', 'typescript', 're-export'],
        description: 'Learn how to re-export entities from other modules.',
        level: 'advanced',
        examples: [
          {
            title: 'Re-exporting from a Module',
            description: 'Re-export functions or objects from another module.',
            code: '// utilities.ts\nexport { add } from "./math";\n\n// main.ts\nimport { add } from "./utilities";\nconsole.log(add(2, 3));',
          },
        ],
      },
      {
        name: 'Module Resolution',
        tags: ['modules', 'typescript', 'module resolution'],
        description: 'Understand how TypeScript resolves module paths.',
        level: 'expert',
        examples: [
          {
            title: 'Configuring Module Resolution',
            description:
              'Set up TypeScript to resolve modules using different strategies.',
            code: '// tsconfig.json\n{\n  "compilerOptions": {\n    "baseUrl": "./",\n    "paths": {\n      "*": ["node_modules/*", "src/types/*"]\n    }\n  }\n}',
          },
        ],
      },
    ],
  },
  utilityTypes: {
    name: 'Utility Types',
    description: 'Predefined types to facilitate common type transformations.',
    level: 'advanced',
    code: '',
    subTopics: [
      {
        name: 'Partial<T>',
        tags: ['utility', 'generic'],
        description:
          'Constructs a type with all properties of T set to optional.',
        level: 'basic',
        examples: [
          {
            title: 'Basic Usage',
            description:
              'Use `Partial<T>` to make all properties of an interface optional.',
            code: `
interface User {
  id: number;
  name: string;
}

const partialUser: Partial<User> = { name: "Alice" }; // id is optional
              `,
          },
        ],
      },
      {
        name: 'Readonly<T>',
        tags: ['utility', 'generic'],
        description:
          'Constructs a type with all properties of T set to readonly.',
        level: 'basic',
        examples: [
          {
            title: 'Basic Usage',
            description:
              'Use `Readonly<T>` to make all properties of an interface readonly.',
            code: `
interface User {
  id: number;
  name: string;
}

const readonlyUser: Readonly<User> = { id: 1, name: "Alice" };
// readonlyUser.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.
              `,
          },
        ],
      },
      {
        name: 'Pick<T, K>',
        tags: ['utility', 'generic'],
        description:
          'Constructs a type by picking a set of properties K from T.',
        level: 'advanced',
        examples: [
          {
            title: 'Basic Usage',
            description:
              'Use `Pick<T, K>` to select a subset of properties from an interface.',
            code: `
interface User {
  id: number;
  name: string;
  age: number;
}

type UserPreview = Pick<User, 'id' | 'name'>;
const userPreview: UserPreview = { id: 1, name: "Alice" };
              `,
          },
        ],
      },
      {
        name: 'Record<K, T>',
        tags: ['utility', 'generic'],
        description: 'Constructs a type with a set of properties K of type T.',
        level: 'advanced',
        examples: [
          {
            title: 'Basic Usage',
            description:
              'Use `Record<K, T>` to create a type with specified keys and types.',
            code: `
type PageInfo = {
  title: string;
};

type Page = "home" | "about" | "contact";

const pageInfo: Record<Page, PageInfo> = {
  home: { title: "Home" },
  about: { title: "About" },
  contact: { title: "Contact" }
};
              `,
          },
        ],
      },
    ],
  },
  decorators: {
    name: 'Decorators',
    description:
      'Special kind of declaration used to modify classes and their members.',
    level: 'expert',
    code: '',
    subTopics: [
      {
        name: 'Class Decorators',
        tags: ['decorators', 'classes'],
        description: 'Decorators that apply to class declarations.',
        level: 'expert',
        examples: [
          {
            title: 'Logging Decorator',
            description: 'Log the instantiation of a class.',
            code: `
function LogClass(target: Function) {
  console.log("Class initialized: ", target.name);
}

@LogClass
class MyClass {}
              `,
          },
        ],
      },
    ],
  },
  enums: {
    name: 'Enums',
    description: 'Defines a set of named constants.',
    level: 'basic',
    code: '',
    subTopics: [
      {
        name: 'Numeric Enums',
        tags: ['enums', 'numeric'],
        description:
          'Enum values are auto-incremented numbers starting from 0.',
        level: 'basic',
        examples: [
          {
            title: 'Basic Numeric Enum',
            description: 'Defines a simple numeric enum.',
            code: `
enum Direction {
  Up,
  Down,
  Left,
  Right
}

let dir: Direction = Direction.Up;
              `,
          },
        ],
      },
    ],
  },
  // Continue with other subjects
  iteratorsAndGenerators: {
    name: 'Iterators and Generators',
    description: 'Provides patterns for iteration in TypeScript.',
    level: 'advanced',
    code: '',
    subTopics: [
      {
        name: 'Generators',
        tags: ['iterators', 'generators'],
        description: 'Functions that can yield multiple values.',
        level: 'advanced',
        examples: [
          {
            title: 'Simple Generator',
            description: 'Using a generator to yield values.',
            code: `
function* generatorFunction() {
  yield 1;
  yield 2;
  yield 3;
}

for (let value of generatorFunction()) {
  console.log(value); // 1, 2, 3
}
              `,
          },
        ],
      },
    ],
  },
  // Add other subjects here following the same pattern.
  mixins: {
    name: 'Mixins',
    description: 'Combine multiple classes into one.',
    level: 'expert',
    code: '',
    subTopics: [
      {
        name: 'Basic Mixins',
        tags: ['mixins', 'classes'],
        description: 'Use mixins to extend functionality.',
        level: 'advanced',
        examples: [
          {
            title: 'Mixin Example',
            description: 'Combining behaviors of multiple classes.',
            code: `
class CanWalk {
  walk() {
    console.log("Walking...");
  }
}

class CanSwim {
  swim() {
    console.log("Swimming...");
  }
}

class Person {}

interface Person extends CanWalk, CanSwim {}
Object.assign(Person.prototype, CanWalk.prototype, CanSwim.prototype);

const person = new Person();
person.walk();
person.swim();
              `,
          },
        ],
      },
    ],
  },
  abn: {
    name: 'Abn Amro specific',
    description: 'Abn Amro specific documentation for TypeScript',
    level: 'advanced',
    code: '',
    subTopics: [
      {
        name: "Add d.ts to Abn amro api's that have no types",
        description:
          "Not all api's have types, but no worries, we need to add them manually.",
        level: 'advanced',
        tags: ['typescript', 'abnamro', 'api', 'd.ts', 'manual'],
        examples: [],
      },
    ],
  },
  generics: {
    name: 'Generics',
    description:
      'Generic types enable you to write flexible, reusable functions and classes that work with multiple types while maintaining type safety.',
    level: 'advanced',
    code: '',
    subTopics: [
      {
        name: 'Generic Functions',
        description:
          'Functions that work over a range of types rather than a single one.',
        level: 'basic',
        tags: ['constraints', 'generics', 'functions'],
        examples: [
          {
            title: 'Basic Generic Function',
            description: 'A simple identity function that works with any type',
            code: `function identity<T>(arg: T): T {
                      return arg;
                    }

                    // Usage
                    let output1 = identity<string>("myString");
                    let output2 = identity(123); // Type inference works here`,
          },
          {
            title: 'Generic Constraints',
            description:
              'Limiting what types can be used with a generic function',
            code: `interface Lengthwise {
                      length: number;
                    }

                    function loggingIdentity<T extends Lengthwise>(arg: T): T {
                      console.log(arg.length);
                      return arg;
                    }

                    // Works with strings
                    loggingIdentity("hello");
                    // Error: numbers don't have a length property
                    // loggingIdentity(3);`,
          },
        ],
      },
      {
        name: 'Generic Interfaces',
        description: 'Interfaces that work with multiple types',
        level: 'advanced',
        tags: ['generics', 'interfaces'],
        examples: [
          {
            title: 'Generic Interface',
            code: `interface GenericIdentityFn<T> {
                      (arg: T): T;
                    }

                    let myIdentity: GenericIdentityFn<number> = identity;`,
          },
        ],
      },
    ],
  },
  mappedTypes: {
    name: 'Mapped Types',
    description:
      'A type created by transforming the properties of an existing type.',
    level: 'expert',
    code: '',
    subTopics: [
      {
        name: 'Basic Mapping',
        tags: ['types', 'mapped types', 'transformation'],
        description:
          'Creating new types by transforming each property in an existing type',
        level: 'advanced',
        examples: [
          {
            title: 'Readonly Mapped Type',
            description: 'Making all properties readonly',
            code: `type Readonly<T> = {
                      readonly [P in keyof T]: T[P];
                    };

                    interface MutableUser {
                      name: string;
                      age: number;
                    }

                    type ReadonlyUser = Readonly<MutableUser>;`,
          },
        ],
      },
    ],
  },
  functions: {
    name: 'Functions',
    description:
      'TypeScript functions with type annotations for parameters and return values.',
    level: 'basic',
    code: '',
    subTopics: [
      {
        name: 'Function Types',
        tags: ['functions', 'types', 'annotations', 'parameters', 'optional'],
        description: 'Ways to define function types in TypeScript',
        level: 'basic',
        examples: [
          {
            title: 'Function Type Expression',
            description: 'Basic function type syntax',
            code: `type GreetFunction = (name: string) => string;

                    const greet: GreetFunction = (name) => {
                      return \`Hello, \${name}!\`;
                    };`,
          },
          {
            title: 'Optional Parameters',
            description: 'Functions with optional parameters',
            code: `function buildName(firstName: string, lastName?: string) {
                      if (lastName) {
                        return \`\${firstName} \${lastName}\`;
                      }
                      return firstName;
                    }`,
          },
        ],
      },
      {
        name: 'Function Overloads',
        tags: ['functions', 'overloads'],
        description:
          'Multiple function types for different parameter combinations',
        level: 'advanced',
        examples: [
          {
            title: 'Function Overload',
            code: ` function makeDate(timestamp: number): Date;
                      function makeDate(year: number, month: number, day: number): Date;
                      function makeDate(yearOrTimestamp: number, month?: number, day?: number): Date {
                        if (month !== undefined && day !== undefined) {
                          return new Date(yearOrTimestamp, month - 1, day);
                        }
                        return new Date(yearOrTimestamp);
                      }`,
          },
        ],
      },
    ],
  },

  typeInference: {
    name: 'Type Inference',
    description:
      "TypeScript's ability to automatically determine types based on context.",
    level: 'basic',
    code: '',
    subTopics: [
      {
        name: 'Basic Inference',
        tags: ['type inference', 'basics', 'variables'],
        description: 'How TypeScript infers types in basic scenarios',
        level: 'basic',
        examples: [
          {
            title: 'Variable Inference',
            description: 'Type inference for variables',
            code: `let message = "hello"; // Type is string
let numbers = [1, 2, 3]; // Type is number[]
let mixed = [1, "hello"]; // Type is (string | number)[]`,
          },
        ],
      },
      {
        name: 'Contextual Typing',
        tags: ['type inference', 'context', 'event handling'],
        description: 'Type inference based on context',
        level: 'advanced',
        examples: [
          {
            title: 'Event Handler Example',
            code: `window.addEventListener("click", function(e) {
  // TypeScript knows 'e' is a MouseEvent
  console.log(e.button);
});`,
          },
        ],
      },
    ],
  },
}
