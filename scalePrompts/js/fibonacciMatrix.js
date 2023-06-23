const fib = (n) => {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    // Create the Fibonacci matrix
    let matrix = [
      [1, 1],
      [1, 0],
    ];

    // Exponentiate the matrix to the power of n
    for (let i = 2; i <= n; i++) {
      matrix = matrix.map((row) => [
        row[0] * row[0] + row[1] * row[1],
        row[0] * row[1] + row[1] * row[0],
      ]);
    }

    // Return the first element of the resulting matrix
    return matrix[0][0];
  }
};
