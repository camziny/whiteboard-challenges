try {
  // code
} catch (error) {
  // handle error
}

let json = '{ "name": "John", "age": 30 }';

let user = json;
JSON.parse();

alert(user.name);
alert(user.age);

let badJson = "{ bad json }";

try {
  let user = JSON.parse(badJson);
  alert(user.name);
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}

let jsonTwo = '{ "age": 30 }';

try {
  let user = JSON.parse(jsonTwo);
  alert(user.name);
} catch (err) {
  console.log("doesn't execute");
}

try {
  let age = prompt("Enter your age");

  if (age == "") throw "You didn't enter your name";
  if (isNaN(age)) throw age + "isn't a number";
  if (age < 18) throw "You need to be 18 to sign up";
} catch (error) {
  console.log(error);
}

// Error syntax

let error = new Error(message);
console.log(error.name); // name property is name of the constructor
console.log(error.message); // message is the argument

try {
  JSON.parse("{ bad json o_O }");
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}

// Expected property name

let jsonThree = '{ "age": 30 }';
try {
  let user = JSON.parse(jsonThree);
  if (!user.name) {
    throw new Error("Incomplete data: no name");
  }
  console.log(user.name);
} catch (error) {
  console.log("JSON Error: " + error.message);
}

// Forget to put "let" before user

let jsonFour = '{ "age": 30 }';

try {
  user = JSON.parse(jsonFour);
} catch (error) {
  console.log("JSON Error: " + err);
}

let jsonSix = '{ "age": 30 }';
try {
  let user = JSON.parse(jsonSix);
  if (!user) {
    throw new SyntaxError("Incomplete data: no name");
  }
  randomFunction();
  alert(user.name);
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log("JSON Error: " + error.message);
  } else {
    throw error;
  }
}

// Fix code starting on line 72

let jsonFive = '{ "age": 30 }';
try {
  user = JSON.parse(jsonFive);
  if (!user.name) {
    throw new SyntaxError("Incomplete data: no user");
  }
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log("JSON Error: " + error);
  } else {
    throw error;
  }
}

const readData = () => {
  let json = '{ "age": 30 }';

  try {
    randomFunction();
  } catch (error) {
    if (!(error instanceof SyntaxError)) {
      throw error;
    }
  }
};

try {
  randomFunctionTwo();
} catch (error) {
  console.log("External catch got: " + error);
}

try {
  // execute code
} catch (error) {
  // handle errors
} finally {
  // execute always
}

let num = +prompt("Enter a positive integer number?", 35);

let diff, result;

function fib(n) {
  if (n < 0 || Math.trunc(n) != n) {
    throw new Error("Must not be negative, and also an integer.");
  }
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

let start = Date.now();

try {
  result = fib(num);
} catch (err) {
  result = 0;
} finally {
  diff = Date.now() - start;
}

alert(result || "error occurred");

alert(`execution took ${diff}ms`);
