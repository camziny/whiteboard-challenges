// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

function diagonalDifference(arr) {
  const n = arr.length;
  let primary = 0;
  let secondary = 0;

  for (let i = 0; i < n; i++) {
    primary += arr[i][i];
    secondary += arr[i][n - i - 1];
  }
  return Math.abs(primary - secondary);
}
