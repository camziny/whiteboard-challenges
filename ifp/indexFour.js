// static = method or property that belongs to a class and not any one object.

class Car {
  static numberOfCars = 0;
  static beingRace() {
    console.log("race has started");
  }

  constructor(model) {
    this.model = model;
    Car.numberOfCars += 1;
  }
}

let carOne = new Car("Mustang");
let carTwo = new Car("Corvette");
let carThree = new Car("Challenger");
Car.beingRace(); // "race has started"

// Private method

class Person {
  userName;
  age;
  #ageDoubled = 0;

  constructor(userName, age) {
    this.userName = userName;
    this.age = age;
    this.#ageDoubled = this.#doubleAge();
  }

  #doubleAge() {
    return this.age * 2;
  }
  userInfo() {
    console.log(this.userName, this.age);
    console.log(this.#ageDoubled);
  }
}

const tim = new Person("tim", 20);
console.log(tim.userInfo()); // tim 20

// Extending built-in classes

class PowerArray extends Array {
  constructor(onPush, ...elements) {
    super(...elements);
    this.onPush = onPush;
  }
  push(...elements) {
    super.push(...elements);
    if (this.onPush) {
      this.onPush(this);
    }
  }
}

const names = new PowerArray("Tim", "Dom", "Kim");

// Convert normal function to arrow function

function sum(a, b) {
  return a + b;
}

const arrowSum = (a, b) => a + b;

function isPositive(number) {
  return number >= 0;
}

const arrowIsPositive = (number) => number >= 0;

function randomNumber() {
  return Math.random;
}

const arrowRandomNumber = () => Math.random;

document.addEventListener("click", function () {
  console.log("click");
});

document.addEventListener("click", () => {
  console.log("click");
});

class PersonTwo {
  constructor(name) {
    this.name = name;
  }

  arrowPrintName() {
    setTimeout(() => {
      console.log("Arrow: " + this.name);
    }, 100);
  }

  printNameFunction() {
    setTimeout(function () {
      console.log("Function: " + this.name);
    }, 100);
  }
}

let person = new PersonTwo("bob");
console.log("this: " + this.name);
person.printNameFunction();
person.arrowPrintName();

// Promises

let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

p.then((message) => {
  console.log("This is in the then " + message);
}).catch((message) => {
  console.log("This is in the catch " + message);
});
