/* Q1 - Create a variable of type String and try to add a number to it. */

let a = "Deeptaragh";
let b = 6;
console.log(a + b);

/*  Q2 - Use typeof operator to find the datatype of the String in last Question. */

console.log(typeof (a + b));

/*  Q3 - Create a const Object in JavaScript. Can you change it to hold a number later? */

/*const c = {
  name: "Deeptaragh",
  section: 1,
  isPrincipal: false,
};
c = 54;*/ // Will not work

/*  Q4 - Try to add a new key to the const Object in Problem-3. Were you able to do it? */

const c = {
  name: "Deeptaragh",
  section: 1,
  isPrincipal: false,
};
c["friend"] = "Shubham";
c["name"] = "Lovish";
// c = {}; // Will not work
console.log(c);

/*  Q5 - Write a JS program to create a word-meaning Dictionary of 5 words. */

const dict = {
  appreciate: "recognize the full worth of.",
  ataraxy: "a state of serene calmness.",
  gnomon:
    "the projecting piece on a sundial that shows the time by the position of its shadow.",
  yakka: "work, especially of a strenuous physical kind.",
  aver: "state or assert to be the case.",
};
console.log(dict.yakka);
console.log(dict["yakka"]);
