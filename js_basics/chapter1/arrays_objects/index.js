// Arrays

let marks = [34, 23, 24, 93, 73, 25];
const fruits = ["Orange", "Apple", "Pineapple"];
const mixed = ["str", 89, [3, 5]];

const arr = new Array(23, 123, 21, "Orange");

console.log(marks);
console.log(arr);
console.log(mixed);
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);

console.log(arr.length);
console.log(Array.isArray(arr));
console.log(Array.isArray("dfdf"));
arr[0] = "Deepta";
console.log(arr);
let arrElement = arr[0];
console.log("element : ", arrElement);
console.log(arr);

let val = marks.indexOf(34);
console.log(val);
val = marks.indexOf(73);
console.log(val);

// Mutating Arrays

marks.push(3564); // appending element to the end of an array
marks.unshift(1009); // appending element to the beginning of an array
console.log(marks);

marks.pop(); // removes last element from the end of an array
console.log(marks);
marks.shift(); // removes first element from the beginning of an array
console.log(marks);
marks.splice(1, 2); // removes range of elementd from the specified index of an array
console.log(marks);

marks.reverse();
console.log(marks);

let marks2 = [1, 2, 3, 7];
marks.concat(marks2); // won't work if marks is const
console.log(marks);

// Object

let myObj = {
  "first nam": "Deeptaragh",
  dept: "Coding",
  isActive: true,
  marks: [1, 5, 3, 6],
};

console.log(myObj);
console.log(myObj.isActive);
console.log(myObj["first nam"]);
