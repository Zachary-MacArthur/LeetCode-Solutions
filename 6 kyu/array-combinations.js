//params: an array of arrays
//return: num - num of possible different arrays 
// ex: solve([[1,2],[4],[5,6]]) = 4
// pseudocode: put each sub array into set to delete duplicates
// mutliply the set length together to get result using reduce

function solve(arr) {
    return arr.reduce((acc, c) => acc * new Set(c).size, 1)
    };