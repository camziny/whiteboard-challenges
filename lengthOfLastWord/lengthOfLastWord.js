//Given a string s consisting of words and spaces,

// return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

const lengthOfLastWord = (s) => {
  let lastWord = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== " ") {
      for (let j = i; j >= 0; j--) {
        if (s[j] !== " ") {
          lastWord++;
        } else {
          return lastWord;
        }
      }
      return lastWord;
    }
  }
};
