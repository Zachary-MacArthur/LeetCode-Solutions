// Given a sentence containing two or more words, return the equivalent of the sentence when capitalized. E.g
// capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!'

function capSentence(text) {
    let wordsArray = text.toLowerCase().split(' ')
    let capsArray = []

    wordsArray.forEach(word => {
        capsArray.push(word[0].toUpperCase() + word.slice(1))
    });

    return capsArray.join(' ')
}

//or with map

function capSentence(text) {
    let wordsArray = text.toLowerCase().split(' ')
    let capsArray = wordsArray.map(word=>{
        return word[0].toUpperCase() + word.slice(1)
    })
    return capsArray.join(' ')
}

//using replace()

function capSentence(text) {
    let wordsArray = text.toLowerCase().split(' ')

    let capsArray = wordsArray.map( word=>{
        return  word.replace(word[0], word[0].toUpperCase())
    })

    return capsArray.join(' ')
    }