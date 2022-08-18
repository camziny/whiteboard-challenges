// A pangram is a string that contains every letter of the alphabet.
// Given a sentence determine whether it is a pangram in the English alphabet.
// Ignore case. Return either pangram or not pangram as appropriate.

function pangrams(s) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const str = s.toLowerCase()
    const setStr = new Set(str)
    const setAlphabet = new Set(alphabet)
    const checkSets = (a, b) => {
        let diff = new Set(a)
        for (let e of b) {
            diff.delete(e)
        }
        return diff
    }
    if (setAlphabet.size < 26) {
        return "not pangram"
    } else if (checkSets(setAlphabet, setStr).size === 0) {
        return "pangram"
    } else {
        return "not pangram"
    }
}
