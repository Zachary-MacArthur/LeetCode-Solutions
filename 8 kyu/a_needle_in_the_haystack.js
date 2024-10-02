/*
parameters: an array of strings
return: the index containing the string 'haystack' and the index
examples: ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
pseudocode: loop through the array using a for loop. check each index to see if it contains the array 'haystack', if so, return "found the needle at position " plus the index it found the needle 
*/
function findNeedle(haystack) {
    for (let i = 0; i<haystack.length; i++){
       if (haystack[i] === 'needle') {
       return `found the needle at position ${i}`
       }
    }
  }