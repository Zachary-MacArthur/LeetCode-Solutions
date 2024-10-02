/* 
parameters: number of petals
example: lovefunc(5,6) returns true
return: boolean
pseudocode: compare the two numbers using modulus to check if one is even and one is not and return true, otherwise return false
*/
function lovefunc(flower1, flower2){
    if(flower1 % 2 == 0 && flower2 % 2 != 0){
      return true
    } else if (flower2 % 2 == 0 && flower1 % 2 != 0){
      return true
    } else {
      return false
      }
    }