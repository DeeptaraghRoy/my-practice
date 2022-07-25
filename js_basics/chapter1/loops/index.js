// General loops : for, while, do-while

/* for (let i = 0; i < 100; i++) {
  console.log(i);
} */

/* let j = 0;
while (j < 100) {
  console.log(j);
  j += 1;
} */

let k = 0;
do {
  console.log(k);
  if (k === 5) {
    break;
  }
  k += 1;
} while (k < 10);

console.log("done");

let l = 0;
do {
  if (l === 5) {
    l += 1;
    continue;
  }
  console.log(l);
  l += 1;
} while (l < 10);

console.log("done");

let arr = [2, 5, 6, 4, 2, 3];
arr.forEach(function (element) {
  console.log(element);
});

console.log("done");

let arr2 = [2, 5, 6, 4, 2, 3];
arr.forEach(function (element, index, array) {
  console.log(element, index, array);
});

console.log("done");

let obj = {
  nam: "Rohan Das",
  age: 78,
  type: "Dangerous Programmer",
  os: "Ubuntu",
};
for (let key in obj) {
  console.log(obj[key]);
}

console.log("done");
