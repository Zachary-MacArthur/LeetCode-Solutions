//params: string
//return: every letter in string replaced with numerical value (alphabet) ignore any non letters in string
//Input = "The sunset sets at twelve o' clock." => Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
//pseudocode: create alphabet array
//split text into an array and filter for letters only
function alphabetPosition(text) {
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let letters = text.toLowerCase().split('')
    let nums = []
    for(let i = 0; i < letters.length; i++){
      nums.push(alphabet.indexOf(letters[i]) + 1)
    }
    return nums.filter((char) => char != 0).join(' ')
  }