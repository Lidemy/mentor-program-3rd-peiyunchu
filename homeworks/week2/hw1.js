const printStars = (n) => {
  let answer = '';
  for (let i = 0; i < n; i += 1) {
    // \n 讓星星換行
    answer += '*\n';
  }
  console.log(answer);
};

printStars(1);
printStars(3);
printStars(6);
