// You are given a table with  rows and  columns.
// Each cell is colored with white or black.
// Considering the shapes created by black cells, what is the maximum border of these shapes?
// Border of a shape means the maximum number of consecutive black cells in any row or column
//  without any white cell in between.

// A shape is a set of connected cells. Two cells are connected if they share an edge.
// Note that no shape has a hole in it.

// Input format

// The first line contains  denoting the number of test cases.
// The first line of each test case contains integers
// denoting the number of rows and columns of the matrix.
// Here, '#' represents a black cell and '.' represents a white cell.
// Each of the next  lines contains  integers.

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
  let a = 1;
  for (let i = 1; i < parseInt(inputArray[0]) + 1; i++) {
    let table = inputArray[a].split(" ");
    let result = 0;

    for (let j = 1; j < parseInt(table[0]) + 1; j++) {
      let acc = 0;

      for (let k = 0; k < inputArray[j + a].length; k++) {
        const value = inputArray[j + a][k];
        if (value == "#") {
          acc++;
        }
      }
      if (result < acc) {
        result = acc;
      }
    }
    console.log(result);
    a = a + parseInt(table[0]) + 1;
  }
}
