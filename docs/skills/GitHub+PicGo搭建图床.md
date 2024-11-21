## 原因

- 使用typora进行写文档和博客的时候，我们经常会使用到截图，然后截图都是保存到电脑本地的，当文档部署到线时时无法访问到电脑的图片
- 想到的解决方法就是使用图床，只想白嫖，所以选择了GitHub+PicGo

## PicGo

- 文档：https://picgo.github.io/PicGo-Doc/zh/guide/

- GitHub图床

- 首先你得有一个GitHub账号。

- 新建一个仓库，记下你取的仓库名。

- 生成一个token用于PicGo操作你的仓库：访问：https://github.com/settings/tokens，然后点击`Generate new token`。

- 把repo的勾打上即可。然后翻到页面最底部，点击`Generate token`的绿色按钮生成token。

- **注意：**这个token生成后只会显示一次！你要把这个token复制一下存到其他地方以备以后要用。

- 在你新建的仓库中添加上这个token

   ![](https://cdn.jsdelivr.net/gh/Min-wys/figure-bed/img/20220420101254.png)

- 配置PicGo

  **注意：**仓库名的格式是`用户名/仓库`，比如我创建了一个叫做`test`的仓库，在PicGo里我要设定的仓库名就是`Molunerfinn/test`。一般我们选择`master`分支即可。然后记得点击确定以生效，然后可以点击`设为默认图床`来确保上传的图床是GitHub。

  ![](https://cdn.jsdelivr.net/gh/Min-wys/figure-bed/img/20220419172836.png)

  至此配置完毕，已经可以使用了。当你上传的时候，你会发现你的仓库里也会增加新的图片了：

  ![](https://cdn.jsdelivr.net/gh/Min-wys/figure-bed/img/20220419194751.png)
