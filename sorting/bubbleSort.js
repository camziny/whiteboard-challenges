// Write a function that takes in an array of integers and returns a sorted version of that
// array. Use the Bubble Sort algorithm to sort the array.

const bubbleSort = (array) => {
  let sorted = false;
  const swap = (array, a, b) => {
    [array[a], array[b]] = [array[b], array[a]];
};
while (!sorted) {
    sorted = true;
    for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        sorted = false;
    }
    }
}
return array;
};
