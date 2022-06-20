// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

const isValid = (s) => {
  const arrayOfInput = [];
  const open = { "(": ")", "{": "}", "[": "]" };
  const close = { ")": true, "}": true, "]": true };

  for (const input of s) {
    if (open[input]) {
      arrayOfInput.push(input);
    } else if (close[input]) {
      if (open[arrayOfInput.pop()] !== input) return false;
    }
  }
  return arrayOfInput.length === 0;
};
