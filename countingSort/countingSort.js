// Given a list of integers, count and return the number of times each value appears as an array of integers.

function countingSort(arr) {
    let frequency = new Array(100).fill(0)
    for(const n of arr) {
        frequency[n]++
    }
    return frequency
}