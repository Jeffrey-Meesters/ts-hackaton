import type { TypeScriptDocs } from '@/types/DataModel'

export const docs: TypeScriptDocs = {
  declarationMerging: {
    name: 'Declaration Merging',
    description: 'Combining multiple declarations into a single definition.',
    level: 'advanced',
    code: '',
    subTopics: [],
  },
  jsx: {
    name: 'JSX',
    description:
      "TypeScript's support for JSX, a syntax extension for JavaScript.",
    level: 'advanced',
    code: '',
    subTopics: [],
  },
  namespaces: {
    name: 'Namespaces',
    description: 'Organize and manage code within a TypeScript application.',
    level: 'basic',
    code: '',
    subTopics: [],
  },
  namespacesAndModules: {
    name: 'Namespaces and Modules',
    description:
      'Understand the differences and use cases of namespaces and modules.',
    level: 'basic',
    code: '',
    subTopics: [],
  },
  symbols: {
    name: 'Symbols',
    description: 'A primitive data type for unique identifiers.',
    level: 'advanced',
    code: '',
    subTopics: [],
  },
  tripeSlashDirectives: {
    name: 'Triple-Slash Directives',
    description: 'Special comments for compiler directives.',
    level: 'basic',
    code: '',
    subTopics: [],
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
