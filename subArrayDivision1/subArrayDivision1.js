// Two children, Lily and Ron, want to share a chocolate bar. 
// Each of the squares has an integer on it.

// Lily decides to share a contiguous segment of the bar selected such that:

// The length of the segment matches Ron's birth month, and,
// The sum of the integers on the squares is equal to his birth day.
// Determine how many ways she can divide the chocolate.

function birthday(s, d, m) {
    let options = 0
    for(let i = 0; i < s.length; i++) {
        let subArray = s.slice(i, i + m)
        let sum = subArray.reduce((prev, curr) => prev + curr)
        if(sum == d) {
            options++
        }
    }
    return options
}