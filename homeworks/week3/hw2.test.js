const alphaSwap = require('./hw2');

describe('hw2', () => {
  test('nick 變成 NICK', () => expect(alphaSwap('nick')).toBe('NICK'));
  test('Patty 變成 pATTY', () => expect(alphaSwap('Patty')).toBe('pATTY'));
  test(',hEllO123 變成 ,HeLLo123', () => expect(alphaSwap(',hEllO123')).toBe(',HeLLo123'));
});
