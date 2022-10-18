// Write a function that takes in a non-empty array of integers that are sorted
// in ascending order and returns a new array of the same length with the squares
// of the original integers also sorted in ascending order.

const sortedSquaredArray = (array) => {
  const squared = array.map((a) => a * a);
  return squared.sort((a, b) => a - b);
};
