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

```javascript
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

# JavaScript Interview Questions and Answers

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

```javascript
// var Hoisting
console.log(a);  // undefined
var a = 5;
console.log(a);  // 5

// let and const Hoisting
console.log(b);  // ReferenceError: Cannot access 'b' before initialization
let b = 10;

