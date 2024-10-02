//params: string
//return : string reversed
//ex: "This is an example!" ==> "sihT si na !elpmaxe"
//pseudocode: split the string into an array of words then split words into array of letters and reverse and join
function reverseWords(str) {
    return str.split(' ').map((x) => x.split('').reverse().join('')).join(' ')
    }