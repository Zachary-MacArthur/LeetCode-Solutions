//Translate the provided string to Pig Latin by following the rules below
//1. For words that begin with consonant sounds, the consonant before the initial vowel should be moved to the end of the word sequence and "ay" affixed. E.g
//"pig" = "igpay"
//2. For words that begin with consonant clusters, the clusters should be moved to the end of the word sequence and "ay" affixed. E.g "glove" = "oveglay"
//3. For words that begin with vowel sounds, simply add "way" to the end of the word. 
//E.g"explain" = "explainway”


function pigLatin(str) {

    str = str.toLowerCase()
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let vowelIndex = 0

    if (vowels.includes(str[0])){
        return str + 'way'
    } else {
        for (let char of str) {
            if (vowels.includes(char)) {
                vowelIndex = str.indexOf(char);
                break;
            }
        }
        return str.slice(vowelIndex) + str.slic(0, vowelIndex) + 'ay'
    }
}


