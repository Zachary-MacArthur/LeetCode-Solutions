// params: a string
// return boolean
// ex: "foefet" is an anagram of "toffee"
// pseudocode: take each parameter and use split() to get characters, then sort alphebetically then join, 
// compare the two strings and test for equlity
var isAnagram = function(test, original) {
    if (test.toLowerCase().split('').sort().join('') == original.toLowerCase().split('').sort().join('')){
      return true
    } else {
      return false
    }}