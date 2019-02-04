const repeatString = function(string,iter) {
    let tempString = '';

    if (iter < 0) return 'ERROR'

    for (let i = 0; i < iter ; i++){
        tempString = tempString + string;
    }
    return tempString;
}

module.exports = repeatString
