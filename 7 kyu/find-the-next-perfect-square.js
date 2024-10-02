//params: a number
//return: the next biggest perfect square number
// example: 121 --> 144
//pseudocode: check if the number is a perfect square 
//if square root of the variable is a whole number then, it is a perfect square
// if it is not return -1 
//if it is a perfect square, 
//increment whatever the square root of that number is by one and return that number squared

function findNextSquare(sq) {
    if (Math.sqrt(sq) % 1 === 0){
      return (Math.sqrt(sq) + 1) ** 2
    } else {
      return -1
      }
  }