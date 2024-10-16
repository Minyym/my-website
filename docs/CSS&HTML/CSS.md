## 网页变灰

### 实现思路及原理

- 使用`filter`的`grayscale`属性
  - CSS属性 filter 将模糊或颜色偏移等图形效果应用于元素。滤镜通常用于调整图像、背景和边框的渲染
  - `grayscale() `函数将改变输入图像灰度，该函数有一个参数，表示转换为灰度的比例。当值为 100% 时，完全转为灰度图像；当值为 0% 时图像无变化。值在 0% 到 100% 之间，则是效果的线性乘数。若未设置值，默认是 0。

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

## 层叠规则

- 首先先看要比较的两个元素是否处于同一个层叠上下文中：
  - 如果是，谁的层叠等级大，谁在上面（怎么判断层叠等级大小呢？——看“层叠顺序”图）。
  - 如果两个元素不在统一层叠上下文中，请先比较他们所处的层叠上下文的层叠等级。
- 当两个元素层叠等级相同、层叠顺序相同时，在DOM结构中后面的元素层叠等级在前面元素之上。
