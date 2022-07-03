process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
  stdin_input += input;
});

process.stdin.on("end", function () {
  main(stdin_input);
});

function main(input) {
  const factorial = (n) => {
    if (n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  };
  const output = factorial(input);
  console.log(output);
}
