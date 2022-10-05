// Write a function that takes in a "special" array and returns its product sum.
// A "special" array is a non-empty array that contains either integers or other
// "special" arrays. The product sum of a "special" array is the sum of its
// elements, where "special" arrays inside it are summed themselves and then
// multiplied by their level of depth.
// The depth of a "special" array is how far nested it is. For instance, the depth of []
// is 1; the depth of [[]] is 2; the depth of the innermost array in [[[]]] is 3.
// Therefore, the product sum of [x, y] is x + y; the product sum of [x, [y, z]] is
// x + 2 * (y + z); the product sum of [x, [y, [z]]] is x + 2 * (y + 3z).

const productSum = (array, depth = 1) => {
  let sum = 0;

  for (const e of array) {
    if (Array.isArray(e)) {
      sum += productSum(e, depth + 1);
    } else {
      sum += e;
    }
  }
  return sum * depth;
};
