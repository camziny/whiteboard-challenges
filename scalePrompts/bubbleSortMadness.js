const bubbleSort = (array) => {
  let numberOfSwaps = 0;

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        numberOfSwaps++;
      }
    }

    if (numberOfSwaps === 0) {
      break;
    }
  }

  return array;
};

let array = [10, 8, 7, 6, 5, 4, 3, 2, 1];

array = bubbleSort(array);

console.log(array);
