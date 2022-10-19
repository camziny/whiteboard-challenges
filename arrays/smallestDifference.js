// Write a function that takes in two non-empty arrays of integers,
// finds the pair of numbers (one from each array) whose absolute
// difference is closest to zero, and returns an array containing
// these two numbers, with the number from the first array in the 
// first position.

// Note that the absolute difference of two integers is the distance
// between them on the real number line. For example, 
// the absolute difference of -5 and 5 is 10, and the absolute
// difference of -5 and -4 is 1.

// You can assume that there will only be one pair of numbers with 
// the smallest difference. 

const smallestDifference = (arrayOne, arrayTwo) => {
    arrayOne.sort((a, b) => a - b)
    arrayTwo.sort((a, b) => a - b)

    let i = 0
    let j = 0
    let diff = Infinity
    let result

    while(i < arrayOne.length && j < arrayTwo.length) {
        const first = arrayOne[i]
        const second = arrayTwo[j]

        if(first === second)
        return [first, second]

        let currentDiff = Math.abs(first - second)
        if(currentDiff < diff) {
            result = [first, second]
        }
        (second > first) ? i++ : j++
    }
    return result 
}