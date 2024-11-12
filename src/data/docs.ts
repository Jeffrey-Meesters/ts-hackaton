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
    subTopics: [],
  },
  variableDeclaration: {
    name: 'Variable Declaration',
    description: 'Syntax and rules for declaring variables in TypeScript.',
    level: 'basic',
    code: '',
    subTopics: [],
  },
  narrowing: {
    name: 'Type Narrowing',
    description: 'Refine types through control flow analysis.',
    level: 'basic',
    code: '',
    subTopics: [],
  },
  objectTypes: {
    name: 'Object Types',
    description: 'Defining and working with complex object structures.',
    level: 'basic',
    code: '',
    subTopics: [],
  },
  typesFromTypes: {
    name: 'Types from Types',
    description: 'Derive new types from existing types.',
    level: 'advanced',
    code: '',
    subTopics: [],
  },
  keyofTypeOperator: {
    name: 'Keyof Type Operator',
    description: 'Retrieve keys of a given type as a union.',
    level: 'advanced',
    code: '',
    subTopics: [],
  },
  typeofTypeOperator: {
    name: 'Typeof Type Operator',
    description: 'Obtain the type of a value at runtime.',
    level: 'advanced',
    code: '',
    subTopics: [],
  },
  indexedAccessTypes: {
    name: 'Indexed Access Types',
    description: 'Access the type of a property by key.',
    level: 'advanced',
    code: '',
    subTopics: [],
  },
  conditionalTypes: {
    name: 'Conditional Types',
    description:
      'Types that choose one of two possible types based on a condition.',
    level: 'expert',
    code: '',
    subTopics: [],
  },
  templateLiteralTypes: {
    name: 'Template Literal Types',
    description: 'Build types using template literal syntax.',
    level: 'expert',
    code: '',
    subTopics: [],
  },
  classes: {
    name: 'Classes',
    description: 'Define blueprints for creating objects.',
    level: 'basic',
    code: '',
    subTopics: [],
  },
  modules: {
    name: 'Modules',
    description: 'Reusable pieces of code in TypeScript.',
    level: 'basic',
    code: '',
    subTopics: [],
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
