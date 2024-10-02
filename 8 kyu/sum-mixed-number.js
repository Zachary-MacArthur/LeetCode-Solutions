//params array of integers
//return sum of the array values
// ex Return your answer as a number.
//pseudocode use the reduce array method to get the sum 
function sumMix(x){
    return x.reduce((acc, current) => acc + Number(current), 0)
    }