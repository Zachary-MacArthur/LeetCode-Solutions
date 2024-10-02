// //A square of squares
// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!
// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.
// Task
// Given an integral number, determine if it's a square number:

//p: integral whole number
//r: boolean true or false 
//e: isSquare(-1) returns false, isSquare(0) returns true, isSquare(25) returns true
//p: check if number is square -> if else statement -> check for square root -> integer that is the square of another integer *number cannot be negative


var isSquare = function(n){
    if(n < 0){
      return false
    } else if (Number.isInteger(Math.sqrt(n))){
      return true
    } else {
      return false
    }
   }