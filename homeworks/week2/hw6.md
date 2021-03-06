``` js
function isValid(arr) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] <= 0) return 'invalid'
  }
  for(var i=2; i<arr.length; i++) {
    if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
  }
  return 'valid'
}

isValid([3, 5, 8, 13, 22, 35])
```

## 執行流程
1. 執行第一行，將陣列 [3,5,8,13,22,35] 當作「引數值」，賦值給「參數」arr 後，進入主體中的述句。

第一個 for loop：
2. 執行第二行，設定變數 i 是 0，代表陣列是從 arr[0] 開始檢查。  
   檢查 arr[0]，是否沒超過陣列長度，是，開始進入第一圈迴圈。
3. 執行第三行，繼續檢查 arr[0] 是否 <= 0，不是，第一回圈結束，跑回第二行，i++，i 變成 1，開始檢查 arr[1]。
   檢查 arr[1]，是否沒超過陣列長度，是，開始進入第二圈迴圈。
4. 執行第三行，繼續檢查 arr[1] 是否 <= 0，不是，第二圈迴圈結束，跑回第二行，i++，i 變成 2，開始檢查 arr[2]。
   檢查 arr[2]，是否沒超過陣列長度，是，開始進入第三圈迴圈。
5. 執行第三行，繼續檢查 arr[2] 是否 <= 0，不是，第三圈迴圈結束，跑回第二行，i++，i 變成 3，開始檢查 arr[3]。
   檢查 arr[3]，是否沒超過陣列長度，是，開始進入第四圈迴圈。
6. 執行第三行，繼續檢查 arr[3] 是否 <= 0，不是，第四圈迴圈結束，跑回第二行，i++，i 變成 4，開始檢查 arr[4]。
   檢查 arr[4]，是否沒超過陣列長度，是，開始進入第五圈迴圈。
7. 執行第三行，繼續檢查 arr[4] 是否 <= 0，不是，第五圈迴圈結束，跑回第二行，i++，i 變成 5，開始檢查 arr[5]。
   檢查 arr[5]，是否沒超過陣列長度，是，開始進入第六圈迴圈。
8. 執行第三行，繼續檢查 arr[5] 是否 <= 0，不是，第六圈迴圈結束，跑回第二行，i++，i 變成 6，開始檢查 arr[6]。
   檢查 arr[6]，是否沒超過陣列長度，超過了，跳出這個 for loop，繼續往下。

第二個 for loop：
9. 執行第四行，設定變數 i 是 2，代表是從 arr[2] 開始檢查。
   檢查 arr[2]，是否沒超過陣列長度，是，開始進入第一圈迴圈。
10. 執行第五行，繼續檢查 arr[2] 是否不等於 arr[1]+arr[0]，不是，第一圈迴圈結束，跑回第四行，i++，i 變成 3，開始檢查 arr[3]。
    檢查 arr[3]，是否沒超過陣列長度，是，開始進入第二圈迴圈。
11. 執行第五行，繼續檢查 arr[3] 是否不等於 arr[2]+arr[1]，不是，第一圈迴圈結束，跑回第四行，i++，i 變成 4，開始檢查 arr[4]。
    檢查 arr[4]，是否沒超過陣列長度，是，開始進入第三圈迴圈。
12. 執行第五行，繼續檢查 arr[4] 是否不等於 arr[3]+arr[2]，是，符合 if 語句，回傳 'invalid'。

結論：這是「費波那契數列」，是從兩個「1」開始，後續的數字則是前兩個數字的總和。舉例來說，1 與 1 的和是 2，1 與 2 的和是 3，2 與 3 的和是 5，依此類推下去。

   