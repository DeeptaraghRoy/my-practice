let a = prompt("Hey! what's your age?");
console.log(typeof a);
a = Number.parseInt(a); // Converting the String to a Number
console.log(typeof a);

// if.. if-else... if-else if-if ladder

if (a < 0) {
  alert("This is a invalid age");
} else if (a < 9) {
  alert("You're a kid and you can't even think of driving!");
} else if (a < 18 && a >= 9) {
  alert("You're a kid and you can think of driving after 18");
} else {
  alert("You can now drive as you're above 18");
}

console.log("Done");

// Example - 2. Check if a variable is defined or not.

const vari = 34;

if (typeof vari !== "undefined") {
  console.log("vari is defined");
} else {
  console.log("vari is not defined");
}

// switch statement

const expr = `HI`;
switch (expr) {
  case `Oranges`:
    console.log(`Oranges are ₹ 10.00/-`);
    break;
  case `Mangoes`:
  case `Papayas`:
    console.log(`Mangoes And Papayas are ₹ 30.00/-`);
    break;
  default:
    console.log(`Sorry, we're out of ${expr}!`);
}

// ternary operator
console.log("You can", a < 18 ? "not drive" : "drive");
