function pickingNumbers(a) {
  let frequency = Array(101).fill(0);
  for (let num of a) {
    frequency[num]++;
  }
  let maxLength = 0;
  for (let i = 1; i < frequency.length; i++) {
    maxLength = Math.max(maxLength, frequency[i] + frequency[i - 1]);
  }
  return maxLength;
}
