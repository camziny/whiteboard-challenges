// Given an integer array nums where the elements are sorted in ascending order, convert it
// to a height-balanced binary search tree. 

const sortedArrayToBST = (nums) => {
    if(nums.length === 1) return new TreeNode(nums[0])
    if(nums.length === 0) return null

    let mid = Math.floor(nums.length / 2)
    let root = new TreeNode(nums[mid])

    let leftSub = nums.slice(0, mid)
    root.left = sortedArrayToBST(leftSub)

    let rightSub = nums.slice(mid + 1, nums.length)
    root.right = sortedArrayToBST(rightSub)

    return root
};