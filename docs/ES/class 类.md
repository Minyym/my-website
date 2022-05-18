---
sidebar_position: 4

---

## 类

类是es5的中组合继承（盗用构造函数和原型链）的语法糖

#### 类构造函数和构造函数定义的区别

1. 函数可以声明提升，类没有声明提升

2. 函数受函数作用域限制，类受块级作用域的限制

3. 调用类构造函数必须使用new操作符，不实用new操作符会抛出错

   构造函数不使用new操作符，那么就会以全局的this（window）作为内部对象

## class

- 原本的js生成实力对象的方法是通过构造函数

  ```js
  function Point(x, y) {
    this.x = x;
    this.y = y;
  }
  
  Point.prototype.toString = function () {
    return '(' + this.x + ', ' + this.y + ')';
  };
  
  var p = new Point(1, 2);
  ```

- ES6增加了class类语法糖

  ```js
  class Point {
    // constructor 和 toString都声明在了Point的protoType上
    constructor(x,y){ // 构造器
  		this.x = x; // this代表实例对象
    	this.y = y;
  	}
    // constructor新写法
    x = 0 
  	toString(){ // 不需要加function
       return '(' + this.x + ', ' + this.y + ')';
    }
  }
  typeof Point // "function"
  Point === Point.prototype.constructor // true
  ```

- 类的内部所有定义的方法，都是不可枚举的（non-enumerable）

## constructor

- `constructor()`方法是类的默认方法，通过`new`命令生成对象实例时，自动调用该方法。一个类必须有`constructor()`方法，如果没有显式定义，一个空的`constructor()`方法会被默认添加。
- `constructor()`方法默认返回实例对象（即`this`）完全可以指定返回另外一个对象
- 类必须使用`new`调用，否则会报错。这是它跟普通构造函数的一个主要区别，后者不用`new`也可以执行。

## 类的实例

- 生成类的实例的写法，与 ES5 完全一样，也是使用`new`命令。前面说过，如果忘记加上`new`，像函数那样调用`Class`，将会报错。
- 定义在constructor中的，实例的时候是在自身上，其余在protoType中

## 取值函数（getter）和存值函数（setter）

- 与 ES5 一样，在“类”的内部可以使用`get`和`set`关键字，对某个属性设置存值函数和取值函数，拦截该属性的存取行为。

  ```js
  class MyClass {
    constructor() {
      // ...
    }
    get prop() {
      return 'getter';
    }
    set prop(value) {
      console.log('setter: '+value);
    }
  }
  
  let inst = new MyClass();
  
  inst.prop = 123;
  // setter: 123
  
  inst.prop
  // 'getter'
  ```

## 属性表达式

- 类的属性名，可以采用表达式。

  ```js
  let methodName = 'getArea';
  
  class Square {
    constructor(length) {
      // ...
    }
  
    [methodName]() {
      // ...
    }
  }
  ```

## Class 表达式

- 与函数一样，类也可以使用表达式的形式定义。

  ```js
  const MyClass = class Me {
    getClassName() {
      return Me.name;
    }
  };
  ```

- 上面代码使用表达式定义了一个类。需要注意的是，这个类的名字是`Me`，但是`Me`只在 Class 的内部可用，指代当前类。在 Class 外部，这个类只能用`MyClass`引用。

  ```js
  let inst = new MyClass();
  inst.getClassName() // Me
  Me.name // ReferenceError: Me is not defined
  ```

## 注意点

- 默认使用的是严格模式

- 不存在变量提升

- `name`属性总是返回紧跟在`class`关键字后面的类名。

- **Generator 方法**

  ```js
  class Foo {
    constructor(...args) {
      this.args = args;
    }
    * [Symbol.iterator]() {
      for (let arg of this.args) {
        yield arg;
      }
    }
  }
  
  for (let x of new Foo('hello', 'world')) {
    console.log(x);
  }
  // hello
  // world
  ```

  Generator 函数。`Symbol.iterator`方法返回一个`Foo`类的默认遍历器，`for...of`循环会自动调用这个遍历器

- this指向问题

  - 类的方法内部如果含有`this`，它默认指向类的实例。但是，必须非常小心，一旦单独使用该方法，很可能报错。

    ```js
    class Logger {
      printName(name = 'there') {
        this.print(`Hello ${name}`);
      }
    
      print(text) {
        console.log(text);
      }
    }
    
    const logger = new Logger();
    const { printName } = logger;
    printName(); // TypeError: Cannot read property 'print' of undefined
    ```

  - 解决方法

    - bind
    - 箭头函数

## 静态方法和静态属性

- 类相当于实例的原型，所有在类中定义的方法，都会被实例继承。如果在一个方法前，加上`static`关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。

- 静态方法里的this，指向的是类，不是实例对象

- 父类的静态方法，可以被子类继承。

- 静态方法也是可以从`super`对象上调用的。

  ```js
  class Foo {
    static classMethod() {
      return 'hello';
    }
  }
  
  class Bar extends Foo {
    static classMethod() {
      return super.classMethod() + ', too';
    }
  }
  
  Bar.classMethod() // "hello, too"
  ```

## 私有方法和私有属性

- 在前面加上#号

  ```js
  class IncreasingCounter {
    #count = 0;
    get value() {
      console.log('Getting the current value!');
      return this.#count;
    }
    increment() {
      this.#count++;
    }
  }
  const counter = new IncreasingCounter();
  counter.#count // 报错
  counter.#count = 42 // 报错
  ```

## 静态块

- 静态属性的一个问题是，它的初始化要么写在类的外部，要么写在`constructor()`方法里面。

  ```js
  class C {
    static x = ...;
    static y;
    static z;
  
    static {
      try {
        const obj = doSomethingWith(this.x);
        this.y = obj.y;
        this.z = obj.z;
      }
      catch {
        this.y = ...;
        this.z = ...;
      }
    }
  }
  ```

- 静态块内部可以使用类名或`this`，指代当前类。

- 除了静态属性的初始化，静态块还有一个作用，就是将私有属性与类的外部代码分享。

  ```javascript
  let getX;
  
  export class C {
    #x = 1;
    static {
      getX = obj => obj.#x;
    }
  }
  
  console.log(getX(new C())); // 1
  ```

## new.target 属性

- 可以用来确定构造函数是怎么调用的。

- 如果构造函数不是通过`new`命令或`Reflect.construct()`调用的，`new.target`会返回`undefined`

- Class 内部调用`new.target`，返回当前 Class。

- 需要注意的是，子类继承父类时，`new.target`会返回子类。

  ```js
  class Shape {
    constructor() {
      if (new.target === Shape) {
        throw new Error('本类不能实例化');
      }
    }
  }
  
  class Rectangle extends Shape {
    constructor(length, width) {
      super();
      // ...
    }
  }
  
  var x = new Shape();  // 报错
  var y = new Rectangle(3, 4);  // 正确
  上面代码中，Shape类不能被实例化，只能用于继承。
  
  注意，在函数外部，使用new.target会报错。
  ```

  



