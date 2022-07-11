// Given the root of a binary tree, return the inorder traversal of its nodes' values.

const inorderTraversal = (root) => {
  let onNode = root;
  let result = [];

  while (onNode !== null) {
    let direct = onNode.left;

    if (onNode.left !== null) {
      while (direct.right !== null && direct.right !== onNode) {
        direct = direct.right;
      }
      if (direct.right === null) {
        direct.right = onNode;
        onNode = onNode.left;
      } else {
        direct.right = null;
        result.push(onNode.val);
        onNode = onNode.right;
      }
    } else {
      result.push(onNode.val);
      onNode = onNode.right;
    }
  }
  return result;
};
