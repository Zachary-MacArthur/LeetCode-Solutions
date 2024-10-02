//parameters: a string with the letters form a to z and length is >= 1
//return: a string with the number of errors formmatted like "x/x"
//example: s="aaabbbbhaijjjm" printer_error(s) => "0/14"
//pseudocode create a variable to store the number of errors and an array of error characters. check to see if the string contains an error characters and if so increment the errors and return a string of the results
function printerError(s) {
    let errors = 0;
    let errorChars = ["n","o","p","q","r","s","t","u","v","w","x","y","z"]
    for(let i = 0; i < s.length; i++){
      if(errorChars.includes(s[i]))
        errors++
    }
    return (errors) +"/" + s.length
}