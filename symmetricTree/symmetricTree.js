// Given the root of a binary tree, check whether it is a mirror of itself
// (i.e., symmetric around its center).

const isSymmetric = (root) => {
  if (root === null) {
    return true;
  }
  return mirror(root.left, root.right);
};

const mirror = (treeOne, treeTwo) => {
  if (treeOne === null || treeTwo === null) {
    return treeOne === treeTwo;
  }
  if (treeOne.val !== treeTwo.val) {
    return false;
  }
  return (
    mirror(treeOne.left, treeTwo.right) && mirror(treeOne.right, treeTwo.left)
  );
};
