// Given a string of text, return true or false indicating whether or not the text is a palindrome. e.g

function palindromeChecker(text){
    let reversedText = text.toLowerCase().split('').join('')
    return text === reversedText
}

