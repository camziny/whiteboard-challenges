function hurdleRace(k, height) {
  height.sort((a, b) => b - a);
  let highest = height[0];
  let doses = 0;
  if (highest <= k) {
    return 0;
  } else {
    doses = Math.abs(highest - k);
  }
  return doses;
}
