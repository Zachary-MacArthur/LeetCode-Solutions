/*
parameters: an array of integers
return: a new array 
example: maps([1,2,3]) ---> [2,4,6]
pseudocode: use the map method on the original array and multply each index by 2
*/

function maps(x){
    return x.map(x => x * 2)
    }