// const getWage = (baseSalary, overtime, rate) => {
//   return baseSalary + overtime * rate;
// };

let employee = {
  baseSalary: 30000,
  overtime: 10,
  rate: 20,
  getWage: function () {
    return this.baseSalary + this.overtime * this.rate;
  },
};

let classroom = {
  personOne: 16,
  personTwo: 18,
  personThree: 14,
  totalAge: function () {
    return this.personOne + this.personTwo + this.personThree;
  },
};
// employee.getWage();

const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  draw: function () {
    console.log("draw a circle");
  },
};

// circle.draw();

// Factory Function

function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}

// const newCircle = createCircle(2);

// Constructor Function
function Circle(radius) {
  this.radius;
  this.draw = function () {
    console.log("draw");
  };
}

// const anotherCircle = new Circle(1);

let user = {
  name: "Tony",
  age: 19,
  isPresent: true,
  getAttendance: function () {
    if (this.isPresent == false) {
      console.log("absent");
    } else {
      console.log("here");
    }
  },
  getUserAge: function () {
    return this.age;
  },
};

let group = {
  personOne: "Rick",
  personTwo: "Bob",
  personThree: "Antonio",
  personFour: "Steve",
  shortestName: function () {
    let shortest = this.personOne;
    if (shortest.length > this.personTwo.length) {
      shortest = this.personTwo;
    } else {
      if (shortest > this.personThree.length) {
        shortest = this.personThree;
      } else {
        if (shortest > this.personFour.length) {
          shortest = this.personFour;
        }
      }
    }
    return shortest;
  },
};
