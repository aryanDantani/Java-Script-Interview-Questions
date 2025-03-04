# JavaScript Interview Questions and Answers

## 1. Promises

A **Promise** in JavaScript is an object representing the eventual result of an asynchronous operation. It serves as a placeholder for a value that might not be available immediately. Promises help manage asynchronous code, making it more readable and maintainable compared to traditional callback-based approaches.

A Promise can be in one of the following states:

- **Pending**: The initial state, representing that the asynchronous operation is still in progress.
- **Fulfilled (Resolved)**: The asynchronous operation completed successfully, and a result value is available.
- **Rejected**: The asynchronous operation failed, and an error or reason for failure is available.

### Promise Methods

Promises provide methods to handle these states:

- **.then()**: 
    - Called when the Promise is fulfilled, receiving the result value.
    - Example: `.then(result => { /* handle success */ })`

- **.catch()**: 
    - Called when the Promise is rejected, receiving the error or reason for failure.
    - Example: `.catch(error => { /* handle error */ })`

- **.finally()**: 
    - Called regardless of whether the Promise is fulfilled or rejected, often used for cleanup tasks.
    - Example: `.finally(() => { /* cleanup code */ })`

### Example Usage:

const myPromise = new Promise((resolve, reject) => {
  let success = true;
  
  if(success) {
    resolve("Operation Successful");
  } else {
    reject("Operation Failed");
  }
});

myPromise
  .then(result => {
    console.log(result);  // "Operation Successful"
  })
  .catch(error => {
    console.log(error);   // "Operation Failed"
  })
  .finally(() => {
    console.log("Promise operation complete.");
  });

## 2. Hoisting in JavaScript

**Hoisting** is a behavior in JavaScript where variable and function declarations are moved to the top of their respective scopes during the compilation phase before code execution. It allows you to use variables and functions before they are declared in the code. However, it’s important to understand how hoisting works with different types of declarations.

### Table of Contents
1. [Variable Declarations](#variable-declarations)
2. [Function Declarations](#function-declarations)
3. [Function Expressions](#function-expressions)
4. [Class Declarations](#class-declarations)
5. [Summary](#summary)

---

### 1. Variable Declarations

#### **`var` Declarations**
Variables declared with `var` are hoisted to the top of their scope and initialized with `undefined`. This means you can reference the variable before its declaration, but its value will be `undefined`.

#### **`let` and `const` Declarations**
Variables declared with `let` and `const` are also hoisted, but they are not initialized. Accessing them before their declaration results in a **ReferenceError**. These variables exist in a "temporal dead zone" from the start of the block until the declaration is encountered.

#### Examples:

// var Hoisting
console.log(a);  // undefined
var a = 5;
console.log(a);  // 5

// let and const Hoisting
console.log(b);  // ReferenceError: Cannot access 'b' before initialization
let b = 10;

## 3. Closures in JavaScript

In JavaScript, a **closure** is the combination of a function and the **lexical environment** within which that function was declared. The lexical environment consists of any variables that were in scope at the time the function was created. 

A closure allows the inner function to access variables from the outer function's scope, even after the outer function has returned. This feature enables powerful capabilities such as data encapsulation, state preservation, and the creation of function factories.

### Table of Contents
1. [What is a Closure?](#what-is-a-closure)
2. [How Closures Work](#how-closures-work)
3. [Example of a Closure](#example-of-a-closure)
4. [Use Cases of Closures](#use-cases-of-closures)
5. [Summary](#summary)

---

### 1. What is a Closure?

A closure in JavaScript is formed when a function is defined within another function, allowing the inner function to access variables from the outer function, even after the outer function has finished execution. Closures "remember" the environment in which they were created, making them powerful for tasks that require state persistence.

### 2. How Closures Work

In JavaScript, functions have access to their own scope, the scope in which they were defined, and the global scope. When a function is created within another function, it forms a closure with the outer function's scope. This means the inner function can continue to access the outer function's variables even after the outer function has returned.

### 3. Example of a Closure

Here’s a simple example of how closures work in JavaScript:

function outerFunction(outerVar) {
  function innerFunction(innerVar) {
    console.log(outerVar, innerVar);
  }
  return innerFunction;
}

const myClosure = outerFunction('Hello');
myClosure('World'); // Output: Hello World
