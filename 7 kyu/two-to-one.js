//parameters: two strings
//return: sorted string of letters from string 1 and 2, no repeated letters
// example: a = "xyaabbbccccdefww" b = "xxxxyyyyabklmopq" -> longest(a, b) -> "abcdefklmopqwxy"
//pseudocode: split the strings into arrays of letters. push the letters to a new array if they are not already in the array using if else logic. join the new array into a string and return it
function longest(s1, s2) {
    let string = s1 + s2
    let combined = string.split('')
    let newArr = []
    for (let i = 0; i < combined.length; i++) {
      if (newArr.includes(combined[i]) === false) {
        newArr.push(combined[i])
      }
    }
    return newArr.sort().join('')
    
    }