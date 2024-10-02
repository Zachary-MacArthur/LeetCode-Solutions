//param: array
//return: integer
//ex: [1, 1, 2] ==> 2
// sort the array then check to see if the first indexs are the same value if they are return the last index if not return the zero index
function stray(numbers) {
    let sorted = numbers.sort((a,b) => a - b)
    if (sorted[0] === sorted[1]){
      return sorted[(sorted.length - 1)]
    } else return sorted[0]
  }