//Receiving a sentence, a word in the sentence and a replacement for that word as arguments, perform a search and replace on the sentence using the arguments provided and return the new sentence.
//params: a string of words, word to remove and word to add
//return: new sentence with word replaced
//ex searchReplace("He is Sleeping on the couch", "Sleeping", "sitting") 
// should return "He is Sitting on the couch"
//pseudocode:use the replace() method

function searchReplace(str, word, newWord) {
    if (word[0] === word[0].toUpperCase() ) {
        newWord = newWord[0].toUpperCase() + newWord.slice(1)
    }
    return str.replace(word, newWord)
}