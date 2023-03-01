## type和interface的区别

​    https://juejin.cn/post/7124959697903288351

1. type是类型别名，interface是接口

2. type可以声明基本、联合、元祖类型，interface不可以

3. interface可以声明合并

   ```TS
   interface Person { name: string }
   interface Person { age: number }
   
   let user: Person = {
       name: "Tolu",
       age: 0,
   };
   
   // TYPE报错
   
   type Person { name: string }; 
   
   // Error: 标识符“Person”重复。ts(2300)
   type Person { age: number }
   ```

4. 索引签名问题

5. ```TS
   interface propType{
       [key: string] : string
   }
   
   let props: propType
   
   type dataType = {
       title: string
   }
   interface dataType1 {
       title: string
   }
   const data: dataType = {title: "订单页面"}
   const data1: dataType1 = {title: "订单页面"}
   props = data
   // Error:类型“dataType1”不可分配给类型“propType”; 类型“dataType1”中缺少索引签名 
   props = data1
   ```

   1. 我们发现`dataType`和`dataType1`对应的类型一样，但是`interface`定义的就赋值失败
   2. `Record<string,string>`与`{[key:string]：string}`相同。只有当该类型的所有属性都已知并且可以对照该索引签名进行检查时，才允许将子集分配给该索引签名类型。
   3. 在您的例子中，这只能针对对象字面量类型进行检查，因为一旦声明了对象字面量类型，就无法更改它们。因此，索引签名是已知的。
   4. 相反，**在你使用interface去声明变量时，它们在那一刻类型并不是最终的类型**。由于interfac可以进行**声明合并**，所以总有可能将新成员添加到同一个interface定义的类型上。就是说`interface`定义的类型是不确定的

## ts和tsx的区别

