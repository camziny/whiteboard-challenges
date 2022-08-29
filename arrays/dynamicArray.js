// Declare a 2-dimensional array, arr, of n empty arrays. All arrays are zero indexed. 
// Declare an integer, last Answer, and initialize it to 0.
// There are 2 types of queries, given as an array of strings for you to parse:
// Query: 1 x y
// 1. let idx = ((x^lastAnswer) % n)
// 2. Append the value arr[idx][y % size(arr[idx])] to lastAnswer
// 3. Store the new value of last Answer to an answers array. 

function dynamicArray(n, queries) {
    let lastAnswer = 0
    let arr = []
    for(let i=0;i<n;i++){
        arr[i]= new Array()
    }
    
    let answers = [];
    for(let i=0;i<queries.length;i++){
        let idx = (queries[i][1] ^ lastAnswer) % n
        if(queries[i][0]==1){
        arr[idx].push(queries[i][2]) 
        }
        else{
            let b = queries[i][2]%(arr[idx].length)
            lastAnswer =  arr[idx][b];
            answers.push(lastAnswer);

        }
    }
    return answers
}