//one arg string 
//return a string
//ex "riley" --> "Hello Riley!"
//capitalize first letter of name - charAt(0) to uppercase + slice(1)to lowercase
//add 'Hello ' + name + '!'

var greet = function(name) {
    return 'Hello ' + name.charAt(0).toUpperCase() + name.toLowerCase().slice(1) + '!'
    };