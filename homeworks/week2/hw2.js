const capitalize = (str) => {
  // 把 str[0] 換成 str[0].toUpperCase()
  str.replace(str[0], str[0].toUpperCase());
};

console.log(capitalize('nick'));
console.log(capitalize('Nick'));
console.log(capitalize(',hello'));
console.log(capitalize('hello'));
