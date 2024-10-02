/*
parameters: a string
return: boolean
example: XO("ooxx") => true
pseudocode: convert string to lowercase. create variable for x count and o count. split string into array of characters. iterate through array and add 1 to x for every x and likewaise for o. if x count eequals o count return true
*/
function XO(str) {
    let letters = str.toLowerCase().split('')
    let oCount = 0
    let xCount = 0
    for (let i = 0; i < letters.length; i++){
      if (letters[i] === 'o'){
        oCount += 1
      } else if (letters[i] === 'x'){
        xCount += 1
      }
    }
    return oCount === xCount ? true : false
  }