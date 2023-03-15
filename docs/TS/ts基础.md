---
sidebar_position: 1

---
| 类型工具                             | 创建新类型的方式                                             | 常见搭配           |
| ------------------------------------ | ------------------------------------------------------------ | ------------------ |
| 类型别名（Type Alias）               | 将一组类型/类型结构封装，作为一个新的类型                    | 联合类型、映射类型 |
| 工具类型（Tool Type）                | 在类型别名的基础上，基于泛型去动态创建新类型                 | 基本所有类型工具   |
| 联合类型（Union Type）               | 创建一组类型集合，满足其中一个类型即满足这个联合类型（\|\|） | 类型别名、工具类型 |
| 交叉类型（Intersection Type）        | 创建一组类型集合，满足其中所有类型才满足映射联合类型（&&）   | 类型别名、工具类型 |
| 索引签名类型（Index Signature Type） | 声明一个拥有任意属性，键值类型一致的接口结构                 | 映射类型           |
| 索引类型查询（Indexed Type Query）   | 从一个接口结构，创建一个由其键名字符串字面量组成的联合类型   | 映射类型           |
| 索引类型访问（Indexed Access Type）  | 从一个接口结构，使用键名字符串字面量访问到对应的键值类型     | 类型别名、映射类型 |
| 映射类型 （Mapping Type）            | 从一个联合类型依次映射到其内部的每一个类型                   | 工具类型           |

## TypeScript 简介

1. TypeScript 是 JavaScript 的超集。
2. 它对 JS 进行了扩展，向 JS 中引入了类型的概念，并添加了许多新的特性。
3. TS 代码需要通过编译器编译(tsc)为 JS，然后再交由 JS 解析器执行。
4. TS 完全兼容 JS，换言之，任何的 JS 代码都可以直接当成 JS 使用。
5. 相较于 JS 而言，TS 拥有了静态类型，更加严格的语法，更强大的功能；TS 可以在代码执行前就完成代码的检查，减小了运行时异常的出现的几率；TS 代码可以编译为任意版本的 JS 代码，可有效解决不同 JS 运行环境的兼容问题；同样的功能，TS 的代码量要大于 JS，但由于 TS 的代码结构更加清晰，变量类型更加明确，在后期代码的维护中 TS 却远远胜于 JS。
6. 添加了js没有的类型（元祖。。。）
7. 可以在任何支持js的平台运行
8. 即使提示报错，也还是会编译成js代码，可以进行配置，不通过编译

## 基本类型

- 类型声明

  - 类型声明是 TS 非常重要的一个特点

  - 通过类型声明可以指定 TS 中变量（参数、形参）的类型

  - 指定类型后，当为变量赋值时，TS 编译器会自动检查值是否符合类型声明，符合则赋值，否则报错

  - 简而言之，类型声明给变量设置了类型，使得变量只能存储某种类型的值

  - 语法：

    - ```typescript
      let 变量: 类型;
      
      let 变量: 类型 = 值;
      
      function fn(参数: 类型, 参数: 类型): 类型{
          ...
      }
      ```

- 自动类型判断

  - TS 拥有自动的类型判断机制
  - 当对变量的声明和赋值是同时进行的，TS 编译器会自动判断变量的类型
  - 所以如果你的变量的声明和赋值时同时进行的，可以省略掉类型声明

- 类型：

  |  类型   |       例子        |              描述               |
  | :-----: | :---------------: | :-----------------------------: |
  | number  |    1, -33, 2.5    |            任意数字             |
  | string  | 'hi', "hi", `hi`  |           任意字符串            |
  | boolean |    true、false    |      布尔值 true 或 false       |
  | 字面量  |      其本身       |  限制变量的值就是该字面量的值   |
  |   any   |         *         |            任意类型             |
  | unknown |         *         |         类型安全的 any          |
  |  void   | 空值（undefined） |     没有值（或 undefined）      |
  |  never  |      没有值       |          不能是任何值           |
  | object  |  {name:'孙悟空'}  |         任意的 JS 对象          |
  |  array  |      [1,2,3]      |          任意 JS 数组           |
  |  tuple  |       [4,5]       | 元素，TS 新增类型，固定长度数组 |
  |  enum   |    enum{A, B}     |       枚举，TS 中新增类型       |

