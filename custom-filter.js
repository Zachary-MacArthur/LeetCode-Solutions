//Return the first element from the given array that passes the test specified by the provided function. Both the array and function are passed into the function 

function arrayFilter(arr, func){
    for ( let elem of arr) {
        if (func(elem)) {
            return elem
        }
    }
    return undefined 
}

//using filter

function arrayFilter(arr, func) {
    let filteredArray = arr.filter(func);
    return filteredArray[0] ? filteredArray[0] : undefined;
}

// using find()

function arrayfilter(arr, func) {
    return arr.find(func)
}

