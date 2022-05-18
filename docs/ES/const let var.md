## let和const和var

- let和const

  - 只在声明所在的块级作用域内有效

  - 没有声明提升

  - 不允许重复声明

  - 不属于顶层对象的属性

  - 块级作用域的出现，实际上使得获得广泛应用的匿名立即执行函数表达式（匿名 IIFE）不再必要了

  - 绑定当前块级作用域

  - 暂时性死区：只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量。

    ```js
    function bar(x = y, y = 2) {
      return [x, y];
    }
    
    bar(); // 报错
    // 原因：x的默认值y还没有声明
    ```

- const

  - 声明一个只读的常量，声明的常量不得改变值
  - 声明的常量如果是对象，可以修改对象的内容
  - 必须立即初始化

- var

  - 声明提升
  - 允许重复声明
  - 属于顶层对象的属性

## null和undefined区别

资料[https://www.ruanyifeng.com/blog/2014/03/undefined-vs-null.html]

- null是一个空对象指针，指向的一个空对象，**没有对象"，即该处不应该有值**

- undefined是找不到,**缺少值"，就是此处应该有一个值，但是还没有定义**

- null的使用场景

  * 作为函数的参数，表示该函数的参数不是对象 ex:send(null,null,null)
  * 作为对象原型链的终点
  * 如果定义的变量准备在将来用于保存对象，那么最好将该变量初始化为null而不是其他值
  * 让一个对象变成垃圾对象

- undefined的使用场景

  * 变量被声明了，但没有赋值时，就等于undefined
  * 调用函数时，应该提供的参数没有提供，该参数等于undefined
  * 对象没有赋值的属性，该属性的值为undefined
  * 函数没有返回值时，默认返回undefined

- typeOf检测undefined是undefined，检测null是Object

- 在验证null时，一定要使用　=== ，因为 == 无法分别 null 和　undefined

  ```JS
  null == undefined // true
  null === undefined // false
  null  === null // true
  
  Number(null)//0
  Number(undefined)// NAN
  ```

## 变量的解构赋值

定义：ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）

1. 数组的结构赋值

   1. 从数组中提取值，按照对应位置，对变量赋值

      1. 变量解构不成功，值就是undefined

         ```js
         let [first] = [];//first undefined
         let [first, second] = [1];//second undefined
         ```

      2. 不完全解构

         ```js
         let [first, second] = [1, 2, 3];
         first // 1
         second // 2
         ```

      3. 如果等号的右边不是数组（或者严格地说，不是可遍历的结构），那么将会报错。

         ```js
         // 报错
         let [first] = 1;/false / NaN / undefined / null / {}
         ```

   2. 允许指定默认值

      ```js
      let [x, y = 'b'] = ['a']; // x='a', y='b'
      let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'
      // 上面代码中，如果一个数组成员是null，默认值就不会生效，因为null不严格等于undefined。null相当于也是有值的是个空对象
      ```

      如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值。

2. 对象的解构赋值

   1. 对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。

      ```js
      let { foo, bar } = { foo: 'aaa', bar: 'bbb' };// foo：aaa bar：bbb
      
      ```

   2. 重新命名

      ```js
      let { foo: foo1, bar: bar1 } = { foo: 'aaa', bar: 'bbb' };// foo1：aaa bar1：bbb
      原本是let { foo: foo, bar: bar } = { foo: 'aaa', bar: 'bbb' };// foo：aaa bar：bbb
      ```

      也就是说，对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。

   3. 允许指定默认值

      ```js
      var {x: y = 3} = {x: 5};
      y // 5
      ```

   4. 注意点

      1. 如果要将一个已经声明的变量用于解构赋值，必须非常小心

         ```javascript
         // 错误的写法
         let x;
         {x} = {x: 1};
         // SyntaxError: syntax error
         
         // 正确的写法
         let x;
         ({x} = {x: 1});
         ```

      2. 解构赋值允许等号左边的模式之中，不放置任何变量名。因此，可以写出非常古怪的赋值表达式。

         ```javascript
         ({} = [true, false]);
         ({} = 'abc');
         ({} = []);
         上面的表达式虽然毫无意义，但是语法是合法的，可以执行
         ```

      3. 由于数组本质是特殊的对象，因此可以对数组进行对象属性的解构。

         ```javascript
         let arr = [1, 2, 3];
         let {0 : first, [arr.length - 1] : last} = arr;
         first // 1
         last // 3
         ```

3. 字符串的解构赋值

   ```js
   const [a, b, c, d, e] = 'hello';
   a // "h"
   b // "e"
   c // "l"
   d // "l"
   e // "o"
   
   //解构length
   let {length : len} = 'hello';
   len // 
   ```

4. 数值和布尔值的解构赋值

   解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。

   ```javascript
   let {toString: s} = 123;
   s === Number.prototype.toString // true
   
   let {toString: s} = true;
   s === Boolean.prototype.toString // true
   ```

   上面代码中，数值和布尔值的包装对象都有`toString`属性，因此变量`s`都能取到值。

   解构赋值的规则是，只要等号右边的值不是对象或数组，就先将其转为对象。由于`undefined`和`null`无法转为对象，所以对它们进行解构赋值，都会报错。

   ```javascript
   let { prop: x } = undefined; // TypeError
   let { prop: y } = null; // TypeError
   ```

5. 函数参数的解构赋值

   ```js
   [[1, 2], [3, 4]].map(([a, b]) => a + b);
   // [ 3, 7 ]
   ```

   可以使用默认值，`undefined`就会触发函数参数的默认值。

6. 圆括号的问题

   不能使用圆括号的情况

   1. 变量声明语句

   2. 函数参数

   3. 赋值语句的模式

      ```js
      // 报错
      function f([(z)]) { return z; }
      // 报错
      function f([z,(x)]) { return x; }
      
      // 全部报错
      ({ p: a }) = { p: 42 };
      ([a]) = [5];
      
      // 报错
      [({ p: a }), { x: c }] = [{}, {}];
      
      [(b)] = [3]; // 正确
      ({ p: (d) } = {}); // 正确
      [(parseInt.prop)] = [3]; // 正确
      ```

7. 应用

   1. **交换变量的值**
   2. **从函数返回多个值**
   3. **函数参数的定义**
   4. **提取 JSON 数据**
   5. **函数参数的默认值**
   6. **遍历 Map 结构**
   7. **输入模块的指定方法**


