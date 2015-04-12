var assert    = require('assert')
var normalize = require('../lib/normalization')

it('should normalize correctly', function () {
  assert.equal(normalize('Eu sempre tive uma certeza'),
                         'eu sempre tive uma certeza')

  assert.equal(normalize('Que só me deu desilusão'),
                         'que so me deu desilusao')

  assert.equal(normalize('É que o amor é uma tristeza'),
                         'e que o amor e uma tristeza')

  assert.equal(normalize('Muita mágoa demais para um coração'),
                         'muita magoa demais para um coracao')
})

