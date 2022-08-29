// A left rotation operation on an array of size n shifts each of the array's elements 1 
// unit to the left. 
// Given an integer, d, rotate the array that many steps left and return the result.


    function rotateLeft(d, arr) {
        let sliceArr = arr.slice(d)
        const finalArr = sliceArr.concat(arr.slice(0,d))
        return finalArr
    }