- ts是typescript的文件扩展名
- tsx表明是typescript文件并且使用了jsx语法
- jsx语法：遇到<就当HTML进行解析，遇到{就当js进行解析

## 类型层级

- ，**TypeScript 中所有类型的兼容关系，从最上面一层的 any 类型，到最底层的 never 类型。**

![](https://raw.githubusercontent.com/Minyym/figure-bed/master/img/20230227165259.png)



```JS
type Result16 = {} extends object ? 1 : 2; // 1
type Result18 = object extends Object ? 1 : 2; // 1

type Result15 = String extends {} ? 1 : 2; // 1
type Tmp = string extends object ? 1 : 2; // 2
type Result123 = string extends Object ? 1 : 2; // 1

type Result19 = Object extends {} ? 1 : 2; // 1
type Result21 = {} extends Object ? 1 : 2;// 1
```

- 这里的 `{} extends `和 `extends {}` 实际上是两种完全不同的比较方式
- `{} extends object` 和 `{} extends Object` 意味着， `{}` 是 object 和 Object 的字面量类型，是从**类型信息的层面**出发的，即**字面量类型在基础类型之上提供了更详细的类型信息**。
- `object extends {}` 和 `Object extends {}` 则是从**结构化类型系统的比较**出发的，即 `{}` 作为一个一无所有的空对象，几乎可以被视作是所有类型的基类，万物的起源。如果混淆了这两种类型比较的方式，就可能会得到 `string extends object` 这样的错误结论。
- `object extends Object` 和 `Object extends object` 这两者的情况就要特殊一些，它们是因为“系统设定”的问题，Object 包含了所有除 Top Type 以外的类型（基础类型、函数类型等），object 包含了所有非原始类型的类型，即数组、对象与函数类型，这就导致了你中有我、我中有你的神奇现象

## Any unknown

```TS
type Result22 = Object extends any ? 1 : 2; // 1
type Result23 = Object extends unknown ? 1 : 2; // 1

type Result24 = any extends Object ? 1 : 2; // 1 | 2
type Result25 = unknown extends Object ? 1 : 2; // 2

type Result26 = any extends 'linbudu' ? 1 : 2; // 1 | 2
type Result27 = any extends string ? 1 : 2; // 1 | 2
type Result28 = any extends {} ? 1 : 2; // 1 | 2
type Result29 = any extends never ? 1 : 2; // 1 | 2

type Result30 = "I'm string!" | {} extends string ? 1 : 2; // 2

type Result31 = any extends unknown ? 1 : 2; // 1
type Result32 = unknown extends any ? 1 : 2; // 1
```

- 实际上，还是因为“系统设定”的原因。any 代表了任何可能的类型，当我们使用 `any extends` 时，它包含了“**让条件成立的一部分**”，以及“**让条件不成立的一部分**”。而从实现上说，在 TypeScript 内部代码的条件类型处理中，如果接受判断的是 any，那么会直接**返回条件类型结果组成的联合类型**。
- 在赋值给其他类型时，any来者不拒，而 unknown 则只允许赋值给 unknown 类型和 any 类型，这也是由于“系统设定”的原因，即 **any 可以表达为任何类型**。



```TS

// 提取首尾两个
type ExtractStartAndEnd<T extends any[]> = T extends [
  infer Start,
  ...any[],
  infer End
]
  ? [Start, End]
  : T;

// 调换首尾两个
type SwapStartAndEnd<T extends any[]> = T extends [
  infer Start,
  ...infer Left,
  infer End
]
  ? [End, ...Left, Start]
  : T;

// 调换开头两个
type SwapFirstTwo<T extends any[]> = T extends [
  infer Start1,
  infer Start2,
  ...infer Left
]
  ? [Start2, Start1, ...Left]
  : T;
```

```TS
// 提取对象的属性类型
type PropType<T, K extends keyof T> = T extends { [Key in K]: infer R }
  ? R
  : never;

type PropTypeResult1 = PropType<{ name: string }, 'name'>; // string
type PropTypeResult2 = PropType<{ name: string; age: number }, 'name' | 'age'>; // string | number

// 反转键名与键值
type ReverseKeyValue<T extends Record<string, string>> = T extends Record<
  infer K,
  infer V
>
  ? Record<V & string, K>
  : never;

type ReverseKeyValueResult1 = ReverseKeyValue<{ key: 'value' }>; // { "value": "key" }

// V & string 小技巧，键的值必须是 string | number | symbol 类型，在使用infer 时，类型发生了丢失
```

## 分布式条件类型

```TS
type Condition<T> = T extends 1 | 2 | 3 ? T : never;

// 1 | 2 | 3
type Res1 = Condition<1 | 2 | 3 | 4 | 5>;

// never
type Res2 = 1 | 2 | 3 | 4 | 5 extends 1 | 2 | 3 ? 1 | 2 | 3 | 4 | 5 : never;

type Naked<T> = T extends boolean ? 'Y' : 'N';
type Wrapped<T> = [T] extends [boolean] ? 'Y' : 'N';

// "N" | "Y"
type Res3 = Naked<number | boolean>;

// "N"
type Res4 = Wrapped<number | boolean>;

// 判断never
type IsNever<T> = [T] extends [never] ? true : false;

type IsNeverRes1 = IsNever<never>; // true
type IsNeverRes2 = IsNever<"linbudu">; // false

// never
// 直接使用，仍然会进行判断
type Tmp3 = never extends string ? 1 : 2; // 1

type Tmp4<T> = T extends string ? 1 : 2;
// 通过泛型参数传入，会跳过判断
type Tmp4Res = Tmp4<never>; // never

// 如果判断条件是 never，还是仅在作为泛型参数时才跳过判断
type Special3 = never extends never ? 1 : 2; // 1
type Special4<T> = T extends never ? 1 : 2;
type Special4Res = Special4<never>; // never

// any
// 直接使用，返回联合类型
type Tmp1 = any extends string ? 1 : 2;  // 1 | 2

type Tmp2<T> = T extends string ? 1 : 2;
// 通过泛型参数传入，同样返回联合类型
type Tmp2Res = Tmp2<any>; // 1 | 2

// 如果判断条件是 any，那么仍然会进行判断
type Special1 = any extends any ? 1 : 2; // 1
type Special2<T> = T extends any ? 1 : 2;
type Special2Res = Special2<any>; // 1

// 联合类型拆开来，每个分支分别进行一次条件类型判断，再将最后的结果合并起来
```

- 定义：联合类型拆开来，每个分支分别进行一次条件类型判断，再将最后的结果合并起来
- 关闭分布条件类型：使用[],当成数组去判断
- any，never：当条件类型的判断参数为 any，会直接返回条件类型两个结果的联合类型。而在这里其实类似，当通过泛型传入的参数为 never，则会直接返回 never。