#### number

- ```typescript
  let decimal: number = 6;
  let hex: number = 0xf00d;
  let binary: number = 0b1010;
  let octal: number = 0o744;
  let big: bigint = 100n;
  ```

#### boolean

- ```typescript
  let isDone: boolean = false;
  ```

#### string

- ```typescript
  let color: string = "blue";
  color = "red";
  
  let fullName: string = `Bob Bobbington`;
  let age: number = 37;
  let sentence: string = `Hello, my name is ${fullName}.
  
  I'll be ${age + 1} years old next month.`;
  ```

#### 字面量

- 字面量类型主要包括**字符串字面量类型**、**数字字面量类型**、**布尔字面量类型**和**对象字面量类型**。

- 也可以使用字面量去指定变量的类型，通过字面量可以确定变量的取值范围

- ```typescript
  let color: "red" | "blue" | "black";
  let num: 1 | 2 | 3 | 4 | 5;
  ```

#### 联合类型

- 对于联合类型中的函数类型，需要使用括号`()`包裹起来
- 函数类型并不存在字面量类型，因此这里的 `(() => {})` 就是一个合法的函数类型
- 你可以在联合类型中进一步嵌套联合类型，但这些嵌套的联合类型最终都会被展平到第一级中

- any:类型是 any，它可以赋值给任意变量

  - ```typescript
    let d: any = 4;
    d = "hello";
    d = true;
    ```

#### Unknown

- unknown：和any的区别：any给任何类型进行赋值不会提示报错，一个 unknown 类型的变量可以再次赋值为任意其它类型，但只能赋值给 any 与 unknown 类型的变量

  - ```typescript
    let notSure: unknown = 4;
    notSure = "hello";
    let num: string = '4'
    num = notSure//报错提示 不能将类型“unknown”分配给类型“string”。
    
    // unknown 实际上就是一个类型安全的any
    // unknown类型的变量，不能直接赋值给其他变量
    if (typeof e === "string") {
      s = e;
    }
    
    // 类型断言，可以用来告诉解析器变量的实际类型
    /*
     * 语法：
     *   变量 as 类型
     *   <类型>变量
     *
     * */
    s = e as string;
    s = <string>e;
    ```

#### viod

- void：返回值是空

  ```TS
  let unusable: void = undefined;
  ```

#### never

- never：没有返回值

  - ```typescript
    function error(message: string): never {
      throw new Error(message);
    }
    ```

#### object、Object、{}、装箱类型

- object、Object、{}、装箱类型

  - ```typescript
    // ---Object 包含所有的类型
    // 对于 undefined、null、void 0 ，需要关闭 strictNullChecks
    const tmp1: Object = undefined;
    const tmp2: Object = null;
    const tmp3: Object = void 0;
    
    const tmp4: Object = 'linbudu';// 不报错
    const tmp5: Object = 599;// 不报错
    const tmp6: Object = { name: 'linbudu' };// 不报错
    const tmp7: Object = () => {};// 不报错
    const tmp8: Object = [];// 不报错
    
    // ---装箱类型：只有对应的拆箱类型才不会报错，尽量不使用装箱类型
    const tmp9: String = undefined;
    const tmp10: String = null;
    const tmp11: String = void 0;
    const tmp12: String = 'linbudu';
    // 以下不成立，因为不是字符串类型的拆箱类型
    const tmp13: String = 599; // X
    const tmp14: String = { name: 'linbudu' }; // X
    const tmp15: String = () => {}; // X
    const tmp16: String = []; // X
    
    //---object:代表所有非原始类型的类型，即数组、对象与函数类型这些
    const tmp17: object = undefined;
    const tmp18: object = null;
    const tmp19: object = void 0;
    const tmp20: object = 'linbudu';  // X 不成立，值为原始类型
    const tmp21: object = 599; // X 不成立，值为原始类型
    const tmp22: object = { name: 'linbudu' };
    const tmp23: object = () => {};
    const tmp24: object = [];
    
    // ---{} :内部无属性定义的空对象
    const tmp25: {} = undefined; // 仅在关闭 strictNullChecks 时成立，下同
    const tmp26: {} = null;
    const tmp27: {} = void 0; // void 0 等价于 undefined
    
    const tmp28: {} = 'linbudu';
    const tmp29: {} = 599;
    const tmp30: {} = { name: 'linbudu' };
    const tmp31: {} = () => {};
    const tmp32: {} = [];
    ```
    
    - 在任何时候都**不要，不要，不要使用** Object 以及类似的装箱类型。
    - 当你不确定某个变量的具体类型，但能确定它不是原始类型，可以使用 object。但我更推荐进一步区分，也就是使用 `Record<string, unknown>` 或 `Record<string, any>` 表示对象，`unknown[]` 或 `any[]` 表示数组，`(...args: any[]) => any`表示函数这样。
    - 我们同样要避免使用`{}`。`{}`意味着任何非 `null / undefined` 的值，从这个层面上看，使用它和使用 `any` 一样恶劣。

#### Array

- array：相同类型

  - ```typescript
    let list: number[] = [1, 2, 3];
    let list: Array<number> = [1, 2, 3];
    ```

#### Tuple 元组

- tuple：不同类型，固定长度

  - ```typescript
    let x: [string, number];
    x = ["hello", 10];
    // 可选
    const arr6: [string, number?, boolean?] = ['linbudu'];
    // 下面这么写也可以
    // const arr6: [string, number?, boolean?] = ['linbudu', , ,];
    ```

#### Enum 枚举

- enum：双向映射

  - ```typescript
    enum Color {
      Red,
      Green,
      Blue,
    }
    let c: Color = Color.Green;
    
    enum Color {
      Red = 1,
      Green,
      Blue,
    }
    let c: Color = Color.Green;
    
    enum Color {
      Red = 1,
      Green = 2,
      Blue = 4,
    }
    let c: Color = Color.Green;
    
    const returnNum = () => 100 + 499;
    
    enum Items {
      Foo = returnNum(),
      Bar = 599,
      Baz
    }
    // 如果你使用了延迟求值，那么没有使用延迟求值的枚举成员必须放在使用常量枚举值声明的成员之后（如上例），或者放在第一位：
    ```

#### 类型断言

- 类型断言

  - 有些情况下，变量的类型对于我们来说是很明确，但是 TS 编译器却并不清楚，此时，可以通过类型断言来告诉编译器变量的类型，断言有两种形式：

    - 第一种

      - ```typescript
        let someValue: unknown = "this is a string";
        let strLength: number = (someValue as string).length;
        ```

    - 第二种

      - ```typescript
        let someValue: unknown = "this is a string";
        let strLength: number = (<string>someValue).length;
        ```

#### & 交叉类型

- **需要同时满足 A 与 B 两个类型**，取交集

  ```ts
  interface NameStruct {
    name: string;
  }
  
  interface AgeStruct {
    age: number;
  }
  
  type ProfileStruct = NameStruct & AgeStruct;
  
  const profile: ProfileStruct = {
    name: "linbudu",
    age: 18
  }
  ```
  
- any类型与任何类型的交叉都是any，也就是1&any结果也是any

- 判断是否是any类型

  ```TS
  type isAny<T> = 1 entends 2 & T ? true : false
  ```

#### 联合类型 | 

- ｜（联合类型）表示或者的意思

#### 索引类型

- 索引类型指的不是某一个特定的类型工具，它其实包含三个部分：**索引签名类型**、**索引类型查询**与**索引类型访问**。

  1. 索引签名类型

     索引签名类型主要指的是在接口或类型别名中，通过以下语法来**快速声明一个键值类型一致的类型结构**：

     ```typescript
     
     interface AllStringTypes {
       [key: string]: string;
     }
     
     type AllStringTypes = {
       [key: string]: string;
     }
     ```

  2. 索引类型查询

     - **这里并不会将数字类型的键名转换为字符串类型字面量，而是仍然保持为数字类型字面量**。

       ```typescript
       interface Foo {
         linbudu: 1,
         599: 2
       }
       
       type FooKeys = keyof Foo; // "linbudu" | 599
       ```

  3. 索引类型访问

     1. ```typescript
        interface Foo {
          propA: number;
          propB: boolean;
          propC: string;
        }
        
        type PropTypeUnion = Foo[keyof Foo]; // string | number | boolean
        
        interface Foo {
          propA: number;
          propB: boolean;
        }
        
        type PropAType = Foo['propA']; // number
        type PropBType = Foo['propB']; // boolean
        ```

#### 类型守卫

- TypeScript 中提供了非常强大的类型推导能力，它会随着你的代码逻辑不断尝试收窄类型，这一能力称之为**类型的控制流分析**（也可以简单理解为类型推导）。

- is关键字

- ```TS
  function isString(input: unknown): boolean {
    return typeof input === "string";
  }
  
  function foo(input: string | number) {
    if (isString(input)) {
      // 类型“string | number”上不存在属性“replace”。
      (input).replace("linbudu", "linbudu599")
    }
    if (typeof input === 'number') { }
    // ...
  }
  ```

  ts无法做到跨函数来进行类型的信息收集，为了解决这一类型控制流分析的能力不足， TypeScript 引入了 **is 关键字**来显式地提供类型信息：

- ```TS
  function isString(input: unknown): input is string {
    return typeof input === "string";
  }
  
  function foo(input: string | number) {
    if (isString(input)) {
      // 正确了
      (input).replace("linbudu", "linbudu599")
    }
    if (typeof input === 'number') { }
    // ...
  }
  ```

  isString 函数称为类型守卫，在它的返回值中，我们不再使用 boolean 作为类型标注，而是使用 `input is string` 这么个奇怪的搭配，拆开来看它是这样的：

  - input 函数的某个参数；
  - `is string`，即 **is 关键字 + 预期类型**，即如果这个函数成功返回为 true，那么 is 关键字前这个入参的类型，就会**被这个类型守卫调用方后续的类型控制流分析收集到**

#### 基于 in 与 instanceof 的类型保护

- [`in` 操作符](https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FJavaScript%2FReference%2FOperators%2Fin) 并不是 TypeScript 中新增的概念，而是 JavaScript 中已有的部分，它可以通过 `key in object` 的方式来判断 key 是否存在于 object 或其原型链上（返回 true 说明存在）。

- 既然能起到区分作用，那么 TypeScript 中自然也可以用它来保护类型：

- ```TS
  interface Foo {
    foo: string;
    fooOnly: boolean;
    shared: number;
  }
  
  interface Bar {
    bar: string;
    barOnly: boolean;
    shared: number;
  }
  
  function handle(input: Foo | Bar) {
    if ('foo' in input) {// foo具有辨识度
      input.fooOnly;
    } else {
      input.barOnly;
    }
  }
  ```

- JavaScript 中还存在一个功能类似于 typeof 与 in 的操作符：[instanceof](https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FJavaScript%2FReference%2FOperators%2Finstanceof)，它判断的是原型级别的关系，如 `foo instanceof Base` 会沿着 foo 的原型链查找 `Base.prototype` 是否存在其上。当然，在 ES6 已经无处不在的今天，我们也可以简单地认为这是判断 foo 是否是 Base 类的实例。同样的，instanceof 也可以用来进行类型保护：

  ```typescript
  class FooBase {}
  
  class BarBase {}
  
  class Foo extends FooBase {
    fooOnly() {}
  }
  class Bar extends BarBase {
    barOnly() {}
  }
  
  function handle(input: Foo | Bar) {
    if (input instanceof FooBase) {
      input.fooOnly();
    } else {
      input.barOnly();
    }
  }
  ```

#### 条件类型

在`TS` 2.8 加入了条件类型,逻辑是三元运算符，所以比较好理解

```
T extends U ? X : Y
```

#### infer

在`extends`条件类型的子句中，可以使用`infer T`来捕获指定位置的类型（该类型由 TS 编译器推断），在`infer`后面的子句中可以使用捕获的类型变量。配合`extends`条件类型，截取符合条件的目标的某部分类型。

```js
type ParseInt = (n: string) => number
// 如果是类型 T 是函数，则 R 会捕获其返回值类型并返回 R，否则返回 any
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any
type R = ReturnType<ParseInt>   // number
 
