/*paramerters: string
return: number, length of shortest word in string
example: findShort("bitcoin take over the world maybe who knows perhaps"), 3;
pseudocode: split the string into array of words separated by a space. sort the array into shortest and return the length of the shortest word
*/
function findShort(s){
    let words = s.split(' ')
    let sorted = words.sort((a,b) => a.length - b.length)
    return sorted[0].length
  }