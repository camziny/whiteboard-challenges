const isValidSubsequence = (array, sequence) => {
  if (array.length < sequence.length) return false;

  let current = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === sequence[current]) current++;
  }

  if (current === sequence.length) {
    return true;
  } else {
    return false;
  }
};
