function sockMerchant(n, ar) {
  let socks = {};

  for (let sock of ar) {
    if (socks[sock]) {
      socks[sock] += 1;
    } else {
      socks[sock] = 1;
    }
  }
  let pairs = 0;

  for (let id in socks) {
    pairs += Math.floor(socks[id] / 2);
  }
  return pairs;
}
