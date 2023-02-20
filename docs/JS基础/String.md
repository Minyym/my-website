---
sidebar_position: 5
---

### String.prototype.replace()

- **`replace()`** 方法返回一个由替换值（`replacement`）替换部分或所有的模式（`pattern`）匹配项后的新字符串。模式可以是一个字符串或者一个[正则表达式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp)，替换值可以是一个字符串或者一个每次匹配都要调用的回调函数。**如果`pattern`是字符串，则仅替换第一个匹配项。**

- 语法：`str.replace(regexp|substr, newSubStr|function)`

  ```js
  const p = 'lazy dog. If the dog reacted';
  
  console.log(p.replace('dog', 'monkey'));
  // expected output: "lazy monkey. If the dog reacted"
  
  
  const regex = /Dog/ig;
  console.log(p.replace(regex, 'ferret'));
  // expected output: "lazy ferret. If the ferret reacted"
  
  ```

- 第二个参数是函数时

  ```js
  const p = 'lazy dog. If the dog reacted';
  const regex = /Dog/ig;
  p.replace(regex, (s,s1,s2)=>{
      console.log('--',s,s1,s2)
      //-- dog 5 lazy dog. If the dog reacted
      //-- dog 17 lazy dog. If the dog reacted
      return 1
  })
  p
  // 'lazy 1. If the 1 reacted'
  ```

  - 下面是该函数的参数：

    | 变量名            | 代表的值                                                     |
    | ----------------- | ------------------------------------------------------------ |
    | `match`           | 匹配的子串。（对应于上述的$&。）                             |
    | `p1,p2, ...`      | 假如replace()方法的第一个参数是一个[`RegExp`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp) 对象，则代表第n个括号匹配的字符串。（对应于上述的$1，$2等。）例如，如果是用 `/(\a+)(\b+)/` 这个来匹配，`p1` 就是匹配的 `\a+`，`p2` 就是匹配的 `\b+`。 |
    | `offset`          | 匹配到的子字符串在原字符串中的偏移量。（比如，如果原字符串是 `'abcd'`，匹配到的子字符串是 `'bc'`，那么这个参数将会是 1） |
    | `string`          | 被匹配的原字符串。                                           |
    | NamedCaptureGroup | 命名捕获组匹配的对象                                         |

# Object.prototype.toString()

- **`toString()`** 方法返回一个表示该对象的字符串。
- 参数：默认情况下，不接受任何参数，然而继承Object的对象可以重新实现它
- [`Number.prototype.toString()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) 和 [`BigInt.prototype.toString()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt/toString) 方法接受一个可选的 `radix` 参数。
  - radix：指定转换到几进制`numObj.toString(2)` 转换到二进制