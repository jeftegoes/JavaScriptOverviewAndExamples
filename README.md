# NodeJS overview and examples <!-- omit in toc -->

## Contents <!-- omit in toc -->

- [1. JavaScript](#1-javascript)
  - [1.1. Classes](#11-classes)
    - [1.1.1. Properties \& Methods](#111-properties--methods)
  - [1.2. Spread \& Rest Operators](#12-spread--rest-operators)
  - [1.3. Destructuring](#13-destructuring)

# 1. JavaScript

## 1.1. Classes

- Basic structure
  ```
    class Person {
      name = "Jefté"
      call = () => {...}
    }
  ```
- Usage
  ```
    const person = new Person()
    person.call()
    console.log(person.name)
  ```
- Inheritance
  ```
    class Person extends Master
  ```

### 1.1.1. Properties & Methods

- Properties are like "variables attached to classes/ objects".
  - **ES6**
    ```
      constructor () {
        this.myProperty = "value"
      }
    ```
  - **ES7**
    ```
      myProperty = "value"
    ```
- Methods are like "functions attached to classes/ objects".
  - **ES6**
    ```
      myMethod () { ... }
    ```
  - **ES7**
    ```
      myMethod = () => { ... }
    ```

## 1.2. Spread & Rest Operators

- **Spread**
  - Used to split up array elements OR object properties
  ```
    const newArray = [...oldArray, 1, 2]
    const newObject = { ...oldObject, newProp: 5 }
  ```
- **Rest**
  - Used to merge a list of function arguments into an array
  ```
    function sortArgs(...args) {
      return args.sort()
    }
  ```

## 1.3. Destructuring

- Easily extract array elements or object properties and store them in variables.
- **Array Destructuring**
  ```
    [a, b] = ["Hello", "Jefté"]
    console.log(a) // Hello
    console.log(b) // Jefté
  ```
- **Object Destructuring**
  ```
    {name} = {name: "Jefté", age: 28}
    console.log(name) // Jefté
    console.log(age) // undefined
  ```
