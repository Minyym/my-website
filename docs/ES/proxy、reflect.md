---
sidebar_position: 7

---

## Proxy

- Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”。要使得`Proxy`起作用，必须针对`Proxy`实例（上例是`proxy`对象）进行操作，而不是针对目标对象（上例是空对象）进行操作。

- 对于可以设置、但没有设置拦截的操作，则直接落在目标对象上，按照原先的方式产生结果。

  ```js
  const obj = {a:'a'}
  const proxy = new Proxy(obj,{
  	get: function(tar,key){
  		return 'aa' + key
  	}
  })
  proxy.a //'aaa' get操作
  proxy.b= 'b' // 这是set操作，但是proxy没有设置，就直接落在了目标对象上
  obj // {a: 'a', b: 'b'}
  proxy // Proxy {a: 'a', b: 'b'}
  ```

### 13种操作

- **get(target, propKey, receiver)**：拦截对象属性的读取，比如`proxy.foo`和`proxy['foo']`。
- **set(target, propKey, value, receiver)**：拦截对象属性的设置，比如`proxy.foo = v`或`proxy['foo'] = v`，返回一个布尔值。
- **has(target, propKey)**：拦截`propKey in proxy`的操作，返回一个布尔值。
- **deleteProperty(target, propKey)**：拦截`delete proxy[propKey]`的操作，返回一个布尔值。
- **ownKeys(target)**：拦截`Object.getOwnPropertyNames(proxy)`、`Object.getOwnPropertySymbols(proxy)`、`Object.keys(proxy)`、`for...in`循环，返回一个数组。该方法返回目标对象所有自身的属性的属性名，而`Object.keys()`的返回结果仅包括目标对象自身的可遍历属性。
- **getOwnPropertyDescriptor(target, propKey)**：拦截`Object.getOwnPropertyDescriptor(proxy, propKey)`，返回属性的描述对象。
- **defineProperty(target, propKey, propDesc)**：拦截`Object.defineProperty(proxy, propKey, propDesc）`、`Object.defineProperties(proxy, propDescs)`，返回一个布尔值。
- **preventExtensions(target)**：拦截`Object.preventExtensions(proxy)`，返回一个布尔值。
- **getPrototypeOf(target)**：拦截`Object.getPrototypeOf(proxy)`，返回一个对象。
- **isExtensible(target)**：拦截`Object.isExtensible(proxy)`，返回一个布尔值。
- **setPrototypeOf(target, proto)**：拦截`Object.setPrototypeOf(proxy, proto)`，返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截。
- **apply(target, object, args)**：拦截 Proxy 实例作为函数调用的操作，比如`proxy(...args)`、`proxy.call(object, ...args)`、`proxy.apply(...)`。
- **construct(target, args)**：拦截 Proxy 实例作为构造函数调用的操作，比如`new proxy(...args)`。

### set

1. 如果目标对象自身的某个属性不可写，那么`set`方法将不起作用。
2. `set`代理应当返回一个布尔值。严格模式下，`set`代理如果没有返回`true`，就会报错。
3. `set`方法用来拦截某个属性的赋值操作，可以接受四个参数，依次为目标对象、属性名、属性值和 Proxy 实例本身，其中最后一个参数可选。

### apply

1. `apply`方法拦截函数的调用、`call`和`apply`操作。

2. `apply`方法可以接受三个参数，分别是目标对象、目标对象的上下文对象（`this`）和目标对象的参数数组。

   ```js
   var twice = {
     apply (target, ctx, args) {
       return Reflect.apply(...arguments) * 2;
     }
   };
   function sum (left, right) {
     return left + right;
   };
   var proxy = new Proxy(sum, twice);
   proxy(1, 2) // 6
   proxy.call(null, 5, 6) // 22
   proxy.apply(null, [7, 8]) // 30
   ```

3. 上面代码中，每当执行`proxy`函数（直接调用或`call`和`apply`调用），就会被`apply`方法拦截。

   另外，直接调用`Reflect.apply`方法，也会被拦截。

   ```javascript
   Reflect.apply(proxy, null, [9, 10]) // 38
   ```

### has

1. `has()`方法可以接受两个参数，分别是目标对象、需查询的属性名。

2. 如果原对象不可配置或者禁止扩展，这时`has()`拦截会报错。‘

3. `has()`拦截只对`in`运算符生效，对`for...in`循环不生效，导致不符合要求的属性没有被`for...in`循环所排除。

   ```js
   let stu1 = {name: '张三', score: 59};
   let stu2 = {name: '李四', score: 99};
   
   let handler = {
     has(target, prop) {
       if (prop === 'score' && target[prop] < 60) {
         console.log(`${target.name} 不及格`);
         return false;
       }
       return prop in target;
     }
   }
   
   let oproxy1 = new Proxy(stu1, handler);
   let oproxy2 = new Proxy(stu2, handler);
   
   'score' in oproxy1
   // 张三 不及格
   // false
   
   'score' in oproxy2
   // true
   
   for (let a in oproxy1) {
     console.log(oproxy1[a]);
   }
   // 张三
   // 59
   ```

### construct()

1. `construct()`方法用于拦截`new`命令
2. `construct()`方法返回的必须是一个对象，否则会报错
3. 由于`construct()`拦截的是构造函数，所以它的目标对象必须是函数，否则就会报错。
4. `construct()`方法中的`this`指向的是`handler`，而不是实例对象

### todo。。。。



## reflect

1. `Reflect`对象与`Proxy`对象一样，也是 ES6 为了操作对象而提供的新 API。`Reflect`对象的设计目的有这样几个。

   （1） 将`Object`对象的一些明显属于语言内部的方法（比如`Object.defineProperty`），放到`Reflect`对象上。现阶段，某些方法同时在`Object`和`Reflect`对象上部署，未来的新方法将只部署在`Reflect`对象上。也就是说，从`Reflect`对象上可以拿到语言内部的方法。

   （2） 修改某些`Object`方法的返回结果，让其变得更合理。比如，`Object.defineProperty(obj, name, desc)`在无法定义属性时，会抛出一个错误，而`Reflect.defineProperty(obj, name, desc)`则会返回`false`。

   （3） 让`Object`操作都变成函数行为。某些`Object`操作是命令式，比如`name in obj`和`delete obj[name]`，而`Reflect.has(obj, name)`和`Reflect.deleteProperty(obj, name)`让它们变成了函数行为。

   （4）`Reflect`对象的方法与`Proxy`对象的方法一一对应，只要是`Proxy`对象的方法，就能在`Reflect`对象上找到对应的方法。这就让`Proxy`对象可以方便地调用对应的`Reflect`方法，完成默认行为，作为修改行为的基础。也就是说，不管`Proxy`怎么修改默认行为，你总可以在`Reflect`上获取默认行为。

2. Reflect.get返回获取的值，Reflect.set返回布尔值

