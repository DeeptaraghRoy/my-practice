77; // (Number) Correct expression hence no error
("Deepta"); // (String) Correct expression hence no error

// Binod; // ReferenceError: Binod is not defined

false; // (Boolean) Correct expression hence no error

console.log("Operators in JS");

// Arithmetic Operators

let a = 45;
let b = 4;

console.log("a + b = ", a + b); // 49
console.log("a - b = ", a - b); // 41
console.log("a / b = ", a / b); // 11.25
console.log("a * b = ", a * b); //180

console.log("a ** b = ", a ** b); // (4100625) Exponentiation

console.log("a % b = ", a % b); // 1

console.log("a++ = ", a++); // 45
console.log("a = ", a); // 46
console.log("++a = ", ++a); // 47

console.log("a-- = ", a--); // 47
console.log("a = ", a); // 46
console.log("--a = ", --a); // 45

// Assignment Operators

assignment = 8;
assignment += 5; // same as : assignment = assignment + 5
console.log("assignment is now = ", assignment);

assignment -= 5; // same as : assignment = assignment - 5
console.log("assignment is now = ", assignment);

assignment *= 5; // same as : assignment = assignment * 5
console.log("assignment is now = ", assignment);

assignment /= 5; // same as : assignment = assignment / 5
console.log("assignment is now = ", assignment);

assignment **= 5; // same as : assignment = assignment ** 5
console.log("assignment is now = ", assignment);

// Comparison Operators

let comp1 = 6;
let comp2 = 7;
console.log("comp1 == comp2 is", comp1 == comp2); // false
console.log("comp1 != comp2 is", comp1 != comp2); // true
console.log("comp1 > comp2 is", comp1 > comp2); // true

let comp3 = 6;
let comp4 = "6";
console.log("comp3 === comp4 is", comp3 === comp4); // false (checks type)
console.log("comp3 !== comp4 is", comp3 !== comp4); // true (checks type)

// Logical Operators

let x = 5;
let y = 6;

console.log(x < y && x == 5); // Logical AND
console.log(x > y || x == 5); // Logical OR
console.log(x < y || x == 5); // Logical OR
console.log(!false); // NOT
console.log(!true); // NOT
