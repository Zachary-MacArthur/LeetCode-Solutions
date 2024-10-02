//params: array of integers
//return: 'even' or 'odd'
//ex: Input: [0] => 'even' Input: [0, 1, 4] => 'odd'
//pseudocode: add all numbers in the array together using using the reduce method, next using modulus check to see if the sum is divisible by 2
function oddOrEven(array) {
    let sum = array.reduce((acc, a) => acc + a, 0)
    return sum % 2 === 0 ? 'even' : 'odd'
    }