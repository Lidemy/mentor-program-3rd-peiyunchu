const add = (a, b) => {
  // 先把 a 和 b 換成陣列後，再倒過來相加。
  const arrA = a.split('').reverse();
  const arrB = b.split('').reverse();
  const ans = [''];
  // 取兩者之中比較大的位數
  const length = Math.max(arrA.length, arrB.length);
  // 用變數 carry 來記錄進位
  let carry = 0;
  for (let i = 0; i < length; i += 1) {
    // 把 i 轉成 數字
    const n = Number(arrA[i] || 0) + Number(arrB[i] || 0) + carry;
    ans[i] = n % 10;
    carry = Math.floor(n / 10);
  }
  // 如果還有進位，就把進位 push 進去
  if (carry) ans.push(carry);
  // 倒回來，並變回字串
  return ans.reverse().join('');
};

module.exports = add;
