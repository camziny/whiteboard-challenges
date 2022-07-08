// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps.
// In how many distinct ways can you climb to the top?

const climbStairs = (n) => {
  const count = (stairs, saved) => {
    const left = stairs - 1;
    const right = stairs - 2;
    if (stairs < 0) {
      return 0;
    } else if (stairs === 0) {
      return 1;
    } else if (saved[stairs]) {
      return saved[stairs];
    }
    saved[stairs] = count(left, saved) + count(right, saved);
    return saved[stairs];
  };
  return count(n, {});
};
