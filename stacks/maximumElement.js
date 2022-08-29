// You have an empty sequence, and you be given N queries. 
// Each query is one of these three types: 
// 1 x -Push the element x into the stack.
// 2 - Delete the element present at the top of the stack.
// 3 - Print the maximum element in the stack. 

const getMax = (operations) => {
const stack = [];
const result = [];
let maxValue = 0;
for (let i = 0; i < operations.length; i++) {
    let [first, second] = operations[i].split(' ');
    if (first === '1') {
        second = Number(second);
        stack.unshift(second);
        if (maxValue < second) {
            maxValue = second;
        }
    } else if (first === '2') {
        stack.shift();
        if (stack.length === 0) {
            maxValue = 0
        } else if (stack.length === 1) {
            maxValue = stack[0];
        } else {
            maxValue = Math.max.apply(null, stack);    
        }
    } else {
        result.push(maxValue);
    }
}
return result;
}