// Given an array of integers, where all elements but one occur twice,
// find the unique element.

function lonelyinteger(a) {
  let unique = a.filter((n) => {
    return a.indexOf(n) === a.lastIndexOf(n);
  });

  return unique[0];
}
