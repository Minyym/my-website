## 技术选型

- Taro
- react
- nutUI：由京东出品，适合快速开发商城类h5、小程序的移动端 UI 组件库

## 路由

- 前端路由库的基本原理是监听 `popstate` 或 `hashchange` 事件触发后，读取 `location` 对象对视图进行操控更新。

## 请求



## 页面配置

- 所有页面的路由
- tabBar配置使用switchTab
- subpackages 配置subPages下页面, 使用Taro.navigateTo跳转

##  动态设置的标题

```TS
 Taro.setNavigationBarTitle({
       title: '供应商详情',
      })
```

​     

## 问题

- 底部导航栏不能满足设计稿，解决方法：底部导航栏可以自定义，新建一个custom-tab-bar
- 自定义导航栏遮挡问题
  - 导航栏会盖住底部弹框：定义方法使用`diaplay:none`控制导航栏是否显示
  - 遮住内容时：在当前页面加padding。
- useState不能马上拿到最新的值
  - 封装useref



## 数字键盘封装

- 数字整个返回
- 自定义按键



## table封装

- 计算宽度
- 表头表格的样式



