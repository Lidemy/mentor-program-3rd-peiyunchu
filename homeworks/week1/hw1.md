## 交作業流程

情境 : 我正在寫 week1 作業
1. git branch week1:
    開一條新的 branch，並把 branch 取名為 week1。
2. git checkout week1:
    從本來的 master 這條 branch 切換到 week1 這個 branch 上。
1+2. git checkout -b week1:
    這個指令更精簡，可以同時新開一條新的 branch 並直接切換到這條分支上。

小結 : 開完 branch，就可以開始寫作業。

情境 : 提交作業
3. git status:
    寫完作業之後，用 git status 看一下，會顯示出 On branch week1，並有紅字 modified，<br>
    後面接的是作業的檔案名稱，代表這些已經修改過的檔案還沒存檔，也就是還沒 commit。
4. git commit -am "week1":
    commit 之後才算是存好檔了，這時候就算 Huli 突然叫你跟他的 master 同步一下都不用害怕，檔案都在。<br>
    (不過同步的話要記得要切換回 master，再開一條新的 branch，不能用這條 week1 branch 喔 !)
5. git push origin week1:
    接下來就把 week1 這個 branch 上傳到 GitHub。push 上去之後，GitHub 上面會更新。
6. git checkout master:
    按下 complete and pull request，等待 review code。等 Huli 幫我 merge 到 master 之後，<br>
    我就可以 checkout 回 master 這條 branch 上了。
7. git pull origin master:
    用 git pull 把更新的資訊拉下來。
8. git branch -d week1:
    既然作業已經被合併到 master，就可以把 week1 這條 branch 刪掉了。

小結 : 開一條新的 branch 之前，不論我現在正在哪一條 branch 上，永遠都要先 checkout 回 master 再開，<br>
      確保我開的 branch，都是從 master 分支出來的。




   
   