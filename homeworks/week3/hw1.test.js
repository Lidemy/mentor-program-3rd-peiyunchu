const stars = require('./hw1');

describe('hw1', () => {
  test('當 n = 1 時就回傳一顆星星字串的陣列', () => expect(stars(1)).toEqual(['*']));
  test('當 n = 3 時就回傳一顆、兩顆、三顆星星字串的陣列', () => expect(stars(3)).toEqual(['*', '**', '***']));
  test('當 n = 6 時就回傳一顆、兩顆、三顆、四顆、五顆、六顆星星字串的陣列', () => expect(stars(6)).toEqual(['*', '**', '***', '****', '*****', '******']));
});
