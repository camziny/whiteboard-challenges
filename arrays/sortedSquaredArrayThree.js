// Write a function that takes in a non-empty array of integers that are sorted
// in ascending order and returns a new array of the same length with the squares
// of the original integers also sorted in ascending order.

const sortedSquaredArray = (array) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(array[i] * array[i]);
  }
  return result.sort((a, b) => a - b);
};
