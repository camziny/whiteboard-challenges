// Given two binary strings a and b, return their sum as a binary string.

const addBinary = (a, b) => {
  let result = 0;
  if (a.length < 53 && b.length < 53) {
    result = parseInt(a, 2) + parseInt(b, 2);
    return result.toString(2);
  } else {
    result = BigInt("0b" + a) + BigInt("0b" + b);
    return result.toString(2);
  }
};
