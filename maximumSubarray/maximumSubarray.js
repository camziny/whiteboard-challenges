//Given an integer array nums, find the contiguous subarray
//  (containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

const maxSubArray = (nums) => {
  if (nums.length === 1) return nums[0];
  let maxVal = nums[0];
  let acc = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let calc = Math.max(nums[i], acc + nums[i]);
    if (calc > maxVal) maxVal = calc;
    acc = calc;
  }
  return maxVal;
};
