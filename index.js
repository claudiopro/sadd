var SUCC = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function sadd(a, b) {
  var i = a.length - 1, j = b.length - 1, c = [], d = '', r, s = 0;
  while (a.charAt(i) !== '' || b.charAt(j) !== '') {
    r = (+(a.charAt(i)||'0')) + (+(b.charAt(j)||'0')) + s;
    c.unshift(SUCC[r % 10]);
    i--;
    j--;
    s = r > 9 ? 1 : 0;
  }
  if (s) {
    c.unshift('1');
  }
  return c.join('');
}

module.exports = sadd;
