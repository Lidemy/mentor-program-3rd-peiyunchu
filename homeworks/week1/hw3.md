## 教你朋友 CLI

和電腦溝通的方式有兩種，一個是透過圖形化介面，簡稱 GUI (Graphical User Interface)，這個我們比較習慣。例如我們平常使用手機，或是用 office 打報告之類的，都是透過我們看的到的圖像去操作，用起來蠻直覺的。<br>
不過還有另一種方式，就是透過 CLI (Command Line Interface)，也就是沒有圖形，只能透過打文字指令來溝通。既然沒有圖形介面又醜醜的，為何工程師都愛使用這種介面呢？因為耍帥啦！好吧，官方說法是往往這樣下指令比較快，而且有些指令只能透過 CLI 才能執行。很難參透喔？那你先別管這些，先會用就好。<br>

那要怎麼在電腦上叫出 CLI 呢？h0w 哥你的電腦是什麼作業系統呢？如果是在 MAC 上的話，這個叫做「 終端機 」(Terminal.app)；像我是 windows 的話，這叫做「 命令提示字元 」(cmd.exe)。廢話不多說，我現在就教你怎麼用 command line 來建立資料夾和新增檔案。<br>
第一步，你打開你要使用的 CLI 之後，先看一下你在哪裡跟我說一下。 C:\Users\h0w\cmder？了解。那你想在哪個路徑下建檔？在 h0w 底下？喔喔好的，那你先打上 cd.. 回到上一層，是不是顯示出 C:\Users\h0w？很好，你現在打上 mkdir wifi，接著按 Enter。你點進去 h0w 裡面看一下，是不是新增了一個 wifi 資料夾，哈哈很好玩對吧？我之前學的時候也覺得蠻神奇的。好喔再來，現在我們不是還在 h0w 嗎？要在 wifi 資料夾底下新建檔案的話，就要先切換到 wifi 資料夾底下對吧？我們打上 cd wifi，打完之後一樣按 Enetr，這個指令的意思是切換到 wifi 資料夾。好了嗎？這是最後一哩路了。你只要打出 touch afu.js，Enetr，就大功告成了！蛤你說為啥叫 touch 嗎？因為他除了新增檔案，還有其他的功能。touch 直翻就是「 碰一下 」，被下過 touch 指令的檔案會顯示出你最後一次打開那個檔案的時間。<br>

最後再幫你複習一下喔，這樣下次你要靠自己建檔時有條列式比較好記。
1. cd.. - 回到上一層的意思
2. cd 資料夾名稱 - 這個超常用，切換到某個資料夾。簡單來說 cd(Change Directory) 就是切換或是移動到某個目錄的意思。
3. mkdir 新資料夾名稱 - 新增資料夾。
4. touch - 新增檔案。不要跟 mkdir 搞混了，一個是新增資料夾，一個是新增檔案。
 
