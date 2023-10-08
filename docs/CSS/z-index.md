## 正常情况

- 一般来讲，当 CSS 样式没有太大差别的时候，哪个元素在后面哪个元素就在上面。

## 无嵌套

- 是的z-index大，谁在在上面显示

## 有嵌套

- 根据祖先的 `z-index` 值来决定谁在上面，如果祖先本身的 `z-index` 的值没有其他元素祖先本身的 `z-index` 值大，子元素 `z-index` 的值就算再大也没有作用。

- `z-index` 属性值设置为 `-1` 时，虽然是在层叠上下文之上的，但是如果没有层叠上下文，该元素就会在最下面，在屏幕上是看不到的。

## 层叠上下文

- 页面根元素天生具有层叠上下文，称之为 **根层叠上下文**
- `z-index` 值为数值的定位元素也具有层叠上下文
- `position` 属性且值不为 `static` ，且 `z-index` 值不为 `auto` 的元素
- `flex` 容器的子元素，且 `z-index` 值不为 `auto`
- grid 容器的子元素，且 z-index 值不为 `auto`
- `opacity` 属性值小于 1 的元素
- `transform` 属性值不为 `none` 的元素
- `filter` 属性值不为 `none` 的元素
- `isolation` 属性值为 `isolate` 的元素
- `-webkit-overflow-scrolling` 属性值为 `touch` 的元素；