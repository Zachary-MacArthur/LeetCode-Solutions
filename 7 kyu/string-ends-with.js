//parameters: two strings
//return: true or false
//example: solution('abc', 'bc') // returns true
//pseudocode: use the endsWith method on the first string with the second string as a parameter

function solution(str, ending){
    return str.endsWith(ending)
  }