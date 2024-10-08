//params: two arrays
//return: array
//ex: arrayDiff([1,2],[1]) == [2] arrayDiff([1,2,2,2,3],[2]) == [1,3]
//pseudocode: use the filter array method 
function arrayDiff(a, b) {
    return a.filter((x) => ! b.includes(x))
   }