//array  of arrays
//return sum integer
//ex [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1, [ 5, 6, 7, 8, 9 ]  , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20      #  minimum value of row is 5
//pseudocode: find the minimum of each array and add them all
function sumOfMinimums(arr) {
    let sum = 0
    for(let i = 0; i < arr.length; i++){
    sum += Math.min(...arr[i]) 
  }
    return sum
    }