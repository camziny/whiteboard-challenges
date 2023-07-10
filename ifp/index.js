let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

let firstName = "John";
const lastName = "Smith";

let name = "John"; //String Literal
let age = 20; // Number Literal
let isApproved = true; // Boolean Literal
let color = null; // Explicitly clear the value of the variable
let selectedColor = "red";
const person = undefined;

console.log(typeof person);
console.log(typeof color);

const foo = Symbol("foo");
console.log(foo);
// Objects

// create a person object

const personObject = {
  name: "Tim",
  age: 30,
};

// Dot Notation
personObject.name = "Tim";
console.log(personObject.name);

// Bracket Notation
personObject["name"] = "Mary";
console.log(personObject.name);

let selection = "name";
personObject[selection] = "Ed";

let personAge = "age";
personObject[personAge] = 20;
console.log(typeof personObject.age);

// Arrays

let selectedColors = ["red", "blue", "green"];
console.log(selectedColors);
console.log(selectedColors[0]);
selectedColors[2] = "orange";
selectedColors[2] = 1;
console.log(selectedColors);
console.log(typeof selectedColors);

// Functions

const greet = () => {
  console.log("hello world");
};

const greetPerson = (name) => {
  console.log("hello " + name);
};

greetPerson("John"); // John is the argument
greetPerson("Mary"); // Mary is the argument

greetTwoPeople("John", "Mary");

// Calculate a value
const square = (number) => {
  return number * number;
};

square(2);

let number = square(2);
console.log(number);
const array = [1, 2, 3, 4];
let even = true;

const greetTwoPeople = (personOne, personTwo) => {
  console.log("hello " + personOne + " and " + personTwo);
};

const isEven = (num) => {
  if (num % 2 === 0) {
    console.log("num is even");
  } else {
    if (num % 2 !== 0) {
      console.log("num is odd");
    }
  }
};
