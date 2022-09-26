// Write a function that takes in a Binary Tree and returns a list of its branch
// sums ordered from leftmost branch sum to rightmost branch sum.
// A branch sum is the sum of all values in a Binary Tree branch. A Binary Tree
// branch is a path of nodes in a tree that starts at the root node and ends at
// any leaf node.
// Each binary tree node has an integer value, a left child node, and a right child node.
// Children nodes can either be BinaryTree nodes themselves or None / null.

const branchSums = (root, sum = 0, sums = []) => {
  const currSum = root.value + sum;

  if (!root.left && !root.right) {
    sums.push(currSum);
  }

  if (root.left) {
    branchSums(root.left, currSum, sums);
  }

  if (root.right) {
    branchSums(root.right, currSum, sums);
  }

  return sums;
};
