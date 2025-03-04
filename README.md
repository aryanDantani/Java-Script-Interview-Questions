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
