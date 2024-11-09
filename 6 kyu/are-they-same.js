//params two arrays
//return: true or false
//ex: a = [121, 144, 19, 161, 19, 144, 19, 11]  b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
//pseudocode: create a hashmap obj {}

function comp(array1, array2){
    if (array1 === [] && array2 === []){
      return true
    }
      let hashMap = {}
    for (let i = 0; i < array1.length; i++){
      let squared = array1[i] * array1[i]
      hashMap[squared] = true
    }
      for (let i = 0; i < array2.length; i++){
        if (!hashMap[array2[i]]){
          return false
        } else {
          return true
        }
      }