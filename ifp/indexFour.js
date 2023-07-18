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

const names = new PowerArray(console.log, "Tim", "Dom", "Kim");
