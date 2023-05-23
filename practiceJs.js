let num = 10.5;
console.log(num >= 10.5);
// true
console.log(typeof 100n);
// "bigint"

let str = "abcd";

console.log(str);
// "abcd"
console.log(str + "efg");
// abcdefg
console.log(str + 10);
// abcd10
console.log(str > "efg");
// false
console.log(str === "efg");
// false
console.log(str === "abcd");
// true
console.log(str === "abcd");
// true
console.log("Hello this is a single quote: ' ");
// "Hello this is a single quote: ' "
console.log(`Hello World`);
// "Hello World"
console.log(`Hello
World`);
// "Hello
// World"
console.log(`
Hello
World`);
//
// "Hello
//World"
console.log(str.includes("b"));
// true
console.log(str.includes("e"));
// false
console.log(str.startsWith("a"));
// true
console.log(str.endsWith("d"));
// true
console.log(str.toUpperCase());
// "ABCD"
console.log(str.toUpperCase().toLowerCase());
// "abcd"
console.log(str.slice(1));
// "bcd"
console.log(str.slice(1, 2));
// "b"
console.log(str.padStart(10, "-"));
// ------abcd

const person = {
  name: "Cam",
  course: "FrontendExpert",
};
console.log(person);
// {
//  "name": "Cam",
//  "course": "FrontendExpert"
// }
console.log(JSON.stringify(person));
// "{'name':'Cam','course':'FrontendExpert'}"
console.log(JSON.parse(JSON.stringify(person)));
// {
//  "name": "Cam",
//  "course": "FrontendExpert"
// }
person.name = "Zakaria";
console.log(person.name);
// "Zakaria"

const map = new Map();
map.set(123, "hello");
console.log(map.get(123));
// "hello"
map.set(123, "world");
console.log(map.get(123));
// "world"
map.set(456, "hello");
console.log(map.get(456));
// "hello"
console.log(map.size);
// 2

const set = new Set();
set.add("hello");
set.add("world");
console.log(set);
// {"hello","world"}
console.log(set.has("hello"));
// true
console.log(set.has("hello world"));
// false
set.delete("hello");
console.log(set.size);
// 1
console.log(set.has("hello"));
// false

const arr = [1, 2, 3];
console.log(arr);
// [1, 2, 3]
console.log(arr.length);
// 3
console.log(arr[1]);
// 2
arr.push(4);
console.log(arr);
// [1, 2, 3, 4]
console.log(typeof arr);
// object

const addTwo = (num) => {
  return num + 2;
};
console.log(addTwo(3));
// 5
const addTwos = (num = 6) => {
  return num + 2;
};
console.log(addTwos(3));
// 5
console.log(addTwos());
// 8
const callFunc = (func, param) => {
  console.log(func(param));
};
callFunc(addTwo, 10);
// 12
const addThree = (num) => {
  return num + 3;
};

const callFunction = (func, param) => {
  console.log(func(param));
};
callFunction(addThree, 10);
// 13
console.log(typeof addThree);
// object
console.log(addThree instanceof Object);
// true

for (let i = 0; i < 4; i++) {
  console.log(i);
}
// 0
// 1
// 2
// 3
// 4
for (let i = 0; i < 4; i++) {
  console.log(i);
  if (i === 1) {
    break;
  }
}
// 0
// 1
let i = 0;
while (i < 4) {
  console.log(i);
  i++;
}
// 0
// 1
// 2
// 3
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 4);
// 0
// 1
// 2
// 3
for (const value of [1, 2, 3]) {
  console.log(value);
}
// 1
// 2
// 3
const obj = {
  name: "Cam",
  course: "FrontendExpert",
};
for (const key in obj) {
  console.log(key);
}
/* name
course
*/
for (const key in obj) {
  console.log(key, obj[key]);
}
// name Cam
// course FrontendExpert
[1, 2, 3].forEach(function (value) {
  console.log(value);
});
/* 
1
2
3
*/

const condition = true;
if (condition) {
  console.log("It was true");
} else {
  console.log("It was false");
}
// "Tt was true"

const myNum = 2;
switch (myNum) {
  case 1:
    console.log("It was 1");
    break;
  case 2:
    console.log("It was 2");
    break;
  default:
    console.log("Default");
    break;
}
// "It was 2"

const myNumber = 10;
console.log(myNumber > 5 ? "Greater than 5" : "Less than 5");
// "Greater than 5"
const anotherNumber = 10;
console.log(anotherNumber > 20 ? "Greater than 20" : "Less than 20");
// "Less than 20"

throw new Error("Oh no");
// Uncaught Error: Oh no
