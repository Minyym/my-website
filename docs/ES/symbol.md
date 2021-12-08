---
sidebar_position: 6
---

## 简介

- symbol是一种新的数据类型（object, string,number,undefined,null.boolean,bigint）

- 使用typeof检测返回的是symbol

- symbol生成的是一个独一无二的值，不可以使用new进行调用

- 属性名可以使用symbol

  ```js
  let s = Symbol();
  typeof s
  // "symbol"
  const obj = {
  	[s]:'nihao'
  }
  console.log(obj[s]) // nihao
  ```

- symbol可以接受一个字符串作为参数，表示对 Symbol 实例的描述，主要是为了在控制台显示，或者转为字符串时，比较容易区分。

  ```js
  let s1 = Symbol('foo');
  let s2 = Symbol('bar');
  
  s1 // Symbol(foo)
  s2 // Symbol(bar)
  
  s1.toString() // "Symbol(foo)"
  s2.toString() // "Symbol(bar)"
  //s1和s2是不相等的
  ```

- 类型转换

  - 不可以与其他的类型进行运算，会报错

  - Symbol 值可以显式转为字符串。

    ```js
    let sym = Symbol('My symbol');
    
    String(sym) // 'Symbol(My symbol)'
    sym.toString() // 'Symbol(My symbol)'
    ```

  - Symbol 值也可以转为布尔值，但是不能转为数值。

    ```js
    let sym = Symbol();
    Boolean(sym) // true
    !sym  // false
    // 数值
    Number(sym) // TypeError
    sym + 2 // TypeError
    ```

## Symbol.prototype.description

- 获取symbol的描述符

  ```js
  const sym = Symbol('foo');
  sym.description // "foo"
  ```

## Symbol作为属性名

- ```js
  let mySymbol = Symbol();
  
  // 第一种写法
  let a = {};
  a[mySymbol] = 'Hello!';
  
  // 第二种写法
  let a = {
    [mySymbol]: 'Hello!'
  };
  
  // 第三种写法
  let a = {};
  Object.defineProperty(a, mySymbol, { value: 'Hello!' });
  
  // 以上写法都得到同样结果
  a[mySymbol] // "Hello!"
  ```

- Symbol 值作为对象属性名时，不能用点运算符。

  ```javascript
  const mySymbol = Symbol();
  const a = {};
  
  a.mySymbol = 'Hello!'; // mySymbol当成字符串了
  a[mySymbol] // undefined
  a['mySymbol'] // "Hello!"
  ```

- 在对象的内部，使用 Symbol 值定义属性时，Symbol 值必须放在方括号之中。

  ```javascript
  let s = Symbol();
  
  let obj = {
    [s]: function (arg) { ... }
  };
  
  obj[s](123);
  // 简写为下面这个
  let obj = {
    [s](arg) { ... }
  };
  ```

## 属性名遍历

- Symbol 作为属性名，遍历对象的时候，该属性不会出现在`for...in`、`for...of`循环中，也不会被`Object.keys()`、`Object.getOwnPropertyNames()`、`JSON.stringify()`返回。

- `Object.getOwnPropertySymbols()`方法，可以获取指定对象的所有 Symbol 属性名。该方法返回一个数组，成员是当前对象的所有用作属性名的 Symbol 值。

  ```js
  const obj = {};
  let a = Symbol('a');
  let b = Symbol('b');
  
  obj[a] = 'Hello';
  obj[b] = 'World';
  
  const objectSymbols = Object.getOwnPropertySymbols(obj);
  
  objectSymbols
  // [Symbol(a), Symbol(b)]
  ```

- 另一个新的 API，`Reflect.ownKeys()`方法可以返回所有类型的键名，包括常规键名和 Symbol 键名。

  ```js
  let obj = {
    [Symbol('my_key')]: 1,
    enum: 2,
    nonEnum: 3
  };
  
  Reflect.ownKeys(obj)
  //  ["enum", "nonEnum", Symbol(my_key)]
  ```

## Symbol.for()，Symbol.keyFor()

- Symbol.for()使用的是同一个Symbol值

  ```js
  let s1 = Symbol.for('foo');
  let s2 = Symbol.for('foo');
  
  s1 === s2 // true
  ```

  `Symbol.for()`为 Symbol 值登记的名字，是全局环境的，不管有没有在全局环境运行。

- `Symbol.keyFor()`方法返回一个已登记的 Symbol 类型值的`key`。

  ```js
  let s1 = Symbol.for("foo");
  Symbol.keyFor(s1) // "foo"
  
  let s2 = Symbol("foo");
  Symbol.keyFor(s2) // undefined
  ```

## 内置的symbol值

- ### Symbol.hasInstance

  - 对象的`Symbol.hasInstance`属性，指向一个内部方法。当其他对象使用`instanceof`运算符，判断是否为该对象的实例时，会调用这个方法

    ```js
    class MyClass {
      [Symbol.hasInstance](foo) {
        return foo instanceof Array;
      }
    }
    
    [1, 2, 3] instanceof new MyClass() // true
    ```

- 