const removeFromArray = function(array,rem_sp) {
    let rem_array = [];

    rem_array = array.splice(rem_sp -1 ,1,)
   
    return array;
}
module.exports = removeFromArray