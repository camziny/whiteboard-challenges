// Write a function that takes in an array of integers and returns a sorted version of that
// array. Use the Selection Sort algorithm to sort the array.

const selectionSort = (array) => {
const swap = (i, j, array) => {
    [array[i], array[j]] = [array[j], array[i]];
};
for (i = 0; i < array.length; i++) {
    let smallIdx = i;
    for (let j = i + 1; j < array.length; j++) {
    if (array[smallIdx] > array[j]) {
        smallIdx = j;
    }
    }
    swap(i, smallIdx, array);
}
return array;
};
