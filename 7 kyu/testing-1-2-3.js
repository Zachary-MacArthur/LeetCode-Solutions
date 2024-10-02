//params: an array  of strings
//return: an array of key value pairs string an dnumber
//ex ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
//pseudocode: use the map array function to concatenate the number onto each string
var number=function(array){
    return array.map((x, index) => String(index + 1 + ': ' + x) )
  }