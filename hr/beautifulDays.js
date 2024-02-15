function beautifulDays(i, j, k) {
  const reverseNumber = (num) => {
    return Number(num.toString().split("").reverse().join(""));
  };
  let beautifulDayCount = 0;

  while (i <= j) {
    let reversed = reverseNumber(i);
    if (Math.abs((i - reversed) % k === 0)) {
      beautifulDayCount++;
    }
    i++;
  }
  return beautifulDayCount;
}
