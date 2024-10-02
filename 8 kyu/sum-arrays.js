// params: array of numbers
// return sum of numbers
//ex: Input: [1, 5.2, 4, 0, -1] => 9.2
//pseudocode: use the reduce method on the array and return the sum
function sum (numbers) {
    return numbers.reduce((acc, a) => acc + a, 0)  
  };