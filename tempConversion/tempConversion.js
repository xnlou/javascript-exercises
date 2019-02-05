const ftoc = function (far) {
  let c_temp = Math.round((far - 32) * 5 / 9 * 10) / 10;
  return c_temp;
}

const ctof = function(cel) {
  let f_temp = Math.round(((cel * 9 / 5 ) + 32 )* 10) / 10;
  return f_temp;
}

module.exports = {
  ftoc,
  ctof
}
