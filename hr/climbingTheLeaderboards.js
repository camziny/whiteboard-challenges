function climbingLeaderboard(ranked, player) {
  const uniqueScores = Array.from(new Set(ranked)).sort((a, b) => b - a);

  function findRank(score) {
    let low = 0;
    let high = uniqueScores.length - 1;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (uniqueScores[mid] === score) {
        return mid + 1;
      } else if (uniqueScores[mid] < score) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return low + 1;
  }
  return player.map((score) => findRank(score));
}
