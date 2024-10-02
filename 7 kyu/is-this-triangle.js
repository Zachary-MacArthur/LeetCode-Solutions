//parameters: three integer values
//return: true or false
// example: 2,2,2 -> true  0,2,3 -> false
//pseudocode: check to see if the numbers fit the triangle equality formula and return true if the sum of the first two sides is greater than the third check all combinations

function isTriangle(a,b,c){
    let sum1 = a + b
    let sum2 = a + c
    let sum3 = b + c
    if (sum1 > c && sum2 > b && sum3 > a){
      return true
      } else
      {
        return false}
      }