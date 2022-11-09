// Given the root of an n-ary tree, return the preorder traversal of its nodes' values.
// Nary-Tree input serialization is represented in their level order traversal. Each group
// of children is separated by the null value.

const preorder = (root, result = []) => {
  if (!root) return result;
  result.push(root.val);
  for (const child of root.children) preorder(child, result);
  return result;
};
