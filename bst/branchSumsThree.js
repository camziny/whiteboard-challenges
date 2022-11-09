// Write a function that takes in a Binary Tree and returns a list of its branch
// sums ordered from leftmost branch sum to rightmost branch sum.
// A branch sum is the sum of all values in a Binary Tree branch. A Binary Tree
// branch is a path of nodes in a tree that starts at the root node and ends at
// any leaf node.
// Each binary tree node has an integer value, a left child node, and a right child node.
// Children nodes can either be BinaryTree nodes themselves or None / null.

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const branchSums = (root) => {
  if (!root) return;
  return helper(root, root.value);
};

const helper = (root, total, sumsArray = []) => {
  if (!root.left && !root.right) {
    sumsArray.push(total);
  }

  if (root.left) {
    helper(root.left, total + root.left.value, sumsArray);
  }

  if (root.right) {
    helper(root.right, total + root.right.value, sumsArray);
  }

  return sumsArray;
};
