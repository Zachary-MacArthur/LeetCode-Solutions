//param: array of nums 
//return: num ( occurs odd number of times in array)
//ex [1,1,2] should return 2, because it occurs 1 time (which is odd).
//pseudocode: loop through array twice and compare nubmers to find number of occurances if loop 1 = loop 2
// increment count and check for odd number if odd return
function findOdd(A) {
    let count = 0;
     for (let i = 0; i < A.length; i++){
       for (let j = 0; j < A.length; j++){
         if (A[i] === A[j]) {
           count++
          }
         }
         if (count % 2 != 0){
           return A[i]
       }
     }
    
   }