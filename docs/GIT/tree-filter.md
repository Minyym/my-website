### 当你不小心把私密信息提交到了某个历史 commit，就需要修改这个 commit 去掉私密信息。

- 5个提交记录，在333commit中提交了私密信息，去掉333的私密信息

![](https://raw.githubusercontent.com/Minyym/figure-bed/master/img/202310081018934.png)

3 种方案：

1. 第一种是 git reset --hard 到那个分支，然后改完之后 git commit --amend，之后再把后面的 commit 一个个 cherry-pick 回来。

2. 第二种是 git rebase -i 这些 commit，它提供了一些命令，比如 pick 是使用这个 commit，edit 是重新修改这个 commit。我们在要改的那个 commit 使用 edit 命令，之后 git rebase --continue，依次处理后面的 commit。

   其实 reabse 就是对 cherry-pick 的封装，也就是自动处理一个个 commit。

   但不管是 cherry-pick 还是 rebase ，合并后面的 commit 的时候都需要解决冲突，因为改了历史 commit 肯定会导致冲突。

3. 第三种方案是用 filter-branch 的 --tree-filter，他可以在多个 commit 上自动执行脚本，你可以在脚本里修改文件内容，这样就不用手动解决冲突了，可以批量修改 commit。

但改了历史 commit 需要 git push -f，如果大项目需要这么做，要提前和组员共同好，先把代码都 push，然后集中修改，之后再重新 clone。

### --tree-fiter

1. 先创建一个script文件

   ```JS
   const fs = require("fs");
   //读取要修改的文件
   const content = fs.readFileSync("./index.js", {
     encoding: "utf-8",
   });
   // 修改文件
   const newContent = content.replace("simixinxi", "");
   // 写入文件
   fs.writeFileSync("./index.js", newContent);
   
   ```

   - 读取对应文件，然后修改文件的内容

2. 运行命令

   ```JS
   git filter-branch --tree-filter 'node 绝对路径/script.js' f02d454..HEAD
   ```

   - 这里指定用 --tree-filter，也就是处理**每个 commit** 的文件，执行 script 脚本。

   - 也就是从 222 那个 commit 到当前 HEAD 的 commit，**每个 commit 执行一次 script 脚本**。