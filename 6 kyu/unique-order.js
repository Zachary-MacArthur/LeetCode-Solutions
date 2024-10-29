//params: string or array of characters case sensitive
//return: an array of in which the same letter does not occur before or after each other
//ex: uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
//pseudocode: check for string if true use split to array
// create newArr to add to []
//first push zero index
//next make loop, if index -1 and index + 1 != index push to newArr
var uniqueInOrder=function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}