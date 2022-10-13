// Write a function that takes in a string of lowercase English-alphabet letters and returns
// the index of the string's first non-repeating character.

// The first non-repeating character is the first character in a string that occurs only once.

// If the input string doesn't have any non-repeating characters, your function should return
// -1.

const firstNonRepeatingCharacter = (string) => {
  const stack = {};
  for (const char of string) stack[char] = (stack[char] || 0) + 1;

  for (let i = 0; i < string.length; i++) {
    if (stack[string[i]] === 1) return i;
  }
  return -1;
};
