//params: a string of words, each word contains one number from 1 - 9
//return: the same string sorted by the number
//ex: "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
//pseudocode: split the string in to words
//
function order(words){
    let arr = words.split(' ')
    let sorted = []
    if (words === ""){
      return ""
    }
    for (let i = 0; i < arr.length; i ++){
      if (arr[i].includes('1')){
        sorted.push(arr[i])
      }
    }
      for (let i = 0; i < arr.length; i ++){
      if (arr[i].includes('2')){
        sorted.push(arr[i])
      }
    }
      for (let i = 0; i < arr.length; i ++){
      if (arr[i].includes('3')){
        sorted.push(arr[i])
      }
    }  for (let i = 0; i < arr.length; i ++){
      if (arr[i].includes('4')){
        sorted.push(arr[i])
      }
    }  for (let i = 0; i < arr.length; i ++){
      if (arr[i].includes('5')){
        sorted.push(arr[i])
      }
    }  for (let i = 0; i < arr.length; i ++){
      if (arr[i].includes('6')){
        sorted.push(arr[i])
      }
    }  for (let i = 0; i < arr.length; i ++){
      if (arr[i].includes('7')){
        sorted.push(arr[i])
      }
    }  for (let i = 0; i < arr.length; i ++){
      if (arr[i].includes('8')){
        sorted.push(arr[i])
      }
    }
      for (let i = 0; i < arr.length; i ++){
      if (arr[i].includes('9')){
        sorted.push(arr[i])
      }
    }
    return sorted.join(' ')
  }

