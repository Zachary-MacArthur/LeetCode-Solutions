//parameters: a string
//return: true false
//example pin('1234') --> true
//pseudocode: the length must be either 4 or 6 characters long and contain only numbers 0-9. check the string to see if it doesnt meet criteria and return false otherwise return true

function validatePIN (pin) {
      var n = pin.length;
    if( n != 4 && n != 6)
            return false;
    for (var i in pin)
            if (pin[i] > '9' || pin[i] < '0')
                return false;
    return true;
  }
  