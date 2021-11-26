### 搭建本地项目

- [docusaurus官网脚手架](https://link.juejin.cn/?target=https%3A%2F%2Fwww.docusaurus.cn%2Fdocs%2Finstallation)，参照官方的文档，进行搭建，推到远程

### 部署到GitHub pages

- 要在github网站上进行相应的配置，

  ![](https://files.catbox.moe/6qjyo0.png)
- 配置`docusaurus.config.js`,具体的配置可参考本项目

### 设置自动部署

- 每次改完代码推到远程后，还要执行GIT_USER=Min-wys USE_SSH=true yarn deploy，重复工作，设置自动部署

- 现在github上设置Personal access tokens，位置在个人中心，setting--developer settings--Personal access tokens

  ![](https://files.catbox.moe/auwqh2.png)

- 然后在自己项目的setting中将刚刚的token添加上

  ![](https://files.catbox.moe/v5ixba.png)

- 在项目中添加配置，`.github/workflows/documentation.yml`

  ```js
  name: Deploy Github pages
  on:
    push://触发事件
      branches://那个分支
        - master
  jobs:
    build-and-deploy:
      runs-on: ubuntu-latest
      steps://步骤
      - name: Checkout
        uses: actions/checkout@master
        with:
          persist-credentials: false
      - name: Install and Build
        run: |
          npm install
          npm run-script build 
      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@releases/v3
        with:
          ACCESS_TOKEN//要和项目中的名字一制: ${{ secrets.ACCESS_TOKEN }}
          BRANCH: gh-pages
          FOLDER: build
          BUILD_SCRIPT: npm install && npm run build
  ```

  ![](https://files.catbox.moe/qwyf6h.png)