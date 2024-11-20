//vowelsCounter('anehizxcv') // will return 3

function vowelCount(text){
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let count = 0
    for (let letter of text.toLowerCase()){
        if (vowels.includes(letter)) {
            count++
        }
    }
    return count
    
}

// using regex
 function vowelsCounter(text) {
    let matchingInstances = text.match(/[aeriou]/gi);
    if (matchingInstances) {
        return matchingInstances.length
     } else {
        return 0
     }
 }