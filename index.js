function product (word, n) {
  var prefix = word.slice(0, n)
  var matches = 1
  for (var i = 1; i <= word.length - n; i++) {
    var newWord = word.slice(i, i + n)
    if (newWord === prefix) {
      matches++
    }
  }
  return matches * n
}

function prefixes (str) {
  if (typeof str !== 'string') {
    throw new Error('Called prefixes with a ')
  }

  var prefixes = []
  for (var i = 1; i <= str.length; i++) {
    prefixes = [...prefixes, str.slice(0, i)]
  }
  return prefixes
}

function solution (str) {
  var max = 0
  for (var i = 1; i <= str.length; i++) {
    var calc = product(str, i)
    max = Math.max(calc, max)
  }
  return max
}

module.exports = {
  solution,
  product,
  prefixes
}
