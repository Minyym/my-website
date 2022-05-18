## ?.可选链

```JS
var obj ={}
console.log(obj?.a?.b ?? 233 ) //233
var obj={a:{b:1}}
console.log(obj?.a?.b??233) //1
            
obj?.prop——如果obj存在，则返回obj.prop，否则为undefined。
obj?.[prop]——如果obj存在，则返回obj[prop]，否则返回undefined。
obj.method?.()——如果obj.method存在，则调用obj.method()，否则返回undefined。
```

当其中一链为null或者undefined时就返回undefined，这样即使中间缺少一个属性也不会报错，双问号后面接的就是默认值。

@Love996

## ??空值合并运算符

语法：a??b

1. a有值，输出为a
2. a为null或者是undefined，输出b

```js
console.log(1 || "xx") 			//1
console.log(0 || "xx") 			//xx
console.log(null || "xx")		//xx
console.log(undefined || "xx")  //xx
console.log(-1 || "xx") 		//-1
console.log("" || "xx") 		//xx

console.log(1 ?? "xx")			//1
console.log(0 ?? "xx") 			//0
console.log(null ?? "xx") 		//xx
console.log(undefined ?? "xx")  //xx
console.log(-1 ?? "xx") 		//-1
console.log("" ?? "xx") 		//''
```

当是null和undefined时，返回第二个值

## ??=逻辑空赋值

语法：a??=b

1. 如果a不是null或者是undefined时，返回a

2. 如果a是null或者是undefined时，输出b，并且将b的值分配给a

   ```js
   let a=NULL
   console.log(a??=50) //50
   console.log(a) //50
   ```

## <<

连续2个小于号是<<，叫左移运算符，是移位运算符的一种。

左移一位，相当于乘以2

如：

```
int num= 10;//num的初始值是10 num=num << 1//左移一位，则就是10*2,等于20
1<<9 等价于1*2的9次方
```

# 代码优化

## 1.如果有多个条件

我们可以在数组中存储多个值，并且可以使用数组 `include` 方法。

```js
//Longhand
if (x === 'abc' || x === 'def' || x === 'ghi' || x ==='jkl') {
  //logic
}

//Shorthand
if (['abc', 'def', 'ghi', 'jkl'].includes(x)) {
  //logic
}
```

## 2.如果为真…否则简写

这对于我们有 `if-else` 条件，里面不包含更大的逻辑时，是一个较大的捷径。我们可以简单的使用三元运算符来实现这个简写。

```js
// Longhand
let test: boolean;
if (x > 100) {
  test = true;
} else {
  test = false;
}

// Shorthand
let test = (x > 10) ? true : false;
//or we can use directly
let test = x > 10;
console.log(test);
```

当我们有嵌套条件时，我们可以采用这种方式。

```js
let x = 300,
test2 = (x > 100) ? 'greater 100' : (x < 50) ? 'less 50' : 'between 50 and 100';
console.log(test2); // "greater than 100"
```

## 3.声明变量

当我们要声明两个具有共同值或共同类型的变量时，可以使用此简写形式。

```
//Longhand
let test1;
let test2 = 1;

//Shorthand
let test1, test2 = 1;
```

## 4.Null, Undefined，空检查

当我们创建新的变量时，有时我们想检查我们引用的变量的值是否为空或 undefined。JavaScript 确实有一个非常好的简写工具来实现这些功能。

```
// Longhand
if (test1 !== null || test1 !== undefined || test1 !== '') {
    let test2 = test1;
}

// Shorthand
let test2 = test1 || '';
```

## 5.null 值检查和分配默认值

```
let test1 = null,
    test2 = test1 || '';

console.log("null check", test2); // output will be ""
```

## 6.undefined 值检查和分配默认值

```
let test1 = undefined,
    test2 = test1 || '';

console.log("undefined check", test2); // output will be ""
```

正常值检查

```
let test1 = 'test',
    test2 = test1 || '';

console.log(test2); // output: 'test'
```

## 7.将值分配给多个变量

当我们处理多个变量并希望将不同的值分配给不同的变量时，此简写技术非常有用。

```
//Longhand
let test1, test2, test3;
test1 = 1;
test2 = 2;
test3 = 3;

//Shorthand
let [test1, test2, test3] = [1, 2, 3];
```

