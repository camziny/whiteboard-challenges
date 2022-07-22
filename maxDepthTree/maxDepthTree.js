// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along
// the longest path from the root node down to the farthest leaf node.

const maxDepth = (root) => {
  let maxNodes = (node, sum) => {
    if (node === null) {
      return sum;
    }
    return Math.max(
      maxNodes(node.left, sum + 1),
      maxNodes(node.right, sum + 1)
    );
  };
  return maxNodes(root, 0);
};
