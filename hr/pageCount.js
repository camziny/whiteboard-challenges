function pageCount(n, p) {
  let fromBeginning = Math.floor(p / 2);
  let fromEnd;
  if (n % 2 === 0) {
    fromEnd = Math.ceil((n - p) / 2);
  } else {
    fromEnd = Math.floor((n - p) / 2);
  }

  return Math.min(fromBeginning, fromEnd);
}
