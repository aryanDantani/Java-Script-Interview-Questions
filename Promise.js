function result(value) {
  console.log(`Your Promise ${value}`);
}

let MyPromise = new Promise((resolve, reject) => {
  let x = -5;

  if (x < 0) {
    resolve("is true");
  } else {
    reject("is false");
  }
});

// Method - 1
MyPromise.then(
  function (value) {
    result(value);
  },
  function (error) {
    result(error);
  }
);

// Method - 2
MyPromise.then((value) => {
  console.log(`Your Promise ${value}`);
}).catch((error) => {
  console.log(`Your Promise ${error}`);
});
