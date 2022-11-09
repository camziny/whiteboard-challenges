// Give the root of a binary tree, invert the tree, and return its root.

const invertTree = (root) => {
  if (root) {
    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    invertTree(root.left);
    invertTree(root.right);
  }
  return root;
};
