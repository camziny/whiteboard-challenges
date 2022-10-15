// Write a function that takes in a non-empty array of distinct integers and an integer
// representing a target sum. The function should find all triplets in the array that sum
// up to the target sum and return a two-dimensional array of all these triplets. 
// The numbers in each triplet should be ordered in ascending order, and the triplets 
// themselves should be ordered in ascending order with respect to the numbers they hold. 

// If no three numbers sum up to the target sum, the function should return an empty array. 


const threeNumberSum = (array, targetSum) => {
    array.sort((a,b) => a - b)
    let result = []
    for(let i = 0; i < array.length - 2; i++) {
    let j = i + 1
    let k = array.length - 1
    while(j < k) {
    const sum = array[i] + array[j] + array[k]
    if(sum === targetSum) result.push([array[i], array[j++], array[k--]])
    else if(sum < targetSum) j += 1 
    else if(sum > targetSum) k -= 1 
    }
    }
    return result 
}