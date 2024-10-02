// P: a random non-negative number
// R: return an array of the digits in reverse order
// E: ex. digitize(35231) = [1,3,2,5,3]
// P: convert number to a string and split the stsring into digits. map the digits into an array and convert them back to numbers. reverse the order of the array


function digitize(n) {
    return n.toString().split('').map(Number).reverse()
   }