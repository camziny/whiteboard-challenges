// Complete the preOrder function in the editor below, which has 1 parameter:
// a pointer to the root of a binary tree. 
// It must print the values in the tree's preorder traversal 
// as a single line of space-separated values.

const preOrderTraversal = (root) => {
    let result = []
    const preOrder = (root) => {
        if(!root) {
            return null
        }
        result.push(root.val)
        preOrder(root.left)
        preOrder(root.right)
    }
    return result 
}