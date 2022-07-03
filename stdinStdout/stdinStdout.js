let input1 = 0;
let input2 = "";
let stdin_input = "";
process.stdin.on("data", function (input) {
  stdin_input += input;
  input1 = stdin_input.split("\n")[0];
  input2 = stdin_input.split("\n")[1];

  console.log(input1 * 2);
  console.log(input2);
});
