const numbers = [1, 2, 3, 4, 5];

const asyncMap = async (numbers) => {
  const results = await numbers.map(async (number) => {
    const result = await someAsyncFunction(number);
    return result;
  });

  return results;
};

const results = await asyncMap(numbers);
console.log(results); // [1, 2, 3, 4, 5]
