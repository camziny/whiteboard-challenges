const test = () => {
  const constNum = 0;
  let letNum = 0;
  console.log("constNum", constNum);
  console.log("letNum", letNum);
};
test();
/*
"constNum" 0
"letNum" 0
 */

const testTwo = () => {
  if (true) {
    const cNum = 0;
    let lNum = 0;
  }

  console.log("cNum", cNum);
  console.log("lNum", lNum);
};

testTwo();
/*
cNum 0
ReferenceError: lNum is not defined
*/
