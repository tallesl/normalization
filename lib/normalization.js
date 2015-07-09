var remapInternationalCharToAscii = require('remap-international-char-to-ascii')

module.exports = function (str) {
  return str.toLowerCase().split('').map(normalize).join('')
}

function normalize (c) {
  return alphaNumeric(c) ? c : (remapInternationalCharToAscii(c) || ' ')
}

function alphaNumeric (c) {
  return (c >= 'a' && c <='z') || (c >= '0' && c <= '9')
}

