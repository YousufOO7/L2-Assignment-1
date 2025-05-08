<h1>Blog's :</h1>
<h3>What are some differences between interfaces and types in TypeScript?</h3>
<p>Answer : In TypeScript, interface and type both are used for object structure definition, but there are some key differences between them. Like when we use interface, we can declare the same type of interface and TypeScript automatically merges those same declared interfaces,
 it not give an error. But if we use the same type in types, it will show an error. Even we can use interface to extend multiple interfaces inherit. We also can use types to extend, but for that, we need to use & intersection operator.</p>
<p>Example</p>
<p>If we declare interface with a same name it merge automatically by TypeScript</p>
|----------------------|----------------------|
| interface User { name: string; }            |
| interface User { age: number;}              |       
|----------------------|----------------------|

<p>If we declare type with a same name it throw an error</p>
|----------------------|----------------------|
| type User { name: string; }                 |
| type User { age: number;}                   |       
|----------------------|----------------------|

<h3>How does TypeScript help in improving code quality and project maintainability?</h3>
<p>Asnwer: When we use TypeScript in coding it shows us a compile time error. For that we can easily detect the bugs even if we return a value in a function which is not declared, it shows me a warning. For that we can fix the bug in build time not in production time. When we use TypeScript we can define how the function works like parameter, return type and object structure. In large production level code base developers can easily understand how all the functions and variables are declared by seeing the file module function. Even when a developer sees the type annotations they don't need to read the whole code file to understand most of the things.</p>
