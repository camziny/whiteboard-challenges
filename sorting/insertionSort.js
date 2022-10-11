// Write a function that takes in an array of integers and returns a sorted version of that
// array. Use the Insertion Sort algorithm to sort the array.

const insertionSort = (array) => {
const swap = (i, j, array) => {
    [array[i], array[j]] = [array[j], array[i]];
};
for (let i = 1; i < array.length; i++) {
    j = i;
    while (j > 0 && array[j] < array[j - 1]) {
        swap(j, j - 1, array);
    j -= 1;
    }
}
return array;
};
