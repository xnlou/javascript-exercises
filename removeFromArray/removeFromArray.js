const removeFromArray = function(array) {
    // Loop for number of arguments
        for (i = 1; i < arguments.length; i++) {
            // Index of gives location of argument within array
            var argRemove = array.indexOf(arguments[i]);
            // Removing based on index
            if (array.includes(arguments[i])) {
                   array.splice(argRemove, 1);
               }
          }
          return array;
    
}
module.exports = removeFromArray