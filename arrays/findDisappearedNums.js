// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of
// all the integers in the range [1, n] that do not appear in nums. 

const findDisappearedNumbers = (nums) => {
    let missing = []
    let set = new Set()

    for(const num of nums) {
        if(!set.has(num)) set.add(num)
    }

    let n = 1
    while(n <= nums.length) {
        if(!set.has(n)) missing.push(n)
        n++
    }
    return missing 
};