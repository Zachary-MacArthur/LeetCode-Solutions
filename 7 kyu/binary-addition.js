//parameters: two numbers
//return: a string containing the sum of the two numbers converted to binary
//example: 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
//pseudocode: first add the two numbers and store in variable. convert the sum to binary using the toString() method passing 2 into the parmeter

function addBinary(a,b) {
    let sum = a + b
    return sum.toString(2)
    }
    