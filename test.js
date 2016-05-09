var test = require('tape')
var {prefixes, product, solution} = require('.')

test('it should return all the string prefixes', (t) => {
  var pre = prefixes('abababa')
  t.deepEqual(pre, ['a', 'ab', 'aba', 'abab', 'ababa', 'ababab', 'abababa'])
  t.end()
})

test('it should calc correctly the product', (t) => {
  var word = 'abababa'

  t.equals(product(word, 3), 9)
  t.equals(product(word, 5), 10)
  t.equals(product(word, 6), 6)
  t.end()
})

test('it should calculate the solution', (t) => {
  var word = 'abababa'

  t.equals(solution(word), 10)
  t.end()
})