## 8.赋值运算符简写

我们在编程中处理很多算术运算符，这是将运算符分配给 JavaScript 变量的有用技术之一。

```
// Longhand
test1 = test1 + 1;
test2 = test2 - 1;
test3 = test3 * 20;

// Shorthand
test1++;
test2--;
test3 *= 20;
```

## 9.如果存在简写

这是我们大家都在使用的常用简写之一，但仍然值得一提。

```
// Longhand
if (test1 === true) or if (test1 !== "") or if (test1 !== null)

// Shorthand //it will check empty string,null and undefined too
if (test1)
```

注意：如果 test1 有任何值，它将在 if 循环后进入逻辑，该运算符主要用于 `null` 或 `undefined`的检查。

## 10.多个条件的 AND（&&）运算符

如果仅在变量为 `true` 的情况下才调用函数，则可以使用 `&&` 运算符。

```
//Longhand
if (test1) {
 callMethod();
}

//Shorthand
test1 && callMethod();
```

## 11.foreach 循环简写

这是迭代的常用简写技术之一。

```
// Longhand
for (var i = 0; i < testData.length; i++)

// Shorthand
for (let i in testData) or  for (let i of testData)
```

每个变量的数组

```
function testData(element, index, array) {
  console.log('test[' + index + '] = ' + element);
}

[11, 24, 32].forEach(testData);
// logs: test[0] = 11, test[1] = 24, test[2] = 32
```

## 12.return 中比较

我们也可以在 return 语句中使用比较。它将避免我们的 5 行代码，并将它们减少到 1 行。

```
// Longhand
let test;
function checkReturn() {
  if (!(test === undefined)) {
    return test;
  } else {
    return callMe('test');
  }
}
var data = checkReturn();
console.log(data); //output test
function callMe(val) {
    console.log(val);
}

// Shorthand
function checkReturn() {
    return test || callMe('test');
}
```

## 13.箭头函数

```
//Longhand
function add(a, b) {
   return a + b;
}

//Shorthand
const add = (a, b) => a + b;
```

更多示例。

```
function callMe(name) {
  console.log('Hello', name);
}
callMe = name => console.log('Hello', name);
```

## 14.短函数调用

我们可以使用三元运算符来实现这些功能。

```
// Longhand
function test1() {
  console.log('test1');
};
function test2() {
  console.log('test2');
};
var test3 = 1;
if (test3 == 1) {
  test1();
} else {
  test2();
}

// Shorthand
(test3 === 1? test1:test2)();
```

## 15. Switch 简写

我们可以将条件保存在键值对象中，并可以根据条件使用。

```
// Longhand
switch (data) {
  case 1:
    test1();
  break;

  case 2:
    test2();
  break;

  case 3:
    test();
  break;
  // And so on...
}

// Shorthand
var data = {
  1: test1,
  2: test2,
  3: test
};

data[something] && data[something]();
```

## 16.隐式返回简写

使用箭头函数，我们可以直接返回值，而不必编写 return 语句。

```
//longhand
function calculate(diameter) {
  return Math.PI * diameter
}

//shorthand
calculate = diameter => (
  Math.PI * diameter;
)
```

## 17.小数基数指数

```
// Longhand
for (var i = 0; i < 10000; i++) { ... }

// Shorthand
for (var i = 0; i < 1e4; i++) {
```

## 18.默认参数值

```
//Longhand
function add(test1, test2) {
  if (test1 === undefined)
    test1 = 1;
  if (test2 === undefined)
    test2 = 2;
  return test1 + test2;
}

//shorthand
add = (test1 = 1, test2 = 2) => (test1 + test2);
add() //output: 3
```

## 19.扩展运算符简写

```
//longhand

// joining arrays using concat
const data = [1, 2, 3];
const test = [4 ,5 , 6].concat(data);

//shorthand

// joining arrays
const data = [1, 2, 3];
const test = [4 ,5 , 6, ...data];
console.log(test); // [ 4, 5, 6, 1, 2, 3]
```

对于克隆，我们也可以使用扩展运算符。

```
//longhand

// cloning arrays
const test1 = [1, 2, 3];
const test2 = test1.slice()

//shorthand

// cloning arrays
const test1 = [1, 2, 3];
const test2 = [...test1];
```

