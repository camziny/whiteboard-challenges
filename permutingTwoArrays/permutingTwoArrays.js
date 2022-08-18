// There are two n-element arrays of integers, A and B.
// Permute them into some A' and B' such that the relation A'[i] + B[i] > k holds
// for all i where 0 < i < n.
// There will be q queries consisting of A, B, and k. For each query, 
// return YES if some permutation A', B' satisfying the relation exists.
// Otherwise, return NO. 
// A valid A', B' is A' = [1, 0] and B' = [0, 2]: 1 + 0 > 1 and 0 + 2 > 1. Return YES.

function twoArrays(k, A, B) {
    let result = "YES"
    const aArray = A.sort((curr, next) => curr - next)
    const bArray = B.sort((curr, next) => next - curr)
    aArray.map((values, i) => {
        if (aArray[i] + bArray[i] < k)
            result = "NO"
    })
    return result
}