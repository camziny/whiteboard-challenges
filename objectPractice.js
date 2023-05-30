const myKey = "key";
const website = {
  name: "google",
  rating: 5,
  founders: ["Cam", "Bob"],
  isAwesome: true,
  "multi word key": 0,
  [myKey]: 123,
};

console.log(website);
/*
{
  "name": "google",
  "rating": 5,
  "founders": [
    "Cam",
    "Bob"
  ],
  "isAwesome": true,
  "multi word key": 0,
  "key": 123
}
*/

console.log(website.name);
// "google"

website.name = "ask jeeves";
console.log(website.name);
// "ask jeeves"

website.foo = "bar";
console.log(website.foo);
// "bar"

const name = "Cam";
const obj = {
  name,
};
console.log(obj);
// { "name": "Cam" }

const Website = (name, rating, founders) => {
  name = name;
  rating = rating;
  founders = founders;
};

const frontendExpert = new Website("FrontendExpert", 5, ["Cam"]);

const id = Symbol("id");
const idTwo = Symbol("id");

const object = {
  [id]: 123,
  [idTwo]: 0,
  id: "hello",
};

console.log(obj);
// { id: 'hello', [Symbol(id)]: 123, [Symbol(idTwo)]: 0 }

const person = {
  name: "Cam",
  age: 31,
  job: "Software Engineer",
  location: "Boston",
  sayHello() {
    console.log("hello");
  },
};

console.log("name" in person);
// true
console.log(person.hasOwnProperty("name"));
// true
console.log("toString" in person);
// true
console.log(person.hasOwnProperty("toString"));
// false
person.sayHello();
// "hello"

const objectTwo = {
  foo: "bar",
  hello: "world",
  [Symbol("id")]: 0,
  _proto_: person,
};
console.log(Object.keys(objectTwo));
// ['foo']
console.log(Object.values(objectTwo));
// ['bar']
console.log(Object.entries(objectTwo));
// [ ['foo', 'bar'], ['hello', 'world'] ]

Object.entries(objectTwo).forEach((value) => {
  console.log(value);
});
/*
['foo', 'bar']
['hello', 'world']
*/

Object.freeze(objectTwo);
objectTwo.foo = "foo";
console.log(objectTwo.foo);
// "bar"

objectTwo.toString = function () {
  return "Hello world";
};
console.log(objectTwo.toString());
// "Hello world"
