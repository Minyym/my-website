## Git rebase

- 准备一个仓库，仓库上存在两个分支，master和feature/test(从master上切出来的，commit保持一致)

- 模拟和别人共同开发，在master、feature/test分别提交两个commit

  ![](https://cdn.jsdelivr.net/gh/Min-wys/figure-bed/img/20220518163926.png)

- 现在的分支节点图，两个分支上分别多出两个commit

  ![](https://cdn.jsdelivr.net/gh/Min-wys/figure-bed/img/20220518164535.png)

- ```ts
  git checkout feature/test  切回到feature/test分支
  git rebase master  ---》像是 git rebase master feature/test(谁得分支在后面，谁的commit就在后面)
  ```

- rebase 会将整个 `feature` 分支移动到 `master` 分支的**顶端**，从而有效地整合了所有 master 分支上的提交

- 与 merge 提交方式不同，rebase 通过为原始分支中的每个提交创建**全新的 commits** 来重写项目历史记录,特点是仍然会在`feature`分支上形成线性提交

- **reapply(重放)**：rebase会**依次**地将你所要操作的分支的所有提交应用到目标分支上

- Feature/test分支的多个节点，可能会解决多次冲突，所以在rebase之前，建议将节点合并成一个

- 下图是两个commit，要解决两次冲突，git rebase --continue时，可以修改commit注释，下图中修改了feature1的

  ![](https://cdn.jsdelivr.net/gh/Min-wys/figure-bed/img/20220518164143.png)

  ![](https://cdn.jsdelivr.net/gh/Min-wys/figure-bed/img/20220518164447.png)

- rebase 会产生完美线性的项目历史记录，你可以在 feature分支上没有任何分叉的情况下一直追寻到项目的初始提交。

  ![](https://cdn.jsdelivr.net/gh/Min-wys/figure-bed/img/20220518165329.png)

  ![](https://cdn.jsdelivr.net/gh/Min-wys/figure-bed/img/20220518170114.png)

  

  - 在master上merge feature/test

    ![](https://cdn.jsdelivr.net/gh/Min-wys/figure-bed/img/20220518170150.png)

    ![](https://cdn.jsdelivr.net/gh/Min-wys/figure-bed/img/20220518170200.png)



