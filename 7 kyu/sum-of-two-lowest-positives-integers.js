//param: an array of positive whole nums
//return: the sum of the lowest two values in the array
//example: [19, 5, 42, 2, 77], the output should be 7
//pseudocode: sort the array into ascending order with the sort method. return the sum of the 0th and 1st indexes

function sumTwoSmallestNumbers(numbers) {  
    let sorted = numbers.sort((a,b) => a - b)
    return sorted[0] + sorted[1]
  }