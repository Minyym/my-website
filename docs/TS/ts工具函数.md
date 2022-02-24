---
sidebar_position: 3

---

## Partial

```JS
// Partial -------------------------
// 变成可选的
type Partial1<T> = {
  [k in keyof T]?: T[k];
};
interface a {
  name: string;
  age: number;
}
const obj: Partial1<a> = {
  name: "123",
};
```

## Required

```JS
// Required -------------------------
// 变成一定要选的
type Required1<T> = {
  [K in keyof T]-?: T[K];
};
interface aa {
  name?: string;
  age?: number;
}
const obj1: Required1<aa> = {
  // 报错
  name: "123",
};

```

## Readonly

```TS
// Readonly -------------------------
// 变成只读的
type Readonly1<T> = {
  readonly [K in keyof T]: T[K];
};
interface aaa {
  name?: string;
  age?: number;
}
const obj2: Readonly1<aaa> = {
  name: "123",
};
obj2.name = "1"; // 报错
```

## Record

```ts
// Record -------------------------
// 快速构建一个对象类型
type Record1<K extends keyof any, T> = {
  [V in K]: T;
};
interface aaaa {
  name: string;
  age?: number;
}
type l = "lili" | "lala";

const obj3: Record1<l, aaaa> = {
  lili: {
    name: "llii",
  },
  lala: {
    name: "lala",
  },
};
```

## Pick

```ts
// Pick-------------------------
// 从一个type中选取新的属性,组成新的type
type Pick1<T, K extends keyof T> = {
  [P in K]: T[P];
};
interface aaaaa {
  name: string;
  age: number;
  gender: string;
}
const obj4: Pick1<aaaaa, "age" | "gender"> = {
  age: 13,
  gender: "nv",
};
```

## Exclude

```ts
// Exclude-------------------------
// 去除联合类型中的一些类型,构成新的类型
type Exclude1<T, K> = T extends K ? never : T;

// Omit-------------------------
// 从一个type中删除一些属性组成新的属性
type Omit1<T, K extends keyof T> = Pick1<T, Exclude1<keyof T, K>>;

const obj5: Omit1<aaaaa, "name"> = {
  //   name: "11",
  age: 14,
  gender: "nv",
};


```

## Extract

```ts
// Extract-------------------------
// 取出联合类型中的一些类型,构成新的类型
type Extract1<T, K> = T extends K ? T : never;
```

## NonNullable

```ts
// NonNullable-------------------------
// 取出联合类型中的null和undefined,组成新的类型
type NonNullable1<T> = T extends null | undefined ? never : T;
type a6 = NonNullable1<null | undefined | "name">;
```

## Parameters

```ts
// Parameters-------------------------
// Parameters,从 [函数 Type] 的形参构造一个数组 Type
type Parameters1<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;
```

## ReturnType

```TS
// ReturnType 函数返回值
type T0 = ReturnType<() => string>// TO = string

type ReturnType1<F extends (...args: any) => any> = F extends (
  ...args: any
) => infer A
  ? A
  : never
type T1 = ReturnType1<() => string>
```



## ConditionalPick（自己封装使用）

```TS
// 支持根据指定的 Condition 条件来生成新的类型  
// 效果
interface Example {
	a: string;
	b: string | number;
	c: () => void;
	d: {};
}

// 测试用例：
type StringKeysOnly = ConditionalPick<Example, string>;
//=> {a: string}

type ConditionalPick<V, T> = {
  [K in keyof V as V[K] extends T ? K : never]: V[K]
}
type StringKeysOnly = ConditionalPick<Example, string | number>
```



