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
