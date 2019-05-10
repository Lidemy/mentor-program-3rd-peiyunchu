
// 問號是 char >= 'a' && char <= 'z' 成立嗎？成立的話幫我回傳一下 chat.toUpperCase()
// 冒號是不成立麻煩回傳chat.toUpperCase()
const alphaSwap = str => str.split('').map(char => ((char >= 'a' && char <= 'z') ? char.toUpperCase() : char.toLowerCase())).join('');

console.log(alphaSwap('nick'));
console.log(alphaSwap('Patty'));
console.log(alphaSwap(',hEllO123'));

module.exports = alphaSwap;
