//params: array of nums
//return: array with two nums
//ex rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
//pseudocode: create two new arrays, map the even nums to one and odd to another
// reduce to add each array an dpush the results into a new array and return
function rowWeights(array){
    let odd = []
    let even = []
    for(let i= 0; i < array.length; i++){
      if( i % 2 === 0){
        even.push(array[i])
      } else {
        odd.push(array[i])
      }
    }
    
    let sum1 = odd.reduce((acc, i) => acc + i, 0)
    let sum2 = even.reduce((acc, i) => acc + i, 0)
    let arr = []
    arr.push(sum2)
    arr.push(sum1)
    return arr
  }