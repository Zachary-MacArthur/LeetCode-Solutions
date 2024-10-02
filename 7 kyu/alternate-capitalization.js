//params: string of capital letters 
//return: array with two strings as 0 and 1 index
//ex: For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']
//pseudocode: create a var holding empty array and create a var for each new string
//split() s into array and loop through the array pushing odd index to each new array
function capitalize(s){
    let arr = []
    let stringA = []
    let stringB = []
    let newString = s.split('')
    for(let i = 0 ; i < newString.length; i++){
      if (i === 0){
        stringA.push(newString[0].toUpperCase())
      } else if(i % 2 === 0 ){
        stringA.push(newString[i].toUpperCase())
      } else if (i % 2 != 0){
        stringA.push(newString[i])
      }
    }
    for(let i = 0 ; i < newString.length; i++){
      if (i === 0){
        stringB.push(newString[0])
      } else if(i % 2 === 0 ){
        stringB.push(newString[i])
      } else if (i % 2 != 0){
        stringB.push(newString[i].toUpperCase())
      }
    }
    arr.push(stringA.join(''))
    arr.push(stringB.join(''))
    return arr
  };