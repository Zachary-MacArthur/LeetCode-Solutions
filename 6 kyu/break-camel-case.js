//params: string
//return string
//ex:"camelCasing"  =>  "camel Casing"
// pseudocode: add a white space everytime time you see a capital

function solution(string) {
    let arr = string.split('')
    for (let i = 0; i < arr.length; i++){
      if(arr[i] === arr[i].toUpperCase()){
        arr[i] = ' ' + arr[i]  
      } 
   }
    return arr.join('')
  }