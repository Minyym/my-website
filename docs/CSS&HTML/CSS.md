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

## flex

- **flex-flow**: flex-direction 和 flex-wrap 组合为简写属性 flex-flow。第一个指定的值为 flex-direction ，第二个指定的值为 flex-wrap.
- **flex-basis** : 定义了该元素的空间大小，flex 容器里除了元素所占的空间以外的富余空间就是可用空间。该属性的默认值是 auto。此时，浏览器会检测这个元素是否具有确定的尺寸。在上面的例子中，所有元素都设定了宽度（width）为 100px，所以 flex-basis 的值为 100px。
- **flex **: 简写形式允许你把三个数值按这个顺序书写 — flex-grow，flex-shrink，flex-basis

## 获取元素高度

### offsetWeight&offsetHeight

- 返回值包括 border+padding+width（标准盒模型）怪异直接返回width

  ```javascript
     <div id="myDiv" style="width: 100px; height: 100px; padding: 10px; border: 2px solid black;">
         This is a div.
     </div>
     <script>
         var myDiv = document.getElementById('myDiv');
         console.log(myDiv.offsetWidth); // 输出124（100 + 10*2 + 2*2）开启怪异盒模型（box_sizing:border-box）输出100
         console.log(myDiv.offsetHeight); // 输出124（100 + 10*2 + 2*2）
     </script>
  ```

### clientweight&clientHeight

- 返回值包括padding+width

  ```html
     <div id="myDiv" style="width: 100px; height: 100px; padding: 10px; border: 2px solid black;">
         This is a div.
     </div>
     <script>
         var myDiv = document.getElementById('myDiv');
         console.log(myDiv.clientWidth); // 输出120（100 + 10*2）怪异盒模型输出 10*2 +（100-20-4）=96
         console.log(myDiv.clientHeight); // 输出120（100 + 10*2）
     </script>
  ```

### scrollWidth&scrollHeight

- scrollWidth：返回元素内容的实际宽度，包括由于溢出而隐藏的内容部分。如果元素内容没有溢出，scrollWidth等于clientWidth。它是元素内容的完整宽度，包括被隐藏的部分（如果有）。

  ```javascript
     <div id="myDiv" style="width: 100px; height: 100px; padding: 10px; border: 2px solid black; overflow: auto;">
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.</p>
     </div>
     <script>
         var myDiv = document.getElementById('myDiv');
         console.log(myDiv.scrollWidth);// 103
         console.log(myDiv.scrollHeight);// 862
     </script>
  ```

### dom.getBoundingClientRect().width/height

- dom.getBoundingClientRect()返回一个DOMRect对象，这个对象包含了元素相对于视口（viewport）的位置和尺寸信息。其中width和height属性表示元素的布局尺寸，**包括边框、内边距和内容区域**。它的计算是基于元素在视口中的实际布局位置和大小，考虑了元素的所有可见部分。

### window.getComputedStyle(dom).width/height

- 这个方法返回的是应用了所有 CSS 样式后的元素的计算宽度和高度。它会获取浏览器最终计算出来的样式值，包括从内联样式、样式表等各种来源应用到元素上的样式。计算的宽度和高度是基于元素的内容区域（在标准盒模型下），**不包括边框和内边距**。不过，如果设置了box - sizing: border - box（IE 盒模型），那么这个宽度和高度会包含边框和内边距。
