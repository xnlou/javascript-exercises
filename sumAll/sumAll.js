const sumAll = function(num1,num2) {
    if (!(typeof(num1) == 'number') || !(typeof(num2) == 'number'))
        return "ERROR";
    if (num1 < 0 || num2 < 0)
        return "ERROR";
    let min_num = 0;
    let max_num = 0;
    if (num1 === num2){
        return "SAME";
    }   else if (num1 > num2) {
        min_num = num2;
        max_num = num1;
    }   else {
        min_num = num1;
        max_num = num2;
    }
    let sum = 0;
    for (i = min_num; i < max_num + 1;i++){
        sum = sum + i;
    }
    return sum;
}

module.exports = sumAll
