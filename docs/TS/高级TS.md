## 1

```TS
type User = {
  id: number
  kind: string
}

function makeCustomer<T extends User>(u: T): T {
  // Error（TS 编译器版本：v4.4.2）
  // Type '{ id: number; kind: string; }' is not assignable to type 'T'.
  // '{ id: number; kind: string; }' is assignable to the constraint of type 'T',
  // but 'T' could be instantiated with a different subtype of constraint 'User'.
  return {
    // ...u,
    id: u.id,
    kind: 'customer',
  }
}
// 报错的原因是：因为 T 只是约束与 User 类型，而不局限于User 类型，所以返回为T类型不仅仅只有 id和kind，So需要一个接收其他类型的变量
```

## 2

```ts
第二题
本道题我们希望参数 a 和 b 的类型都是一致的，即 a 和 b 同时为 number 或 string 类型。当它们的类型不一致的值，TS 类型检查器能自动提示对应的错误信息。

function f(a: string | number, b: string | number) {
  if (typeof a === 'string') {
    return a + ':' + b; // no error but b can be number!
  } else {
    return a + b; // error as b can be number | string
  }
}

f(2, 3); // Ok
f(1, 'a'); // Error
f('a', 2); // Error
f('a', 'b') // Ok

function f(a: number, b: number): number
function f(a: string, b: string): string
// function f(a: number, b: string): string
// function f(a: string, b: number): string

function f(a: number | string, b: number | string) {
  // 答案给的代码
  // if (typeof a === 'string') {
  //   return a + ':' + b
  // } else {
  //   return (a as number) + (b as number)
  // }

  // 这样更直观一些
  if (typeof a === 'string' || typeof b === 'string') {
    return a + ':' + b
  } else {
    return a + b
  }
}
```

- 函数重载：**函数重载或方法重载是使用相同名称和不同参数数量或类型创建多个方法的一种能力。**要解决前面遇到的问题，方法就是为同一个函数提供多个函数类型定义来进行函数重载，编译器会根据这个列表去处理函数的调用。


- 方法重载：方法重载是指在同一个类中方法同名，参数不同（参数类型不同、参数个数不同或参数个数相同时参数的先后顺序不同），调用时根据实参的形式，选择与它匹配的方法执行操作的一种技术


- 当 TypeScript 编译器处理函数重载时，它会查找重载列表，尝试使用第一个重载定义。如果匹配的话就使用这个。因此，在定义重载的时候，一定要把最精确的定义放在最前面。

## 3 -4

```TS
//支持根据指定的 Condition 条件来生成新的类型
interface Example {
  a: string;
  e: number;
  b: string | number;
  c: () => void;
  d: {};
  f: string | number | boolean;
}
type ConditionalPick<V, T> = {
  [K in keyof V as V[K] extends T ? K : never]: V[K];
};
type StringKeysOnly = ConditionalPick<Example, string | number>;
```

## 5

```ts
type AppendArgument<F extends (...args: any) => any, A> 
  = (x: A, ...args: Parameters<F>) => ReturnType<F> 

type Fn = (a: number, b: string) => number
type FinalF = AppendArgument<Fn, boolean> 
// (x: boolean, a: number, b: string) => number
```

## 6

```TS
// 定义一个 NativeFlat 工具类型，支持把数组类型拍平（扁平化）
type Deep = [['a'], ['b', 'c'], [['d']], [[[['e']]]]]
type DeepFlat<T extends any[]> = {
	[K in keyof T] : T[K] extends any[] ? DeepFlat<T[K]> : T[K]
}[number]
type DeepTestResult = DeepFlat<Deep>
// DeepTestResult: "a" | "b" | "c" | "d" | "e"
```

## 7

```ts
1.使用类型别名定义一个 EmptyObject 类型，使得该类型只允许空对象赋值：
type EmptyObject = {
  // type PropertyKey = string | number | symbol
  [K in PropertyKey]: never
}

// 测试用例
const shouldPass: EmptyObject = {} // 可以正常赋值
const shouldFail: EmptyObject = {
  // 将出现编译错误
  prop: 'TS',
}
2.在通过 EmptyObject 类型的测试用例检测后，我们来更改以下 takeSomeTypeOnly 函数的类型定义，让它的参数只允许严格SomeType类型的值
type SomeType = {
  prop: string
}

type Exclusive<T1, T2 extends T1> = {
  [K in keyof T2]: K extends keyof T1 ? T2[K] : never
}

// 更改以下函数的类型定义，让它的参数只允许严格SomeType类型的值
function takeSomeTypeOnly<T extends SomeType>(x: Exclusive<SomeType, T>) {
  return x
}

// 测试用例：
const x = { prop: 'a' }
takeSomeTypeOnly(x) // 可以正常调用

const y = { prop: 'a', addditionalProp: 'x' }
takeSomeTypeOnly(y) // 将出现编译错误
```

## 8

```TS
// 定义 NonEmptyArray 工具类型，用于确保数据非空数组。
// 1
type NonEmptyArray<T> = [T,...T[]]
// 2
type NonEmptyArray<T> =[ 0 : T ] & T[]
const a: NonEmptyArray<string> = [] // 将出现编译错误
const b: NonEmptyArray<string> = ['Hello TS'] // 非空数据，正常使用
```

## 9

```ts
//定义一个 JoinStrArray 工具类型，用于根据指定的 Separator 分隔符，对字符串数组类型进行拼接。
type JoinStrArray<
  Arr extends string[],
   Separator extends string,
 > = Arr extends [infer A, ...infer B]
   ? `${A extends string ? A : ''}${B extends [string, ...string[]]
       ? `${Separator}${JoinStrArray<B, Separator>}`
      : ''}`
  : ''

type Names = ['Sem', 'Lolo', 'Kaquko']
type NamesComma = JoinStrArray<Names, ','> // "Sem,Lolo,Kaquko"
type NamesSpace = JoinStrArray<Names, ' '> // "Sem Lolo Kaquko"
type NamesStars = JoinStrArray<Names, '⭐️'> // "Sem⭐️Lolo⭐️Kaquko"
```

## 10

```TS

```

## 11

```TS
// 实现一个 IsEqual 工具类型，用于比较两个类型是否相等
type IsEqual<A, B> = A extends B ? (B extends A ? true : false) : false;

// 测试用例
type E0 = IsEqual<1, 2>; // false
type E1 = IsEqual<{ a: 1 }, { a: 1 }>; // true
type E2 = IsEqual<[1], []>; // false
type E3 = IsEqual<{ a: 1; b: 2 }, { a: 1 }>; // false
type E4 = IsEqual<{ a: 1 }, { a: 1; b: 2 }>; // false
```

## 12

```ts
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

