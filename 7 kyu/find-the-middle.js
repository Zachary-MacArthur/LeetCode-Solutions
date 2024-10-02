//params: array of 3 numbers
//return: a number - index of the number that is in the middle of the three params
//ex: gimme([2, 3, 1]) => 0
//pseudocode: use if else logic to determine which number the middle value and return that index
function gimme (triplet) {
    if (triplet[0] < triplet [1] && triplet[0] > triplet[2]){
      return 0
    } else if (triplet[0] < triplet[2] && triplet[0] > triplet[1]){
      return 0
    } else if (triplet[1] < triplet[0] && triplet[1] > triplet[2]){
      return 1
    } else if ( triplet[1] < triplet[2] && triplet[1] > triplet[0]){
      return 1
    } else {
      return 2
    }
  }