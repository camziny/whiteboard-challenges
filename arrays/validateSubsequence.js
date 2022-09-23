// Given two non-empty arrays of integers, write a function that determines
//   whether the second array is a subsequence of the first one.

// A subsequence of an array is a set of numbers that aren't necessarily adjacent
//   in the array but that are in the same order as they appear in the array. For
//   instance, the numbers

const isValidSubsequence = (array, sequence) => {
  let j = 0;
  if (array.length < sequence.length) {
    return false;
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] === sequence[j]) {
      j++;
    }
  }
  if (j === sequence.length) {
    return true;
  } else {
    return false;
  }
};
