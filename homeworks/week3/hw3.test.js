const isPrime = require('./hw3');

describe('hw3', () => {
  test('1 不符合質數必須大於 1 且只含 1 和本身兩個因數的數，回傳 false', () => expect(isPrime(1)).toBe(false));
  test('2 符合質數必須大於 1 且只含 1 和本身兩個因數的數，回傳 true', () => expect(isPrime(2)).toBe(true));
  test('3 符合質數必須大於 1 且只含 1 和本身兩個因數的數，回傳 true', () => expect(isPrime(3)).toBe(true));
  test('37 符合質數必須大於 1 且只含 1 和本身兩個因數的數，回傳 true', () => expect(isPrime(37)).toBe(true));
  test('38 不符合質數必須大於 1 且只含 1 和本身兩個因數的數，回傳 false', () => expect(isPrime(38)).toBe(false));
});
