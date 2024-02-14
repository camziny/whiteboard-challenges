function getMoneySpent(keyboards, drives, b) {
  let sortedKeyboards = keyboards.sort().reverse();
  let sortedDrives = drives.sort().reverse();

  let max = -1;

  for (let i = 0; i < sortedKeyboards.length; i++) {
    for (let j = 0; j < sortedDrives.length; j++) {
      let sum = sortedKeyboards[i] + sortedDrives[j];
      if (sum <= b && sum > max) {
        max = sum;
      }
    }
  }
  return max;
}
