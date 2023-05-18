const nodeDepths = (root) => {
  let total = 0;
  const traverse = (node = root, depth = 0) => {
    if (node) {
      traverse(node.left, depth + 1);
      traverse(node.right, depth + 1);
      total += depth;
    }
  };
  traverse();
  return total;
};

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
