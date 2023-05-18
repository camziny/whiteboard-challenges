const nonConstructibleChange = (coins) => {
  const sortedCoins = coins.sort((a, b) => a - b);
  let current = 0;

  for (const coin of sortedCoins) {
    if (coin > current + 1) {
      return current + 1;
    }
    current += coin;
  }
  return current + 1;
};