## 20.模板文字

如果您厌倦了在单个字符串中使用 `+` 来连接多个变量，那么这种简写可以消除您的头痛。

```
//longhand
const welcome = 'Hi ' + test1 + ' ' + test2 + '.'

//shorthand
const welcome = `Hi ${test1} ${test2}`;
```

## 21.多行字符串简写

当我们在代码中处理多行字符串时，可以使用以下功能：

```
//longhand
const data = 'abc abc abc abc abc abc\n\t'
    + 'test test,test test test test\n\t'

//shorthand
const data = `abc abc abc abc abc abc
         test test,test test test test`
```

## 22.对象属性分配

```
let test1 = 'a';
let test2 = 'b';

//Longhand
let obj = {test1: test1, test2: test2};

//Shorthand
let obj = {test1, test2};
```

## 23.将字符串转换成数字

```
//Longhand
let test1 = parseInt('123');
let test2 = parseFloat('12.3');

//Shorthand
let test1 = +'123';
let test2 = +'12.3';
```

## 24.用解构简写

```
//longhand
const test1 = this.data.test1;
const test2 = this.data.test2;
const test2 = this.data.test3;

//shorthand
const { test1, test2, test3 } = this.data;
```

## 25.用 Array.find 简写

当我们确实有一个对象数组并且我们想要根据对象属性查找特定对象时，find 方法确实很有用。

```
const data = [
  {
    type: 'test1',
    name: 'abc'
  },
  {
    type: 'test2',
    name: 'cde'
  },
  {
    type: 'test1',
    name: 'fgh'
  },
]
function findtest1(name) {
  for (let i = 0; i < data.length; ++i) {
    if (data[i].type === 'test1' && data[i].name === name) {
      return data[i];
    }
  }
}

//Shorthand
filteredData = data.find(data => data.type === 'test1' && data.name === 'fgh');
console.log(filteredData); // { type: 'test1', name: 'fgh' }
```

## 26.查找条件简写

如果我们有代码来检查类型，根据类型需要调用不同的方法，我们可以选择使用多个 else ifs 或者 switch，但是如果我们有比这更好的简写方法呢？

```
// Longhand
if (type === 'test1') {
  test1();
}
else if (type === 'test2') {
  test2();
}
else if (type === 'test3') {
  test3();
}
else if (type === 'test4') {
  test4();
} else {
  throw new Error('Invalid value ' + type);
}

// Shorthand
var types = {
  test1: test1,
  test2: test2,
  test3: test3,
  test4: test4
};

var func = types[type];
(!func) && throw new Error('Invalid value ' + type); func();
```

## 27.按位索引简写

当我们遍历数组以查找特定值时，我们确实使用 `indexOf()` 方法，如果找到更好的方法该怎么办？让我们看看这个例子。

```
//longhand
if(arr.indexOf(item) > -1) { // item found
}
if(arr.indexOf(item) === -1) { // item not found
}

//shorthand
if(~arr.indexOf(item)) { // item found
}
if(!~arr.indexOf(item)) { // item not found
}
```

按位（`〜`）运算符将返回除-1 以外的任何值的真实值。否定它就像做 `~~` 一样简单。另外，我们也可以使用 `include()` 函数：

```
if (arr.includes(item)) {
    // true if the item found
}
```

## 28.Object.entries()

此函数有助于将对象转换为对象数组。

```
const data = { test1: 'abc', test2: 'cde', test3: 'efg' };
const arr = Object.entries(data);
console.log(arr);
/** Output:
[ [ 'test1', 'abc' ],
  [ 'test2', 'cde' ],
  [ 'test3', 'efg' ]
]
**/
```

## 29.Object.values()

这也是 ES8 中引入的一项新功能，该功能执行与 `Object.entries()` 类似的功能，但没有关键部分：

```
const data = { test1: 'abc', test2: 'cde' };
const arr = Object.values(data);
console.log(arr);
/** Output:
[ 'abc', 'cde']
**/
```

## 30.双按位简写

双重 NOT 按位运算符方法仅适用于 32 位整数）

```
// Longhand
Math.floor(1.9) === 1 // true

// Shorthand
~~1.9 === 1 // true
```

## 31.重复一个字符串多次

