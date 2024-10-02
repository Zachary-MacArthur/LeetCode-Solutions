// p: two words separated by one space
// r: two capital letters, first letter of each word
// e: sam harris => S.H
// p: split the name into first name and last name. return first letter of each name in proper order separated by a dot

function abbrevName(name){

    let arr = name.split(' ')
    let first = arr[0].toUpperCase()
    let last = arr[1].toUpperCase()
    return first[0] + '.' + last[0]
}