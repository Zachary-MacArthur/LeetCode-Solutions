//params: array of ones and zeroes
//return: and integer
//ex [0, 0, 0, 1] => 1
//pseudocode: convert the array into a string using join() method then convert the string into a integer using parseInt()
const binaryArrayToNumber = arr => {
    let string = arr.join('')
    return parseInt(string, 2)
  };