type GetType<T> = T extends (infer E)[] ? E : never
type E = GetType<['a', 100]>
```



#### extends 

下面的一些内容会经常用`extends`关键字,`extends`类似数学集合里的子集概念,可以看一下这篇文章，会对TS有进一步对理解。[深入Typescript 的类型系统](https://zhuanlan.zhihu.com/p/38081852)



#### keyof

> keyof 操作符是在 TypeScript 2.1 版本引入的，操作符可以用于获取某种类型的所有键，其返回类型是联合类型。

`keyof` 可以用来取得一个对象接口的所有 `key` 值.

```
interface Foo {
  name: string;
  age: number
}
type T = keyof Foo // -> "name" | "age"
```



#### typeof

> typeof 操作符可以用来获取一个变量或对象的类型

```
interface Person {
  name: string
}

const me: Person = {
  name: 'bugaboo'
}
type MyType = typeof me // MyType = Person
type MyNameType = typeof me.name // MyNameType = string
```

#### in

遍历**联合类型**

```js
type key = 'vue' | 'react';

type MappedType = { [k in key]: string } // { vue: string; react: string; }
```



#### in和keyof一同使用

```js
type Partial<T> = { [P in keyof T]?: T[P] };
```

#### 函数重载

- 获取更精确的类型标注能力。
- 拥有多个重载声明的函数在被调用时，是按照重载的声明顺序往下查找的

```TS
// 因此在第一个重载声明中，为了与逻辑中保持一致，即在 bar 为 true 时返回 string 类型，这里我们需要将第一个重载声明的 bar 声明为必选的字面量类型。
function func(foo: number, bar: true): string;
function func(foo: number, bar?: false): number;
function func(foo: number, bar?: boolean): string | number {
  if (bar) {
    return String(foo);
  } else {
    return foo * 599;
  }
}

