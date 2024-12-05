//given two or more arrays writ ea function that combines their elements into one array without any repitition
// mergeArrays([1,2,3,3,3], [1,4,5,2]) -> [1,2,3,4,5]

function mergeArrays(...arrays) {
    let jointArray = []
    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    })
}

// using sets

function mergeArrays(...arrays) {
    let jointArray = []

    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    })
    return [...new Set([...jointArray])]

}

//arrayfrom

function mergeArrays(...arrays) {
    let jointArray = []

    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    })
    return Array.from(new Set([...jointArray]))
}

// using filter()

function mergeArrays(...arrays) {
    let jointArray = []

    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    })
    const uniqueArray = jointArray.filter((item,index) => jointArray.indexOf(item) === index)
    return uniqueArray
}

