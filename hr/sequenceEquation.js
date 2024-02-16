function permutationEquation(p) {
  let result = [];
  for (let x = 1; x <= p.length; x++) {
    let index = p.indexOf(x) + 1;
    let y = p.indexOf(index) + 1;
    result.push(y);
  }
  return result;
}
