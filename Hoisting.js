Summary of Hoisting Behavior
Declaration Keyword 	Hoisted?	Initialized with undefined?	Accessible before declaration?
var	Yes	Yes	Yes (value is undefined)
let	Yes	No	No (ReferenceError due to TDZ)
const	Yes	No	No (ReferenceError due to TDZ)



GetName();
// console.log(value);

// const value = 10;

function GetName() {
  console.log("Hello Aryan 👍");
}

