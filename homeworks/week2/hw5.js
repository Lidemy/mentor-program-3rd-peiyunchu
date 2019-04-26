const join = (str, concatStr) => {
  let answer = str[0];
  // i = 1 是因為要從第二個元素前面插入字串
  for (let i = 1; i < str.length; i += 1) {
    answer += concatStr + str[i];
  }
  return answer;
};


const repeat = (str, times) => {
  let result = '';
  for (let i = 0; i < times; i += 1) {
    result += str;
  }
  return result;
};

console.log(join([1, 2, 3], ''));
console.log(join(['a', 'b', 'c'], '!'));
console.log(join(['a', 1, 'b', 2, 'c', 3], ','));

console.log(repeat('a', 5));
console.log(repeat('yoyo', 2));
