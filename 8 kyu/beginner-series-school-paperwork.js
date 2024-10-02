//params: n number of classmaters and m number of pages
// return: number of blank pages needed
// ex: n= 5, m=5: 25
// pseudo code: multiply the number of pages by the number of students and return 
function paperwork(n, m) {
    if ( n < 0 || m < 0) {
      return 0} else
        return n * m
  }
  