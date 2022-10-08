// Write a function that takes in an array
// at least three integers, without sorting the
// input array, returns a sorted array of
// the three largest integers in the input array.

// The function should return duplicate integers
// if necessary; for example it should return
// [10, 10, 12] for an input array of
// [10, 5, 9, 10, 12].

const findThreeLargestNumbers = (array) => {
  let first = -Infinity;
  let second = -Infinity;
  let third = -Infinity;
  let curr;
  const three = [];

  for (let num of array) {
    if (num > third) {
      third = num;
      if (third > second) {
        curr = second;
        second = third;
        third = curr;
        if (second > first) {
          curr = first;
          first = second;
          second = curr;
        }
      }
    }
  }
  three.push(third, second, first);
  return three;
};
