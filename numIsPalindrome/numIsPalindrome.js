//Given an integer, create a function to check if that number is a palindrome.

const isPalindrome = (number) => {
    if (number < 0) {
      return false;
    } else {
      let numberString = number.toString();
  
      const reverseValues = numberString.split("").reverse("").join("");
  
      if (numberString !== reverseValues) {
        return false;
      } else {
        return true;
      }
    }
  };