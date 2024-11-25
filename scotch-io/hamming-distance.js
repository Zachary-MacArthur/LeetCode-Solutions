//hamming distance = minimun number of changes to get from one string to another

//Given two strings of equal length, calculate and return the the hamming distance. Ex hammingDistance('rover', 'river') // should return 1

//params 2 stringsof equal length
//return integer num of changes made
//ex ('rover', 'river') // should return 1
//pseudocode: convert to arrays with split
//loop through array and compare each letter if letter != increment counter

function hammingDistance(stingA, stsringB){
    let result = 0
    let a = stringA.split('')
    let b = stringB.split('')

    for ( let i = 0; i < stringA.length; i++){
        if (a[i].toLowerCaser() != b[i].toLowerCase()) {
            result++
        }
    }
    return result
}
