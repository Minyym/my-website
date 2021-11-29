---
sidebar_position: 5


---

## ES5的继承

- 原型链+借用构造函数的组合继承

  利用原型链实现对父类型对象的方法继承

  利用super()借用父类型构建函数初始化相同属性

  ```js
  function Person(name, age) {
      this.name = name
      this.age = age
  }
  Person.prototype.setName = function (name) {
      this.name = name
  }
  
  function Student(name, age, price) {
      Person.call(this, name, age) //得到父类型的属性
      this.price = price
  }
  Student.prototype = new Person()  //得到父类型的方法
  Student.prototype.constructor = Student
  Student.prototype.setPrice = function (price) {
      this.price = price
  }
  
  var s = new Student('Tom', 12, 10000)
  s.setPrice(11000)
  s.setName('Bob')
  console.log(s)
  console.log(s.constructor)
  ```

## ES6的继承

- ```js
  class Point {
    constructor(x,y){
      this.x = x
      this.y = y
    }
    eat () {
      console.log('point eat')
    }
  }
  class ColorPoint extends Point {
    constructor(x, y, color) {
      //// ES6中继承的子类中，如果使用构造函数constructor()那么就必须使用super()方法初始化，这样下面才可以调用this关键字。super()只能用在子类的构造函数之中，用在其他地方就会报错,这是因为子类自己的this对象，必须先通过父类的构造函数完成塑造，得到与父类同样的实例属性和方法，然后再对其进行加工，加上子类自己的实例属性和方法。
      super(x, y); // 调用父类的constructor(x, y)
      this.color = color;
    }
  
    toString() {
      return this.color + ' ' + super.toString(); // 调用父类的toString()
    }
  }
  ```

- 父类的静态方法，也会被子类继承。

## Object.getPrototypeOf()

- `Object.getPrototypeOf`方法可以用来从子类上获取父类。

  ```js
  Object.getPrototypeOf(ColorPoint) === Point
  // true

- 因此，可以使用这个方法判断，一个类是否继承了另一个类。

## super关键字

- super在子类中可以当函数使用，也可以当对象使用

  - 函数 --- super指向父类构造函数，this指向当前实例
  - 对象
    - 普通方法中，super指向父类的原型对象，this指向实例
    - 静态方法，super指向父类，this指向子类函数

- super当函数使用的时候

  - super()，代表父类的构造函数，只能在子类的构造函数中进行调用（`super`虽然代表了父类`A`的构造函数，但是返回的是子类`B`的实例，即`super`内部的`this`指的是`B`的实例，因此`super()`在这里相当`A.prototype.constructor.call(this)`）

    ```js
    class A {
      constructor() {
        console.log(new.target.name);
      }
    }
    class B extends A {
      constructor() {
        super();
      }
    }
    new A() // A
    new B() // B
    ```

  - `super`作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类。

    ```js
    class A {
      p() {
        return 2;
      }
    }
    
    class B extends A {
      constructor() {
        super();
        console.log(super.p()); // 2
      }
    }
    
    let b = new B();
    
    ```

    - ES6 规定，在子类普通方法中通过`super`调用父类的方法时，方法内部的`this`指向当前的子类实例。

      ```js
      class A {
        constructor() {
          this.x = 1;
        }
        print() {
          console.log(this.x);
        }
      }
      
      class B extends A {
        constructor() {
          super();
          this.x = 2;
        }
        m() {
          super.print();
        }
      }
      
      let b = new B();
      b.m() // 2
      ```

      

  - 如果`super`作为对象，用在静态方法之中，这时`super`将指向父类，而不是父类的原型对象。

    ```js
    class Parent {
      static myMethod(msg) {
        console.log('static', msg);
      }
    
      myMethod(msg) {
        console.log('protoType', msg);
      }
    }
    
    class Child extends Parent {
      static myMethod(msg) {
        super.myMethod(msg);
      }
    
      myMethod(msg) {
        super.myMethod(msg);
      }
    }
    
    Child.myMethod(1); // static 1
    
    var child = new Child();
    child.myMethod(2); // protoType 2
    ```

    - 在子类的静态方法中通过`super`调用父类的方法时，方法内部的`this`指向当前的子类，而不是子类的实例。

      ```js
      class A {
        constructor() {
          this.x = 1;
        }
        static print() {
          console.log(this.x);
        }
      }
      
      class B extends A {
        constructor() {
          super();
          this.x = 2;
        }
        static m() {
          super.print();
        }
      }
      
      B.x = 3;
      B.m() // 3
      ```

## 类的 prototype 属性和__proto__属性

- 子类的`__proto__`属性，表示构造函数的继承，总是指向父类。

- 子类`prototype`属性的`__proto__`属性，表示方法的继承，总是指向父类的`prototype`属性。

  ```js
  class A {
  }
  
  class B extends A {
  }
  
  B.__proto__ === A // true
  B.prototype.__proto__ === A.prototype // true
  ```

## 实例的 __proto__ 属性

- 子类实例的`__proto__`属性的`__proto__`属性，指向父类实例的`__proto__`属性。也就是说，子类的原型的原型，是父类的原型。

  ```js
  var p1 = new Point(2, 3);
  var p2 = new ColorPoint(2, 3, 'red');
  
  p2.__proto__ === p1.__proto__ // false
  p2.__proto__.__proto__ === p1.__proto__ // true
  
  p2.__proto__ === ColorPoint.prototype // true
  p2.__proto__.__proto__ === ColorPoint.prototype.__proto__//true
  ColorPoint.prototype.__proto__ === Point.prototype//true
  Point.prototype === p1.__proto__// true
  
  ```

- 上面代码中，`ColorPoint`继承了`Point`，导致前者原型的原型是后者的原型。