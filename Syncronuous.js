/*
Synchronous Programming / Synchronous Function
*/

function AsignTask() {
  setTimeout(() => {
    console.log("aryan's 1 task is completed");
  }, 1000);
  setTimeout(() => {
    console.log("aryan's 2 task is completed");
  }, 4000);
  setTimeout(() => {
    console.log("aryan's 3 task is completed");
  }, 8000);
}

AsignTask();
