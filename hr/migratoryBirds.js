function migratoryBirds(arr) {
  let idCounts = [];

  for (let id of arr) {
    if (idCounts[id]) {
      idCounts[id] += 1;
    } else {
      idCounts[id] = 1;
    }
  }

  let maxCount = 0;
  let mostFrequentId = 0;
  for (let id in idCounts) {
    if (
      idCounts[id] > maxCount ||
      (idCounts[id] === maxCount && id < mostFrequentId)
    ) {
      maxCount = idCounts[id];
      mostFrequentId = id;
    }
  }
  return mostFrequentId;
}
