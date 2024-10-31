//params: array of 3 starting nums, and n = number iterations of sequence
//return if n === 0 return empty array, otherwise return array sequence
//ex: [1, 1, 1],  8  = [1, 1 ,1, 3, 5, 9, 17, 31]
//pseudocode: 
function tribonacci(signature,n){
    if(n === 0){
      return []
    } else if (n === 1) {
      return signature.slice(0,1)
    } else if (n === 2){
      return signature.slice(0, 2)
    } else {
        for (let i = 2; i < n - 1; i++){
        signature.push(signature[i] + signature[(i - 1)] + signature[(i - 2)])
      }
      return signature
    }
  }