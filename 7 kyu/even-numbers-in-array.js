//params array of nums
// return new array 
//ex (3) ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
//pseudocode use filter on original array to get a new array of only even, then use slice to return 'number' indexes starting from the end
function evenNumbers(array, number) {
    const evens = array.filter((x) => x % 2 === 0)
    return evens.slice(-number)
  }