const res1 = func(599); // number
const res2 = func(599, true); // string
const res3 = func(599, false); // number
```

#### 非空断言

- 非空断言其实是类型断言的简化，它使用 `!` 语法，即 `obj!.func()!.prop` 的形式标记前面的一个声明一定是非空的（实际上就是剔除了 null 和 undefined 类型）

  ```TS
  declare const foo: {
    func?: () => ({
      prop?: number | null;
    })
  };
  
  // foo.func().prop.toFixed();
  foo.func!().prop!.toFixed();
  ```

  

## 泛型

泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。

**在类型编程里，泛型就是变量**

#### 泛型基础

##### 例子

​	我们需要的是 **入参与返回值类型相同** 的效果	

```ts
function foo<T>(arg: T): T {
  return arg;
}
```

​	泛型在箭头函数下的书写

```ts
const foo = <T>(arg: T) => arg;
```

​	如果你在 TSX 文件中这么写，`<T>`可能会被识别为 JSX 标签，因此需要显式告知编译器

```js
const foo = <T extends SomeBasicType>(arg: T) => arg;
// 我们使用了 extends 约束了泛型 T 必须符合接口 SomeBasicType 的形状
```

​	除了用在函数中，泛型也可以在类中使用

```js
class Foo<T, U> {
  constructor(public arg1: T, public arg2: U) {}

