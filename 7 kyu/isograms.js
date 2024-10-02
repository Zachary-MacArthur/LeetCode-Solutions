/*
parameters: a string containging only letters
return: true or false
example: isIsogram("Dermatoglyphics") --> true
pseudocode: split the string into an array of separate letters and compare each letter to look for duplicates
*/

function isIsogram(str){
    let i;
    let j;
    str = str.toLowerCase();
    for(i = 0; i < str.length; ++i)
      for(j = i + 1; j < str.length; ++j)
        if(str[i] === str[j])
          return false;
    return true;
  }