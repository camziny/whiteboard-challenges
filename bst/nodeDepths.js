// The distance between a node in Binary Tree and the tree's root is called the node's depth.
// Write a function that takes in a Binary Tree and returns the sum of it's nodes' depth.Binary
// Each BinaryTree node has an integer value, a left child node, and a right child node.
// Children nodes can either be BinaryTree nodes themselves or None / null.

const nodeDepths = (root) => {
  let result = 0;

  const traverse = (node = root, depth = 0) => {
    if (node) {
      traverse(node.left, depth + 1);
      traverse(node.right, depth + 1);
      result += depth;
    }
  };

  traverse();

  return result;
};