  public method(): T {
    return this.arg1;
  }
}
```

​	多个类型参数

```js

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}
//是ts自己隐式推断的
swap([7, 'seven']); // ['seven', 7]
// 下面是显示定义
swap<number, string>([7, 'seven']) // ['seven', 7]
```

#### 泛型约束

​	在函数内部使用泛型变量的时候，由于事先不知道它是哪种类型，所以不能随意的操作它的属性或方法：

```ts
function loggingIdentity<T>(arg: T): T {
    console.log(arg.length);
    return arg;
}

// index.ts(2,19): error TS2339: Property 'length' does not exist on type 'T'.
// 类型“T”上不存在属性“length”。
```

​	上例中，泛型 `T` 不一定包含属性 `length`，所以编译的时候报错了。

​	这时，我们可以对泛型进行约束，只允许这个函数传入那些包含 `length` 属性的变量。这就是泛型约束：

```ts
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}
```

#### 泛型参数的默认类型

​	在 TypeScript 2.3 以后，我们可以为泛型中的类型参数指定默认类型。当使用泛型时没有在代码中直接指定类型参数，从实际值参数中也无法推测出时，这个默认类型就会起作用。

```ts
function createArray<T = string>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
```

## calss类

- public：此类成员在**类、类的实例、子类**中都能被访问。
- private：此类成员仅能在**类的内部**被访问。
- protected：此类成员仅能在**类与子类中**被访问，你可以将类和类的实例当成两种概念，即一旦实例化完毕（出厂零件），那就和类（工厂）没关系了，即**不允许再访问受保护的成员**。
- static：静态成员，不同于实例成员，在类的内部静态成员无法通过 this 来访问，需要通过 `Foo.staticHandler` 这种形式进行访问。**静态成员不会被实例继承，它始终只属于当前定义的这个类（以及其子类）**

#### 继承

```TS
class Base { }

