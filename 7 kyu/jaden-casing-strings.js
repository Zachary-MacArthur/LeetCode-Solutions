
/*
parameters a string
return a new string
example toJadenCase(How can mirrors be real if our eyes aren't real) -  How Can Mirrors Be Real If Our Eyes Aren't Real
pseudocode first split the string with   to make an array of words, 
            then use map() to create a new array with the first character of every 'word' capitalized
            use join to return the full string 
*/
String.prototype.toJadenCase = function () { 
  return this.split( ).map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join( );
}