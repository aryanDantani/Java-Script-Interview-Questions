/*
Asynchronous Programming / Asynchronous Function
*/
function AsignTask2() {
  console.log("Start of script");

  setTimeout(function () {
    console.log("First timeout completed");
  }, 2000);

  console.log("End of script");
}

AsignTask();
