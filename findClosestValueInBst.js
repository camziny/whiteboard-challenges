const findClosestValueInBst = (tree, target) => {
  let currentNode = tree;
  let closest = Infinity;

  while (currentNode !== null) {
    if (Math.abs(target - currentNode.value) < Math.abs(target - closest)) {
      closest = currentNode.value;
    }
    if (currentNode.value > target) {
      currentNode = currentNode.left;
    } else {
      currentNode = currentNode.right;
    }
  }
  return closest;
};
