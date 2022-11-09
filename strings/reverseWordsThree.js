// Given a string s, reverse the order of characters in each word within a sentence while still
// preserving whitespace and initial word order. 

const reverseWords = (s) => {
    const reverse = (word) => {
        let length = word.length
        let result = ""
        for(let i = 0; i < length; i++) {
            result += word[length - i - 1]
        }
        return result   
    }

    const sReverseArray = s.split(" ").map(reverse).join(" ")
    return sReverseArray
};

