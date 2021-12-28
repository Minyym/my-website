---
sidebar_position: 1
---

## new操作符

- new操作符做了哪些事情

  - 创建了一个对象
  - 把构造函数的this指向当前的对象o  并且向调用构造函数并传入参数
  - 把自定义对象的隐式原型指向构造函数的显式原型
  - 判断构造函数的返回值是基础值 还是对象（是基础值返回实力对象，是对象就返回构造函数的返回值）

- 手写一个new

  ```js
  function funNew(construcor){
    const obj = {}
    const result = construcor.apply(obj,Array.prototype.slice.call(arguments,1))
    obj.__proto__ = construcor.prototype
    const isObj = typeof result === 'object' && result != null
    const isFun = typeof reult === 'function'
    return (isObj || isFun ) ? result : obj
  }
  function person(name){
  this.name = name
  }
  const lili = new person('name')
  ```

## instanceof操作符

- 什么是instanceof？a的proto能找到b的prototype

- 手写instanceof

  ```js
  function newInstanceof(a, b) {
    let pro = a.__proto__;
    while (pro) {
      if (pro === b.prototype) {
        return true;
      }
      pro = pro.__proto__;
    }
  
    return false;
  }
  function person() {
    return 1;
  }
  const a3 = new person();
  myInstanceof(a3, person);//true
  ```

  
