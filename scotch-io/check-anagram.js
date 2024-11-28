//Given two strings, write an algorithm to check if they are anagrams of each other. Return true if they pass the test and false if they don't. E.g

//isAnagram('silent', 'listen') // should return true
function isAnagram(stringA, stringB) {
    const sanitzeString = function(str){
        return str.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('')
    }
    return sanitzeString(stringA) == sanitizeString(stringB)
}

//or with map

function isAnagram(stringA, stringB) {



function createCharMap(text) {
    let charMap = {}
    for (let char of text) {
        if (charMap.hasOwnProperty(char)) {
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    }
    return charMap
}

if (stringA.length === stsringB.length) {
    let stringAMap = createCharMap(stringA)
    let srtingBMap = createCharMap(stringB)
    for (let char in stringAMap) {
        if (stringAMap[char] !== stringBMap[char]) {
            return false
        }
    }

return true
} else {
    return false
}
}
