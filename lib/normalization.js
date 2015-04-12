var remapInternationalCharToAscii = require('remap-international-char-to-ascii')

module.exports = function (str) {
  str = str.toLowerCase()

  var normalized = [ ]
  for (var i = 0; i < str.length; ++i) normalized.push(normalizeChar(str[i]))
  return normalized.join('')
}

function normalizeChar (c) {
  if ((c >= 'a' && c <='z') || (c >= '0' && c <= '9')) return c
  return remapInternationalCharToAscii(c) || ' '
}

