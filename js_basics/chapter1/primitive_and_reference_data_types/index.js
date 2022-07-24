/* Primitive Types. Gets stored in Stack Memory */

// String
let nam = "Deepta";
console.log("My String is : " + nam);
console.log("Data Type is : ", typeof nam);
// console.log("Data Type is : " + typeof nam);

// Numbers
let marks = 34;
let marks1 = 34.4;
console.log("Data Type is : " + typeof marks);
console.log("Data Type is : " + typeof marks1);

// Boolean
let isDriver = true;
console.log("Data Type is : " + typeof isDriver);

// Null
let nullVar = null;
console.log("Data Type is : " + typeof nullVar); // expected output object. It is a bogus datatype

// Undefined
let undef = undefined;
console.log("Data Type is : " + typeof undef);

/* Reference Types. Gets stored in Heap Memory */

// Arrays
let myarr = [1, 2, 3, 4, false, "String"];
console.log("Data Type is : " + typeof myarr); // expected output object.

// Object Literals

let StMarks = {
  Deepta: 89,
  Shubham: 36,
  Rohan: 34,
};
console.log("Data Type is : " + typeof StMarks); // expected output object.

function findName() {}
console.log("Data Type is : " + typeof findName); // expected output function.

let date = new Date();
console.log("Data Type is : " + typeof date); // expected output object.
