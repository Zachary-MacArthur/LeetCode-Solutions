// takes in a array of names as param
// returns a string of "(the people who like)" + "likes this" if > four people like it returns " (first two names)" + " number others like this" if empty array = "no one likes this"
// ex: ["Peter"] -->  "Peter likes this"
// set up three cases: empty array, array length < 4, array length > 4
// if names length = 0 return ' no one likes this'
// if names length < 4 return convert array to string join with ' and ' + likes this
// if length > 4 return join names[0] + names[1] + names.length -2 + likes this
function likes(names) {
    if (names.length >= 4) {
       return `${names[0]}, ${names[1]} and ` + `${(names.length - 2)}` + ' others like this' 
     } else if (names.length === 3){
       return `${names[0]}, ${names[1]} and ${names[2]} like this`
     }  else if (names.length === 2){
       return `${names[0]} and ${names[1]} like this`
     } else if (names.length === 1){
       return `${names[0]} likes this`
       } else {
         return 'no one likes this'
     }
 }