//ex
//input n = 4 
//output: 3
//ex: f(4) = f(3) + f(2) = 2 + 1 = 3
//given n calculate F(n)

//fib --> 0, 1, 1, 2, 3
//fib --> num > that many nums in the fib sequence 
//return: last num in sequence
//ex
// 0, 1, 1, 2, 3, 5, 8, 13
//F(3) -> 2 
//F(4) -> 3
//console.log( fib(3), '2')

function fib(numsGenerated){
    let arr = [0,1]
    for (let i = 2; i <= numsGenerated; i++ ){
        let a = arr[i - 1]
        let b = arr[i -2]
        arr.push(a + b)
    }
    return sequence[numsGenerated]
}

/**
param: n number of setps
return: return n number of fib sequence
ex: Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

//  */
// var fib = function(n) {
//     let arr = [0,1]
//     for(let i = 2; i <= n; i++){
//         let a = i - 1
//         let b = i -2
//         arr.push(arr[a] + arr[b])
//     }
//     return arr[n]
// };
