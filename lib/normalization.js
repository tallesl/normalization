var remapInternationalCharToAscii = require('remap-international-char-to-ascii')

var allowed = [
    ' '
  , '0' , '1' , '2' , '3' , '4' , '5' , '6' , '7' , '8' , '9'
  , 'a' , 'b' , 'c' , 'd' , 'e' , 'f' , 'g' , 'h' , 'i' , 'j'
  , 'k' , 'l' , 'm' , 'n' , 'o' , 'p' , 'q' , 'r' , 's' , 't'
  , 'u' , 'v' , 'w' , 'x' , 'y' , 'z'
]

module.exports = function (str) {
  str = str.toLowerCase()

  var normalized = [ ]
  for (var i = 0; i < str.length; ++i) normalized.push(normalizeChar(str[i]))
  return normalized.join('')
}

function normalizeChar (c) {
  if (allowed.indexOf(c) == -1) return remapInternationalCharToAscii(c)
  else return c
}