class Derived extends Base { }
```

- 基类中的方法也可以在派生类中被覆盖，但我们仍然可以通过 super 访问到基类中的方法：

```TS
class Base {
  print() { }
}

class Derived extends Base {
  print() {
    super.print()
    // ...
  }
}
```

- 在派生类中覆盖基类方法时，我们并不能确保派生类的这一方法能覆盖基类方法，万一基类中不存在这个方法呢？所以，TypeScript 4.3 新增了 `override` 关键字，来确保派生类尝试覆盖的方法一定在基类中存在定义：

  ```TS
  class Base {
    printWithLove() { }
  }
  
  class Derived extends Base {
    override print() { //TS 将会给出错误，因为尝试覆盖的方法并未在基类中声明。通过这一关键字我们就能确保首先这个方法在基类中存在，同时标识这个方法在派生类中被覆盖了。
      // ...
    }
  }
  
  ```

## webpack

- 通常情况下，实际开发中我们都需要使用构建工具对代码进行打包，TS 同样也可以结合构建工具一起使用，下边以 webpack 为例介绍一下如何结合构建工具使用 TS。

- 步骤：

  1. 初始化项目

     - 进入项目根目录，执行命令

        

       ```
       npm init -y
       ```

       - 主要作用：创建 package.json 文件

  2. 下载构建工具

     - ```
       npm i -D webpack webpack-cli webpack-dev-server typescript ts-loader clean-webpack-plugin
       ```

       - 共安装了 7 个包
         - webpack
           - 构建工具 webpack
         - webpack-cli
           - webpack 的命令行工具
         - webpack-dev-server
           - webpack 的开发服务器
         - typescript
           - ts 编译器
         - ts-loader
           - ts 加载器，用于在 webpack 中编译 ts 文件
         - html-webpack-plugin
           - webpack 中 html 插件，用来自动创建 html 文件
         - clean-webpack-plugin
           - webpack 中的清除插件，每次构建都会先清除目录

  3. 根目录下创建 webpack 的配置文件 webpack.config.js

     - ```javascript
       const path = require("path");
       const HtmlWebpackPlugin = require("html-webpack-plugin");
       const { CleanWebpackPlugin } = require("clean-webpack-plugin");
       
       module.exports = {
         optimization: {
           minimize: false, // 关闭代码压缩，可选
         },
       
         entry: "./src/index.ts",
       
         devtool: "inline-source-map",
       
         devServer: {
           contentBase: "./dist",
         },
       
         output: {
           path: path.resolve(__dirname, "dist"),
           filename: "bundle.js",
           environment: {
             arrowFunction: false, // 关闭webpack的箭头函数，可选
           },
         },
       
         resolve: {
           extensions: [".ts", ".js"],
         },
       
         module: {
           rules: [
             {
               test: /\.ts$/,
               use: {
                 loader: "ts-loader",
               },
               exclude: /node_modules/,
             },
           ],
         },
       
         plugins: [
           new CleanWebpackPlugin(),
           new HtmlWebpackPlugin({
             title: "TS测试",
           }),
         ],
       };
       ```

  4. 根目录下创建 tsconfig.json，配置可以根据自己需要

     - ```json
       {
         "compilerOptions": {
           "target": "ES2015",
           "module": "ES2015",
           "strict": true
         }
       }
       ```

  5. 修改 package.json 添加如下配置

     - ```json
       {
         ...略...
         "scripts": {
           "test": "echo \"Error: no test specified\" && exit 1",
           "build": "webpack",
           "start": "webpack serve --open chrome.exe"
         },
         ...略...
       }
       ```

  6. 在 src 下创建 ts 文件，并在并命令行执行`npm run build`对代码进行编译，或者执行`npm start`来启动开发服务器



## Babel

- 经过一系列的配置，使得 TS 和 webpack 已经结合到了一起，除了 webpack，开发中还经常需要结合 babel 来对代码进行转换以使其可以兼容到更多的浏览器，在上述步骤的基础上，通过以下步骤再将 babel 引入到项目中。

  1. 安装依赖包：

     - `npm i -D @babel/core @babel/preset-env babel-loader core-js`
     - 共安装了 4 个包，分别是：
       - @babel/core
         - babel 的核心工具
       - @babel/preset-env
         - babel 的预定义环境
       - @babel-loader
         - babel 在 webpack 中的加载器
       - core-js
         - core-js 用来使老版本的浏览器支持新版 ES 语法

  2. 修改 webpack.config.js 配置文件

     - ```javascript
       ...略...
       module: {
           rules: [
               {
                   test: /\.ts$/,
                   use: [
                       {
                           loader: "babel-loader",
                           options:{
                               presets: [
                                   [
                                       "@babel/preset-env",
                                       {
                                           "targets":{
                                               "chrome": "58",
                                               "ie": "11"
                                           },
                                           "corejs":"3",
                                           "useBuiltIns": "usage"
                                       }
                                   ]
                               ]
                           }
                       },
                       {
                           loader: "ts-loader",
       
                       }
                   ],
                   exclude: /node_modules/
               }
           ]
       }
       ...略...
       ```

     - 如此一来，使用 ts 编译后的文件将会再次被 babel 处理，使得代码可以在大部分浏览器中直接使用，可以在配置选项的 targets 中指定要兼容的浏览器版本。

  3. ```JS
     // 引入一个包
     const path = require('path');
     // 引入html插件
     const HTMLWebpackPlugin = require('html-webpack-plugin');
     // 引入clean插件
     const { CleanWebpackPlugin } = require('clean-webpack-plugin');
     
     // webpack中的所有的配置信息都应该写在module.exports中
     module.exports = {
     
         // 指定入口文件
         entry: "./src/index.ts",
     
         // 指定打包文件所在目录
         output: {
             // 指定打包文件的目录
             path: path.resolve(__dirname, 'dist'),
             // 打包后文件的文件
             filename: "bundle.js",
     
             // 告诉webpack不使用箭头
             environment:{
                 arrowFunction: false
             }
         },
     
         // 指定webpack打包时要使用模块
         module: {
             // 指定要加载的规则
             rules: [
                 {
                     // test指定的是规则生效的文件
                     test: /\.ts$/,
                     // 要使用的loader
                     use: [
                          // 配置babel
                          {
                              // 指定加载器
                              loader:"babel-loader",
                              // 设置babel
                              options: {
                                  // 设置预定义的环境
                                  presets:[
                                      [
                                          // 指定环境的插件
                                          "@babel/preset-env",
                                          // 配置信息
                                          {
                                              // 要兼容的目标浏览器
                                              targets:{
                                                  "chrome":"58",
                                                  "ie":"11"
                                              },
                                              // 指定corejs的版本
                                              "corejs":"3",
                                              // 使用corejs的方式 "usage" 表示按需加载
                                              "useBuiltIns":"usage"
                                          }
                                      ]
                                  ]
                              }
                          },
                         'ts-loader'
                     ],
                     // 要排除的文件
                     exclude: /node-modules/
                 }
             ]
         },
     
         // 配置Webpack插件
         plugins: [
             new CleanWebpackPlugin(),
             new HTMLWebpackPlugin({
                 // title: "这是一个自定义的title"
                 template: "./src/index.html"
             }),
         ],
     
         // 用来设置引用模块
         resolve: {
             extensions: ['.ts', '.js']
         }
     
     };
     ```

## 
