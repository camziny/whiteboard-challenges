const arr = [1, 2, 3];
console.log(arr);
// [1, 2, 3 ]

const arrTwo = new Array(1, 2, 3);
console.log(arrTwo);
// [1, 2, 3 ]

const arrThree = new Array(5);
console.log(arrThree);
// [, , , , ]

const arrFour = new Array(5).fill(0);
console.log(arrFour);
// [0, 0, 0, 0, 0]

const arrFive = [1, 2, 3];
arrFive.splice(0, 2, "hello");
console.log(arrFive);
// ['hello', 3]

const arrSix = [1, 2, 3];
const newArray = arrSix.slice(1, 3);
console.log(newArray);
// [2, 3]
console.log(arrSix);
// [1, 2, 3]

const firstArray = [1, 2, 3];
const secondArray = firstArray.concat(["hello", "world"]);
console.log(secondArray);
// [1, 2, 3, "hello", "world"]
console.log(secondArray.join(", "));
// "1, 2, 3, hello, world"

const arrSeven = [1, 2, 3];
for (const value of arrSeven) {
  console.log(value);
}
/*
1
2
3
*/

const arrEight = [1, 2, 3];
arrEight.forEach((value, index) => {
  console.log(value, index);
});
/*
1 0
2 1
3 2
*/

const arrNine = [1, 2, 3];
const mappedArray = arrNine.map((value, index) => {
  return value + index;
});
console.log(mappedArray);
// [1, 3, 5]

const arrTen = [1, 2, 3];
const filteredArray = arrTen.filter((value, index) => {
  return value > 1;
});
console.log(filteredArray);
// [2, 3]

const arrEleven = [1, 2, 3];
const foundIndex = arrEleven.findIndex((value) => {
  return value > 1;
});
console.log(foundIndex);
// 1

const arrTwelve = [1, 2, 3];
const allPass = arrTwelve.every((value) => {
  return value > 1;
});
console.log(allPass);
// false

const somePass = arrTwelve.some((value) => {
  return value > 1;
});
console.log(somePass);
// true

const arrThirteen = [1, 2, 3];
const sum = arrThirteen.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(sum);
// 6

const arrFourteen = [1, 2, 3];
const difference = arrFourteen.reduceRight((acc, curr) => {
  return acc - curr;
}, 0);
console.log(difference);
// -6

const arrFifteen = [5, 7, 3, 0];
const sortedArr = arrFifteen.sort();
console.log(arrFifteen);
// [0, 3, 5, 7]

const firstComparison = (firstNum, secondNum) => {
  return firstNum - secondNum;
};
arrFifteen.sort(compareNumbers);
// [0, 3, 5, 7]

const secondComparison = (firstNum, secondNum) => {
  if (firstNum === 3) {
    return -1;
  }
  if (secondNum === 3) {
    return 1;
  }
  return secondNum - firstNum;
};
arrFifteen.sort(secondComparison);
// [3, 7, 5, 0]
