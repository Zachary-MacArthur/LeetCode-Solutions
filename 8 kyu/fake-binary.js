//param: string of digits
//return: string of 0 and 1
//ex: Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
//pseudocode: splith the string into an array, then use a for loop and if else logic to add either 1 or 0 to the array with the push() method then return the new array joined into a string
function fakeBin(x){
    let arr = x.split('')
    let newArr = []
    for (let i = 0; i < arr.length; i++){
      if (arr[i] < 5){
    newArr.push(0)
      } else {
        newArr.push(1)
      }
    }
      return newArr.join('')
      
      }