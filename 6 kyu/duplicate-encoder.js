//params: takes in a string
// return: a new string made up of ( and), if character appears once replace with ( 
//if it appears more than once replace with )
//ignore capitalization
//ex: "din"      =>  "(((" "recede"   =>  "()()()"
//pseudocode: split string into an array
// use the map method and index of and lastindex of to check for duplicates

function duplicateEncode(word){
    let arr = word.toLowerCase().split('')
    let map = arr.map((x) => arr.indexOf(x) === arr.lastIndexOf(x) ? x ='(' : x = ')')
    return map.join('')
   }
 