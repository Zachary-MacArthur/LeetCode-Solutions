//The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// take in a string, ignore capitalization
// return either ( if letter appears only once or ) if more than once for each letter in series as a string
// ex: "din"      =>  "(((" "recede"   =>  "()()()"
// first convert word to lowercase
// use the spread the word into array
// map method and check if the word is in the array using the some() memthod
// tenary logic to map to '(' or ')'
// join the array to string and return
function duplicateEncode(word){
    let arr = word.toLowerCase()
    return [...arr].map((x, i, a) => a.some((x2, i2) => x == x2 && i != i2) ? ')' : '(').join('');
}

