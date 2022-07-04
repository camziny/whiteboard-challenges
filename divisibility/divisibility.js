// You are provided an array  of size  that contains non-negative integers.
// Your task is to determine whether the number that is formed by selecting the last digit
// of all the N numbers is divisible by .

// Note: View the sample explanation section for more clarification.

// Input format

// First line: A single integer  denoting the size of array
// Second line:  space-separated integers.
// Output format

// If the number is divisible by , then print Yes. Otherwise, print No.

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
  stdin_input += input; // Reading input from STDIN
});

process.stdin.on("end", function () {
  main(stdin_input);
});

function main(input) {
  const inputArray = input.split("\n");
  const l = inputArray[0];
  const arrValues = inputArray[1];
  const splitArr = arrValues.split("");
  let acc = 0;
  for (let i = splitArr.length - 1; i >= 0; i--) {
    if (splitArr[i] === " ") {
      i--;
    } else {
      acc += splitArr[i];
    }
  }
  if (acc % 10 === 0) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
