// const stars = (n) => {
//   let stars = [];
//   let star = '';
//   for (let i = 0; i < n; i += 1) {
//     stars.push(star += '*');
//   }
//   return stars;
// };


// 負責做星星的 function
const star = (i) => {
  let result = '';
  for (let j = 1; j <= i; j += 1) {
    result += '*';
  }
  return result;
};

// 用 Array(n) 產生出 n 個元素的陣列
// value 就是 fill() 裡的值，在這裡是多少無所謂，因為我只回傳 index
// index 是從 index[0] 算起一直到 index[n-1]
const stars = n => Array(n).fill(0).map((value, index) => star(index + 1));

console.log(stars(1));
console.log(stars(3));
console.log(stars(6));


module.exports = stars;
