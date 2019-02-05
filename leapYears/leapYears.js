const leapYears = function(year) {
    let is_leap = '';
    // Check if input is number
    if (!(typeof(year) == 'number')){
      return "ERROR, enter a numeric year";
    }
    // Check for century years
    if ((year % 100 == 0) && !(year % 400 == 0)){
      is_leap = false;
    } else if (year % 4 == 0){
      is_leap = true;
    } else is_leap = false;
    return is_leap;
  }
module.exports = leapYears
