// Write a function that takes in a sorted array of integers as well as a target
// integer. The function should use the Binary Search algorithm to determine if
// the target integer is contained in the array and should return its index if it
// is, otherwise -1.

const binarySearch = (array, target) => {
    let left = 0
    let right = array.length
  
    while(left <= right) {
    const mid = Math.floor((left + right) / 2)
    if(array[mid] === target) return mid
    else if(array[mid] < target) left = mid + 1
    else right = mid - 1
    }
    return -1
    }