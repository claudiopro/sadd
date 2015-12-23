var test = require('tape');
var sadd = require('.');

test('sadd sums two strings of equal length', function(t) {
  var i, j;

  for (i = 0; i < 10; i++) {
    for (j = 0; j < 10; j++) {
      t.equals(sadd(String(i), String(j)), String(i + j));
    }
  }

  t.equals(sadd('10', '10'), '20');
  t.equals(sadd('12', '34'), '46');
  t.equals(sadd('10', '99'), '109');
  t.equals(sadd('11', '99'), '110');
  t.equals(sadd('98', '99'), '197');
  t.equals(sadd('99', '99'), '198');

  // for (i = 10; i < 100; i++) {
  //   for (j = 10; j < 100; j++) {
  //     t.equals(sadd(String(i), String(j)), String(i + j));
  //   }
  // }
  //
  // for (i = 100; i < 1000; i++) {
  //   for (j = 100; j < 1000; j++) {
  //     t.equals(sadd(String(i), String(j)), String(i + j));
  //   }
  // }

  t.equals(sadd('100', '100'), '200');
  t.equals(sadd('123', '456'), '579');
  t.equals(sadd('100', '999'), '1099');
  t.equals(sadd('111', '999'), '1110');
  t.equals(sadd('998', '999'), '1997');
  t.equals(sadd('999', '999'), '1998');

  t.end();
});

test('sadd sums two strings of different length', function(t) {
  t.equals(sadd('1', '10'), '11');
  t.equals(sadd('11', '9'), '20');

  t.equals(sadd('101', '99'), '200');
  t.equals(sadd('999', '99'), '1098');
  t.equals(sadd('1000', '1'), '1001');

  t.equals(sadd('9999999', '1'), '10000000');
  t.equals(sadd('999999', '1'), '1000000');
  t.equals(sadd('99999', '1'), '100000');
  t.equals(sadd('9999', '1'), '10000');
  t.equals(sadd('999', '1'), '1000');
  t.equals(sadd('99', '1'), '100');

  t.end();
});
