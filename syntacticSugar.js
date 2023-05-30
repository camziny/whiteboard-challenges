const arr = [1, 2, 3, 4];

const doubled = arr.map(double);

const double = (num) => {
  return num * 2;
};

const doubleTwo = arr.map((num) => {
  return num * 2;
});

const doubleThree = arr.map((num) => num * 2);

console.log(doubled);
// [2, 4, 6, 8]

// const first = arr[0]
// const second = arr[1]

const [first, second, ...rest] = arr;
console.log(rest);
// [3, 4]

const person = {
  name: "Cam",
  website: "camziny",
};

const { name } = person;
console.log(name);
// "Cam"

const { website } = person
console.log(website)
// "camziny"

const printName = ({ name }) => {
  console.log(name)
}

printName(person)
// "Cam"

const add = (x, y) {
  console.log(x + y)
}

add(...arr) 
// 10

const arrTwo = [5, 6, 7]

const combined = [...arr, ...arrTwo]

console.log(combined)
// [1, 2, 3, 4, 5, 6, 7]

const logParams = (x, ...rest) => {
  console.log(x)
  console.log(rest)
}

logParams(1)
/*
1
[]
*/

logParams(1, 2, 3, 4)
/*
1
[2, 3, 4]
*/

const myName = 'Cam'

console.log('Hello' + myName)
// "Hello Cam"
console.log(`Hello ${myName}`)
// "Hello Cam"
console.log(`Hello ${myName} ${1 + 3}`)
// "Hello Cam 4"

const defaultName = myName ?? 'Default Name'

const shouldRunCode = true

const logWorld = () => {
  console.log('Hello World')
}

shouldRunCode && logWorld()

if(shouldRunCode) {
  logWorld
}




