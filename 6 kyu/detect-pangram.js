//params: sentence as a string
// return: true or false if pangram
//ex:  "The quick brown fox jumps over the lazy dog" true
//pseudocode: create an object, split string into letters
// to lowercase
//for loop and check each 

function isPangram(string){
    let alpha = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let letters = string.toLowerCase().split('')
    for (let i = 0; i < alpha.length; i++){
      if (!letters.includes(alpha[i])){
        return false
      }
    }
     return true                    
  }