const sortedSquaredArray = (array) => {
  const sortNums = (a, b) => {
    return a - b;
  };
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(array[i] * array[i]);
  }
  return result.sort(sortNums);
};
