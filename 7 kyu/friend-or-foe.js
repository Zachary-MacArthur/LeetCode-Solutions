//params: arrray of strings
//return: array of srtings with only 4 letters
//example: Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
//pseudocode: use the filter method to create a new array with only four letter names

function friend(friends){
    let fourLetters = friends.filter((name) => name.length === 4)
    return fourLetters
      }