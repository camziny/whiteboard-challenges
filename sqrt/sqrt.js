// Given a non-negative integer x, compute and return the square root of x.

// Since the return type is an integer, the decimal digits are truncated,
// and only the integer part of the result is returned.

// Note: You are not allowed to use any built-in exponent function or operator,
// such as pow(x, 0.5) or x ** 0.5.

const mySqrt = (x) => {
  let left = 1;
  let right = x;
  if (x < 2) {
    return x;
  }
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (mid * mid === x) {
      return mid;
    } else if (mid * mid > x) {
      right = mid;
    } else if (mid * mid < x) {
      left = mid + 1;
    }
  }
  return left - 1;
};
