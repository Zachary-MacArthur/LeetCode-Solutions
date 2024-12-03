//Given an array and a chunk size, divide the array into many sub-arrays where each sub-array has the specified length. 
//for loop

function chunkArray( array, size) {
    let result = []
    for (value of array) {
        let lastArray = result[result.length -1]
        if(!lastArray || lastArray.length == size) {
            result.push([value])
        } else {
            lastArray.push(value)
        }
    }
    return result
}

//splice()
function chunckArray(array , size) {
    let result = []
    let arrayCopy = [...array]
    while (arrayCopy.length > 0 ){
        result.push(arrayCopy.splice(0, size))
    }
    return result
}

//recursion
function chunkArray (array, size) {
    if (array.length <= size) {
        return [array]
    }
    return [arr.slice(0,size), ... chunkArray(array.slice(size), size)]
}