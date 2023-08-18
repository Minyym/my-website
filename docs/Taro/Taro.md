## 技术选型

- Taro
- react
- nutUI：由京东出品，适合快速开发商城类h5、小程序的移动端 UI 组件库

## 路由

- 前端路由库的基本原理是监听 `popstate` 或 `hashchange` 事件触发后，读取 `location` 对象对视图进行操控更新。

## 请求

## 主题色



## 设计稿及尺寸单位

[传送门](https://taro-docs.jd.com/docs/size)

- 当转成微信小程序的时候，尺寸将默认转换为 `rpx`，当转成 H5 时将默认转换为以 `rem` 为单位的值
- `Px` 或者 `PX`单位不被转换成 `rpx` 或者 `rem` ，会被转换插件忽略
- 行内样式无法做替换，Taro 提供了 API `Taro.pxTransform` 来做运行时的尺寸转换。
- 单位rpx：
  - 1 RPX 等于屏幕宽度的 1/750。例如，如果屏幕宽度为 375px，则 1 RPX 就等于 0.5px。通过使用 RPX 单位，开发者可以在不同屏幕尺寸和像素密度的设备上保持相对一致的页面布局和元素大小。
  - 需要注意的是，RPX 是一种相对单位，它的实际显示效果取决于设备的像素密度。因此，在编写前端代码时，通常需要结合媒体查询和其他技术来实现更精确的适配。

## 自定义导航栏

1. 在src路径下新建`custom-tab-bar`文件，index.tsx和index.config.ts

2. 使用场景：根据权限动态加载导航、导航有图标、未登录切换过滤等

3. 在appconfig中配置开启

   ![](https://raw.githubusercontent.com/Minyym/figure-bed/master/img/202308161534420.png)

   

   1. 自定义导航栏遮挡问题
      - 导航栏会盖住底部弹框时：定义方法使用`diaplay:none`控制导航栏是否显示
      - 遮住内容时：在当前页面加padding。

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

## hooks封装

- useState不能马上拿到最新的值
  - 封装useref



## 数字键盘封装

- 数字整个返回
- 自定义按键



## table封装

- 计算宽度
- 表头表格的样式



## AppLayout封装

- 页面布局：头部 内容（滑动支持） 底部





