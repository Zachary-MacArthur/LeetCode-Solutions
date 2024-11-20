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