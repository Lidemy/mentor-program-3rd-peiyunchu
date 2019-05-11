const add = require('./hw5');

describe('hw5', () => {
  it('should return correct answer when a=111111111111111111111111111111111111 and b=111111111111111111111111111111111111', () => expect(add('111111111111111111111111111111111111', '111111111111111111111111111111111111')).toBe('222222222222222222222222222222222222'));
  it('should return correct answer when a=8 and b=9', () => expect(add('8', '9')).toBe('17'));
  it('should return correct answer when a=109901109999 and b=1111111111', () => expect(add('109901109999', '1111111111')).toBe('111012221110'));
});
