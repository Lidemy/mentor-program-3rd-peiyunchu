const reverse = (str) => {
  let reverseStr = '';
  // 從倒數第一個開始
  for (let i = str.length - 1; i >= 0; i -= 1) {
    reverseStr += str[i];
  }
  console.log(reverseStr);
};

reverse('yoyoyo');
reverse('1abc2');
reverse('1,2,3,2,1');
reverse('hello');
