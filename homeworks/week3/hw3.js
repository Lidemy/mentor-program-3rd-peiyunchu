const isPrime = (n) => {
  // 質數必須大於 1，這是定義
  if (n === 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    // 整除，i 是 n 的因數，所以 n 不是質數
    if (n % i === 0) return false;
  }
  // 都沒有人能整除，所以 n 是質數
  return true;
};

console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(37));
console.log(isPrime(38));
console.log(isPrime(100000));


module.exports = isPrime;
