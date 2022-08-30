// You have three stacks of cylinders where each cylinder has the same diameter, 
// but they may vary in height. 
// You can change the height of a stack by removing and discarding its topmost cylinder 
// any number of times.
// Find the maximum possible height of the stacks such that all of the stacks are 
// exactly the same height. This means you must remove zero or more cylinders 
// from the top of zero or more of the three stacks until they are all the same height, 
// then return the height.
// There are 4, 3 and 2 cylinders in the three stacks, with their heights in the three arrays.
// Remove the top 2 cylinders from h1 (heights = [1, 2]) and from h2 (heights = [1, 1])
// so that the three stacks all are 2 units tall. Return 2 as the answer. 

const equalStacks = (h1, h2, h3) => {
    let [s1, s2, s3] = [h1, h2, h3].map((arr) => arr.reduce((prev, curr) => prev + curr, 0))

    let minHeight = Math.min(s1, s2, s3)

    let indexH1 = 0
    let indexH2 = 0
    let indexH3 = 0

    while (s1 !== s2 || s2 !== s3) {
        while (s1 > minHeight && s1 > 0) {
            s1 -= h1[indexH1]
            indexH1++
        }
        while (s2 > minHeight && s2 > 0) {
            s2 -= h2[indexH2]
            indexH2++
        }
        while (s3 > minHeight && s3 > 0) {
            s3 -= h3[indexH3]
            indexH3++
        }
        minHeight = Math.min(s1, s2, s3)
    }
    return minHeight
}