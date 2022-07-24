console.clear();
var name = `"Deepta"ragh`;
var channel; // Only Declare but is undefined
console.log(typeof channel);
channel = "CodeWithDeepta"; // Now Defined as String
console.log(typeof channel);
var marks = 34;
console.log(typeof marks);
var marks = "3454";
console.log(typeof marks);
console.log(name, channel, marks);

/*
Rules for Creating JavaScript Variables
1. Cannot start with numbers
2. Can start with letters, _ or $
3. Are case sensitive
*/

const ownersName = "Hari Ram";
//ownersName = "Deppta"; // TypeError: Assignment to constant variable.
console.log(ownersName);

//const fruit; // 'const' declarations must be initialized.

const fruit = "Orange";

console.clear();

let city = "Delhi";
{
  //let city = "Rampur";
  city = "Kolkata";
  console.log(city);
}
console.log(city);

console.clear();

/* In case of Const array/object we can append new elements but we cannot modify the existing elements*/

const arr1 = [12, 23, 12, 53, 3];
//arr1 = [34, 23, 23]; // TypeError: Assignment to constant variable.
arr1.push(45);
console.log(arr1);

const c = {
  name: "Deeptaragh",
  section: 1,
  isPrincipal: false,
};
c["friend"] = "Shubham";
c["name"] = "Lovish";
// c = {}; // TypeError: Assignment to constant variable.
console.log(c);
