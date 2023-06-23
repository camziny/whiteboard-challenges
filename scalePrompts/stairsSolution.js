const solution = (n) => {
  if (n < 0) return 0;
  if (n === 0) return 1;
  return solution(n - 1) + solution(n - 2) + solution(n - 3);
};
