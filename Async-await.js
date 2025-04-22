
// Method - 1

async function MyPromise() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I love java script");
    }, 5000);
  });

  const result = await promise;
  console.log(result);
}

MyPromise();

// Method - 2

async function myDisplay() {
  let x = 0;

  let myPromise = new Promise(function (resolve, reject) {

    if (x === 0) {
      setTimeout(() => {
        resolve("I love JavaScript😘 !!");
      }, 5000);
    } else {
      setTimeout(() => {
        reject("I Just hate JavaScript 😒");
      }, 4000);
    }

  });

  try {
    const result = await myPromise;
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

myDisplay();

