## node命令行解析

- ```
  node ./index.js  -x=1 -- -y 2 aaa
  { _: [ '--y', '2', 'aaa' ], x: 1 }
  ```

- 不带短杠和长杠的是 参数，-- 长杠加上空格 后面的内容都被解析成参数

- ```ini
  -x 1   -x=1  都解析成 {x:1} 选项和选项值之间可以用等号也可以用空格隔开
  ```

- ```ini
  node ./index.js aaa  -y -x// { _: [ 'aaa' ], x: true, y: true }
  node ./index.js aaa  -xy 
  短杠布尔值可以合并，长杠不可以合并 解析成这个{ _: [ 'aaa' ], xy: true }
  ```

## 软链接

1. 定义：它类似于 Windows 操作系统中的快捷方式。软链接文件包含的是另一个文件或目录的路径信息。当你访问软链接文件时，系统会根据其中包含的路径去访问实际的目标文件或目录。

2. 软链是同一份内容的引用，修改源文件，引用的也是改动的

3. npm link 就是把这个包注册到了全局仓库。

4. ```ini
   npm get prefix //找下全局仓库的位置
   ls "$(npm get prefix)/lib/node_modules"
   open "$(npm get prefix)/bin"// 打开全局命令的目录
   ```

## npm link 会做两件事：

1. 往 npm get prefix 下的 lib/node_modules 安装了这个包（用 ln -s 创建的软链）
2. 往 npm get prefix 下的 bin 里放了这个包里注册的命令（用 ln -s 创建的软链）

**npm link 就是用软链模拟了 npm install -g。**

## 全局安装包的时候做了两件事：

1. 往 npm get prefix 下的 lib/node_modules 安装了这个包
2. 往 npm get prefix 下的 bin 里放了这个包里注册的命令

## monorepo

1. 定义：单体仓库，在这种策略下，一个代码仓库包含了多个相关的项目或者模块

2. 解决3个问题

   1. 不同包的自动 link
   2. 命令的按顺序执行
   3. 版本更新、自动 tag、发布

   这三个问题是 monorepo 的核心问题。

   第一个问题用 pmpm workspace、npm workspace、yarn workspace 都可以解决。

   第二个问题用 pnpm exec 也可以保证按照拓扑顺序执行，或者用 npm exec 或者 yarn exec 也可以。

   第三个问题用 @changesets/cli 就可以做到。

   lerna 在功能上和 pnpm workspace + changeset 并没有大的差别，主要是它做了命令缓存、分布式执行任务等性能的优化。

## npm yarn pnpm

- npm2 是通过嵌套的方式管理 node_modules 的，会有同样的依赖复制多次的问题。
- npm3+ 和 yarn 是通过铺平的扁平化的方式来管理 node_modules，解决了嵌套方式的部分问题，但是引入了幽灵依赖的问题，并且同名的包只会提升一个版本的，其余的版本依然会复制多次。
- pnpm 则是用了另一种方式，不再是复制了，而是都从全局 store 硬连接到 node_modules/.pnpm，然后之间通过软链接来组织依赖关系。
- 这样不但节省磁盘空间，也没有幽灵依赖问题，安装速度还快，从机制上来说完胜 npm 和 yarn。