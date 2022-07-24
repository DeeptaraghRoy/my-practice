// Type Conversion

let myVar;
myVar = 34;
console.log(myVar, typeof myVar);
myVar = String(34);
console.log(myVar, typeof myVar);

let booleanVar = true;
console.log(booleanVar, typeof booleanVar);
booleanVar = String(true);
console.log(booleanVar, typeof booleanVar);

let date = new Date();
console.log(date, typeof date);
date = String(new Date());
console.log(date, typeof date);

let arr = [1, 2, 3, 4, 5];
console.log(arr, typeof arr);
console.log(arr.length); // expected output : 5
arr = String([1, 2, 3, 4, 5]);
console.log(arr.length, typeof arr); // expected output : 9 (includes commas)

let i = 75;
console.log(typeof i.toString()); // expected output : String
console.log(typeof i); // expected output : Number

console.clear();

let stri = "3434";
console.log(typeof stri); // expected output : String
stri = Number("3434");
console.log(typeof stri); // expected output : Number

stri = Number("343d4");
console.log(stri, typeof stri); // expected output : NaN number

stri = Number(true);
console.log(stri, typeof stri); // expected output : 1 number

stri = Number(false);
console.log(stri, typeof stri); // expected output : 0 number

stri = Number([1, 2, 3, , 4, 5, 6, 7, 8, 9]);
console.log(stri, typeof stri); // expected output : NaN number

console.clear();

let no = parseInt("34");
console.log(no, typeof no); // expected output : 34 number
no = parseInt("34.098");
console.log(no, typeof no); // expected output : 34 number
no = Number("34.098");
console.log(no, typeof no); // expected output : 34.098 number
no = parseFloat("34.098");
console.log(no, typeof no); // expected output : 34.098 number
console.log(no.toFixed(30), typeof no); // expected output : 34.097999999999998976818460505456 number
no = Number.parseInt("34.098");
console.log(no, typeof no); // expected output : 34 number

console.clear();

// Type Coercion

let mystr = "698";
let mynum = 34;
console.log(mystr + mynum);

mystr = Number("698");
console.log(mystr + mynum);
