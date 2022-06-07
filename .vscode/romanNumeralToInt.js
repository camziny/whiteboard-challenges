//Given a roman numeral, convert it to an integer.


const romanNumerals = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

const romanToInt = (s) => {
  let acc = 0;
  for (i = 0; i < s.length; i++) {
    const curr = romanNumerals[s[i]];
    const next = romanNumerals[s[i + 1]];

    if (curr < next) {
      acc += next - curr;
      i++;
    } else {
      acc += curr;
    }
  }
  return acc;
};