要一次又一次地重复相同的字符，我们可以使用 for 循环并将它们添加到同一循环中，但是如果我们有一个简写方法呢？

```
//longhand
let test = '';
for(let i = 0; i < 5; i ++) {
  test += 'test ';
}
console.log(str); // test test test test test

//shorthand
'test '.repeat(5);
```

## 32.在数组中查找最大值和最小值

```
const arr = [1, 2, 3];
Math.max(…arr); // 3
Math.min(…arr); // 1
```

## 33.从字符串中获取字符

```
let str = 'abc';

//Longhand
str.charAt(2); // c

//Shorthand
Note: If we know the index of the array then we can directly use index insted of character.If we are not sure about index it can throw undefined
str[2]; // c
```

## 34.数学指数幂函数的简写

```
//longhand
Math.pow(2,3); // 8

//shorthand
2**3 // 8
```

# 20+个JavaScript单行代码

## 01-随机获取布尔值

此函数将使用`Math.random()`方法返回布尔值（真或假）。
`Math.random`创建一个介于0和1之间的随机数，然后我们检查它是否大于或小于0.5。
这意味着有50/50的机会会得到对或错。
![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/H8M5QJDxMHrtw7QYy4yiaUIHhU3N0IiblJzobPuudwA00laEdibXnMEyHuhnn6blyG29Hx0Np58UyyrgibwZW9ic3Gg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

```
const getRandomBoolean = () => Math.random() >= 0.5;

console.log(getRandomBoolean());
// a 50/50 chance of returning true or false
```

## 02-检查日期是否为周末

通过此功能，你将能够检查提供的日期是工作日还是周末。
![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/H8M5QJDxMHrtw7QYy4yiaUIHhU3N0IiblJiaA1tLD1mIloslsqZHbTaXVO8NLG5JYTC6ZqYUXuHL2H9NZibd4RWLiaA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

```
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;

console.log(isWeekend(new Date(2021, 4, 14)));
// false (Friday)
console.log(isWeekend(new Date(2021, 4, 15)));
// true (Saturday)
```

## 03-检查数字是偶数还是奇数

简单的实用程序功能，用于检查数字是偶数还是奇数。
![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/H8M5QJDxMHrtw7QYy4yiaUIHhU3N0IiblJTJuGbG5HfKJcU9EzMhouJ3JhfL2Yjn8UFtaicQHajTINQPpsibQuHtyw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

```
const isEven = (num) => num % 2 === 0;

console.log(isEven(5));
// false
console.log(isEven(4));
// true
```

## 04-获取数组中的唯一值(数组去重)

从数组中删除所有重复值的非常简单的方法。此函数将数组转换为Set，然后返回数组。
![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/H8M5QJDxMHrtw7QYy4yiaUIHhU3N0IiblJuG8TKEvYmiaJj9VOIOTictraFmxXy8JwGlMiaUJHLkbMCDg3zDVJicsuuA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

```
const uniqueArr = (arr) => [...new Set(arr)];

console.log(uniqueArr([1, 2, 3, 1, 2, 3, 4, 5]));
// [1, 2, 3, 4, 5]
```

## 05-检查变量是否为数组

一种检查变量是否为数组的干净简便的方法。

当然，也可以有其他方法😉
![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/H8M5QJDxMHrtw7QYy4yiaUIHhU3N0IiblJr5snXvLXhXd3icR8tTtvyxz6T3DpIP5tEqeUIiaibXicIyPT7CiaYsA5hiag/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

```
const isArray = (arr) => Array.isArray(arr);

console.log(isArray([1, 2, 3]));
// true
console.log(isArray({ name: 'Ovi' }));
// false
console.log(isArray('Hello World'));
// false
```

## 06-在两个数字之间生成一个随机数

这将以两个数字为参数，并将在这两个数字之间生成一个随机数！

```
const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

console.log(random(1, 50));
// could be anything from 1 - 50
```

## 07-生成随机字符串（唯一ID？）

也许你需要`临时`的唯一ID，这是一个技巧，你可以使用它在旅途中生成随机字符串。
![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/H8M5QJDxMHrtw7QYy4yiaUIHhU3N0IiblJQ5K0PicMGDDXGjYxR1lY8CmQshPNjHmLA2dYBqnGBpe6Wibng3CnuOFQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

```
const randomString = () => Math.random().toString(36).slice(2);

console.log(randomString());
// could be anything!!!
```

## 08-滚动到页面顶部

所述`window.scrollTo（）`方法把一个`X`和`Y`坐标滚动到。
如果将它们设置为零和零，我们将滚动到页面顶部。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/H8M5QJDxMHrtw7QYy4yiaUIHhU3N0IiblJx4RNHWpCV334EaibOqq8CGk5ibdNC7yMlACAC1rvDK0rlqkRDia0V0KBA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)image.png

```
const scrollToTop = () => window.scrollTo(0, 0);

scrollToTop();
```

## 09-切换布尔

切换布尔值是非常基本的编程问题之一，可以通过许多不同的方法来解决。
代替使用if语句来确定将布尔值设置为哪个值，你可以使用函数使用！翻转当前值。`非`运算符。
![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/H8M5QJDxMHrtw7QYy4yiaUIHhU3N0IiblJyXmONjqWiaqIm9yRaJEs2FS3icWfNBS2iblh7SH3U5hygia1d70fZ28ehQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

```
// bool is stored somewhere in the upperscope
const toggleBool = () => (bool = !bool);
//or
const toggleBool = b => !b;
```

## 10-交换两个变量

下面的代码是不使用第三个变量而仅使用一行代码即可交换两个变量的更简单方法之一。
![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/H8M5QJDxMHrtw7QYy4yiaUIHhU3N0IiblJABzdyarTnVvfvX9xLpoS8ZXLYr4RZ1iaXL2ichH9AIN2KMsHRF8icANZg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

```
[foo, bar] = [bar, foo];
```

## 11-计算两个日期之间的天数

要计算两个日期之间的天数，
我们首先找到两个日期之间的绝对值，然后将其除以86400000（等于一天中的毫秒数），最后将结果四舍五入并返回。
![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/H8M5QJDxMHrtw7QYy4yiaUIHhU3N0IiblJVIOOiantl6YX1vWAhhYibRiapRy0rTzZcHtFqvmOpu5zzjLQqFGRNRmqw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

```
const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);

console.log(daysDiff(new Date('2021-05-10'), new Date('2021-11-25')));
// 199
```

## 12-将文字复制到剪贴板

PS：你可能需要添加检查以查看是否存在`navigator.clipboard.writeText`
![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/H8M5QJDxMHrtw7QYy4yiaUIHhU3N0IiblJibcT6fGm1BYnUibHPtTZD9qfJXN7bKaQasqSCYnar8Mzh8smufyT5GIQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

```
const copyTextToClipboard = async (text) => {
  await navigator.clipboard.writeText(text);
};
```

## 13-合并多个数组的不同方法

有两种合并数组的方法。其中之一是使用`concat`方法。另一个使用扩展运算符（`…`）。

PS：我们也可以使用“设置”对象从最终数组中复制任何内容。
![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/H8M5QJDxMHrtw7QYy4yiaUIHhU3N0IiblJQWJVWicBe23VPVtLF5VsjXNaFic6QEctA59FsDSQmd7jEnCMNJbrjqug/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

```
// Merge but don't remove the duplications
const merge = (a, b) => a.concat(b);
// Or
const merge = (a, b) => [...a, ...b];

// Merge and remove the duplications
const merge = [...new Set(a.concat(b))];
// Or
const merge = [...new Set([...a, ...b])];
```

## 14-获取javascript语言的实际类型

人们有时会使用库来查找JavaScript中某些内容的实际类型，这一小技巧可以节省你的时间（和代码大小）。
![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/H8M5QJDxMHrtw7QYy4yiaUIHhU3N0IiblJFOK1myPfEDPQwoK5I7X98KW3DxZpfVFddOUYONxACxpcUE3pnu5eDw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

```
const trueTypeOf = (obj) => {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
};

console.log(trueTypeOf(''));
// string
console.log(trueTypeOf(0));
// number
console.log(trueTypeOf());
// undefined
console.log(trueTypeOf(null));
// null
console.log(trueTypeOf({}));
// object
console.log(trueTypeOf([]));
// array
console.log(trueTypeOf(0));
// number
console.log(trueTypeOf(() => {}));
// function
```

## 15-在结尾处截断字符串

需要从头开始截断字符串，这不是问题！
![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/H8M5QJDxMHrtw7QYy4yiaUIHhU3N0IiblJbuMPIdwz7Dic0FqJ8T6tDp2gmDZaTqJWTfdrMI3Z2iaJiasA8kbsVNNTQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

```
const truncateString = (string, length) => {
  return string.length < length ? string : `${string.slice(0, length - 3)}...`;
};

console.log(
  truncateString('Hi, I should be truncated because I am too loooong!', 36),
);
// Hi, I should be truncated because...
```

## 16-从中间截断字符串

从中间截断字符串怎么样？

该函数将一个字符串作为第一个参数，然后将我们需要的字符串大小作为第二个参数，然后从第3个和第4个参数开始和结束需要多少个字符
![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/H8M5QJDxMHrtw7QYy4yiaUIHhU3N0IiblJh3PxaicKLaMUJBGwS2Y6KXibZ4LicXzPZvo8MtlcuIjiaTcVWELrCzywUA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

```
const truncateStringMiddle = (string, length, start, end) => {
  return `${string.slice(0, start)}...${string.slice(string.length - end)}`;
};

console.log(
  truncateStringMiddle(
    'A long story goes here but then eventually ends!', // string
    25, // 需要的字符串大小
    13, // 从原始字符串第几位开始截取
    17, // 从原始字符串第几位停止截取
  ),
);
// A long story ... eventually ends!
```

## 17-大写字符串

好吧，不幸的是，`JavaScript`没有内置函数来大写字符串，但是这种解决方法可以实现。
![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/H8M5QJDxMHrtw7QYy4yiaUIHhU3N0IiblJKiaWnMWicky7MExB5JibXSBoiavbcJZo8DicRxNfHjAuYeiaQrQzN4nQDmxg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

```
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

console.log(capitalize('hello world'));
```

// Hello world

## 18-检查当前选项卡是否在视图/焦点内

此简单的帮助程序方法根据选项卡是否处于视图/焦点状态而返回`true`或`false`
![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/H8M5QJDxMHrtw7QYy4yiaUIHhU3N0IiblJm63aePOLticlPvLkgsAticC73bTg8WyP7ptm0jiaThpmpBSdjIa89fPRA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

```
const isTabInView = () => !document.hidden;  // Not hidden

isTabInView();
```

// true/false

## 19-检查用户是否在Apple设备上

如果用户使用的是`Apple`设备，则返回`true`
![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/H8M5QJDxMHrtw7QYy4yiaUIHhU3N0IiblJtibhme1GRBib4Sic6iaFDQxpQZwQWiasbNrv2liaib2rczyupicl3j4eRwtjUw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

```
const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);

console.log(isAppleDevice);
// true/false
```

## 20-三元运算符

当你只想在一行中编写`if..else`语句时，这是一个很好的代码保护程序。
![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/H8M5QJDxMHrtw7QYy4yiaUIHhU3N0IiblJbWM22blomyH2W0PJhSjjS4vYlZJ1eGSjqVYP99Aq525libtDXqiaf6bA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

```
// Longhand
const age = 18;
let greetings;

if (age < 18) {
  greetings = 'You are not old enough';
} else {
  greetings = 'You are young!';
}

// Shorthand
const greetings = age < 18 ? 'You are not old enough' : 'You are young!';
```

## 21-短路评估速记

在将变量值分配给另一个变量时，可能要确保源变量不为null，未定义或为空。
可以编写带有多个条件的long if语句，也可以使用短路评估。
![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/H8M5QJDxMHrtw7QYy4yiaUIHhU3N0IiblJBRLwe9icJ1QtZagkYxJ1mIjibnzz2iavsSDCkAvh8tWxic43oHuNrTMKeQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

```js
// Longhand
if (name !== null || name !== undefined || name !== '') {
  let fullName = name;
}

// Shorthand
const fullName = name || 'buddy';
```

## 22-检测对象是否为空

```JS
const isEmpty = obj => Reflect.ownKeys(obj).length === 0 && obj.constructor === Object
```

在这一行中，我们检查对象的键的长度是否等于 0，以及传递的参数是否为实际对象。