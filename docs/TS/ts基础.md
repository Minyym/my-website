---
sidebar_position: 1
---
## 泛型

泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。

**在类型编程里，泛型就是变量**

## 泛型基础

### 例子

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

### 泛型约束

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

### 泛型参数的默认类型

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

## 泛型高级

```ts
interface A {
  a: boolean
  b: string
  c: number
}
type isString<T> = {
  [K in keyof T]: T[K]
}
const a: isString<A> = {
  a: true,
  b: '1',
  c: 1,
}
// 将所有类型变成可选的
type Partial<T> = {
  // K就是每一个key值， keyof T 先生成联合类型，联合类型然后使用in进行遍历，T[K]取得每一个value值
  // ?:是变成可选的
  [K in keyof T]?: T[K]
}
const b: Partial<A> = {
  a: true,
  b: '1',
}
type TypeName<T> = T extends string
  ? string
  : T extends number
  ? number
  : T extends boolean
  ? boolean
  : T extends undefined
  ? undefined
  : T extends Function
  ? Function
  : object
const g: TypeName<string> = 1
```



