//Given a sentence, return the longest word in the string. E.glongestWord('Top Shelf Web Development Training on Scotch') 
//should return 'Development'

//params: a string
//return: longest word in string
//ex: longestWord('Top Shelf Web Development Training on Scotch') 
//should return 'Development'
//pesudocode: split into array
//set longest var = '', loop through words, if length > longest var set longest var to current word
//return longest var

function longestWord(text){
    let wordArray = text.split('')
    let maxLength = 0
    let result = ''
    for (let i = 0; i < wordArray.length; i++){
        if (wordArray[i].length > maxLength) {
            maxLength = wordArray[i].length
            result = wordArray[i]
        }
    }
    return result
}

//using .sort
function longestWord(text){
    var sortedArray = text.split('').sort((wordA, wordB) => wordB.length - wordA.length)

    return sortedArray[0]
}