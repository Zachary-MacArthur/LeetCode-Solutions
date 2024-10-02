//params: two arrays
//return integer
//ex Correct answer    |    Student's answer   |   Result         
//params: create a score variable to accumulate, use a for loop and if else logic to compare the two arrays
function checkExam(array1, array2) {
    let score = 0
    for(let i = 0; i < array1.length; i++){
     if (array1[i] === array2[i]){
       score += 4
     } else if ( array2[i] === ""){
       score += 0
     } else if ( array1[i] !== array2[i]){
       score -= 1
     }
    }
     if (score <= 0 ){
       return 0
     } else {
       return score
     }
   }