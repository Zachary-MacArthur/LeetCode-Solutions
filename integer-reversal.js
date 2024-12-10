//Given an integer, return an integer that has the reverse ordering of that which was received
//ex: reverseInteger(-123_ -> return -321)

function reverseString(text) {
    return [...text].reduce((acc, char) => char + acc, '')
    
}

//convert to string 
num.toString()
//reverse

function reverseString(text) {
    return [...text].reduce((acc, char) => char + acc, '')
}
let reversedString = reverseString(num.toString)

//convert to int
let reversedNumber = parseInt(reversedString)

return (reversedNumber * Math.sign(num))

// complete solution

function reverseString(text) {
    return [...text].reduce((acc, char) => char + acc, '')
}

function reverseInteger(num){
    let reversedNumber = parseInt(reverseString(num.toString()))
    return (reversedNumber * Math.sign(num))
}

