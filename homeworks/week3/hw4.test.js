const isPalindromes = require('./hw4');

describe('hw4', () => {
  test('abcdcba 正著念倒著念都是 abcdcba，回傳 true', () => expect(isPalindromes('abcdcba')).toBe(true));
  test('apple 正著念倒著念不一樣，回傳 false', () => expect(isPalindromes('apple')).toBe(false));
  test('aaaaa 正著念倒著念都是 aaaaa，回傳 true', () => expect(isPalindromes('aaaaa')).toBe(true));
  test('applppa; 正著念倒著念都是 applppa，回傳 true', () => expect(isPalindromes('applppa')).toBe(true));
});
