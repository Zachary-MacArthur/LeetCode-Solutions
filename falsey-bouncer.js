//Given an array, remove all falsy values from the array and return an array of only truthy values.
//falseBouncer([1,0, null, '', 5]) -> [1,5]


function falsyBouncer(array){
    let result = []
    for (value of array){
        if(value) {
            result.push(value)
        }
    }
    return result
}

//using filter

function falsyBouncer(array){
    return array.filter((value) => {
        return Boolean(value)
    })
}


