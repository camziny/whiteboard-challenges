process.stdin.resume();
process.stdin.setEncoding("utf-8");

var input_ = "";

process.stdin.on("data", function (data) {
  input_ += data.toString().trim();
  input_ += "\n";
});

function count_like_dislike(A, P) {
  const arrA = A.split("");
  const arrP = P.split("");
  let result = 0;
  for (let i = arrA.length - 1; i >= 0; i--) {
    if (arrA[i] === arrP[i]) {
      result++;
    }
  }
  return result;
}

process.on("end", function () {
  input_ = input_.replace(/\n$/, "");
  input_ = input_.split("\n");
  var A = input_.shift();
  var P = input_.shift();

  var out_ = count_like_dislike(A, P);
  process.stdout.write(JSON.stringify(out_));

  process.exit();
});
