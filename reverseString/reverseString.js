const reverseString = function(input) {
    let strLen = input.length ;
    let rev = '';

    for (i=0; i < strLen ; i++){
        rev = rev + input[strLen -1 - i]
    }
    return rev;
}

module.exports = reverseString
