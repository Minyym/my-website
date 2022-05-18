### 1.接口

#### 任意属性

```ts
interface Person {
    name: string;
    age?: number;
    [propName: string]: any;// 任意属性
}
```

**一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集**

任意属性的值允许是 `string`，但是可选属性 `age` 的值却是 `number`，`number` 不是 `string` 的子属性，所以报错了。

```JS
interface Person {
    name: string;
    age?: number;
    [propName: string]: string | number;
}

let tom: Person = {
    name: 'Tom',
    age: 25,
    gender: 'male'
};//不会报错
```

### 2.数组

1. 使用「类型 + 方括号」来表示数组

   ```JS
   const arr:number[] = [1,1,3,3]
   ```

2. 类数组的表示方式(arguments,NodeList`, `HTMLCollection)

   ```JS
   function sum() {
       let args: {
           [index: number]: number;
           length: number;
           callee: Function;
       } = arguments;
   }
   ```

### 3.函数类型

1. 分为函数表达式和函数式声明

   ```JS
   interface SearchFunc {
       (source: string, subString: string): boolean;
   }
   // 使用接口进行定义
   let mySearch: SearchFunc = function(source, subString) {
       return source.search(subString) !== -1;
   }
   ```

### 4.联合类型

```JS
let myFavoriteNumber: string | number 的含义是，允许 myFavoriteNumber 的类型是 string 或者 number，但是不能是其他类型。
```

当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们**只能访问此联合类型的所有类型里共有的属性或方法**：

```ts
function getLength(something: string | number): number {
    return something.length;
}

// index.ts(2,22): error TS2339: Property 'length' does not exist on type 'string | number'.
//   Property 'length' does not exist on type 'number'.
```

上例中，`length` 不是 `string` 和 `number` 的共有属性，所以会报错。

访问 `string` 和 `number` 的共有属性是没问题的：

```ts
function getString(something: string | number): string {
    return something.toString();
}
```

联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型：

```ts
let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
console.log(myFavoriteNumber.length); // 5
myFavoriteNumber = 7;
console.log(myFavoriteNumber.length); // 编译时报错

// index.ts(5,30): error TS2339: Property 'length' does not exist on type 'number'.
```

上例中，第二行的 `myFavoriteNumber` 被推断成了 `string`，访问它的 `length` 属性不会报错。

而第四行的 `myFavoriteNumber` 被推断成了 `number`，访问它的 `length` 属性时就报错了。



### 5.类型断言

1. 作用：可以手动指定一个值的类型

2. 在react中必须使用`值 as 类型`的写法

3. 作用

   1. 可以将联合类型断言为其中一个类型
   2. 将一个父类的类型断言为更具体的子类类型
   3. 将任何一个类型断言为any
   4. 将any断言为一个更具体的类型
   5. 要使得 `A` 能够被断言为 `B`，只需要 `A` 兼容 `B` 或 `B` 兼容 `A` 即可

4. 类型断言不是类型转换，它不会真的影响到变量的类型。

5. 类型断言和类型声明它们的核心区别，就知道了类型声明是比类型断言更加严格的

   

### 6.声明文件

1. 当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能。



### 7.类型别名

1. 类型别名用来给类型起个新的名字
2. 类型别名常用于联合类型



### 8.字符串字面量类型

1. 字符串字面量类型用来约束取值只能是某几个字符串中的一个

   ```JS
   type evenName = click | mouthmove | scroll
   ```

2. 类型别名与字符串字面量类型都是使用type进行定义



### 9.元组

1. 数组是定义相同的数据类型，元组则是定义不同类型的数据类型

   ```js
   let tom: [string, number] = ['Tom', 25];
   ```

2. 越界的元素

   1. 当添加越界的元素时，它的类型会被限制为元组类型中的每个类型的联合类型

      ```js
      let tom: [string, number];
      tom = ['Tom', 25];
      tom.push('male');
      tom.push(true);
      
      // Argument of type 'true' is not assignable to parameter of type 'string | number'.
      ```



### 10.枚举

1. 枚举（Enum）类型用于取值被限定在一定范围内的场景，比如一周只能有七天，颜色限定为红绿蓝等

2. 枚举使用 `enum` 关键字来定义

   ```js
   enum Week {Sun, Mon, Tue, Wed, Thu, Fri, Sat }
   ```

3. 枚举成员会被赋值为从 `0` 开始递增的数字，同时也会对枚举值到枚举名进行反向映射：

   ```js
   enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};
   
   console.log(Days["Sun"] === 0); // true
   console.log(Days["Mon"] === 1); // true
   console.log(Days["Tue"] === 2); // true
   console.log(Days["Sat"] === 6); // true
   
   console.log(Days[0] === "Sun"); // true
   console.log(Days[1] === "Mon"); // true
   console.log(Days[2] === "Tue"); // true
   console.log(Days[6] === "Sat"); // true
   ```

4. 可以进行手动赋值，值最好不要重复，值会+1递增，手动赋值的值可以是小数，负数

5. 枚举类型有常数项合计算所得项

   1. 计算所得项

      ```js
      enum Color {Red, Green, Blue = "blue".length};// 不会报错
      
      enum Color {Red = "red".length, Green, Blue};
      // index.ts(1,33): error TS1061: Enum member must have initializer.
      // index.ts(1,40): error TS1061: Enum member must have initializer. 无法获得初始值
      ```

6. 常数枚举(常数枚举与普通枚举的区别是，它会在编译阶段被删除，并且不能包含计算成员。会报错)

   ```js
   const enum Directions {Red, Green, Blue}
   ```

7. 外部枚举（使用 `declare enum` 定义的枚举类型）`declare` 定义的类型只会用于编译时的检查，编译结果中会被删除。



### 11.类

### 12.类与接口

1. 类实现接口 使用（implements）,类可以实现多个接口

   ```js
   interface say {
     say():void
   }
   interface name {
     name:string
   }
   class Person implements say，name {
     name = '123';
     say() {
       console.log('hello')
     }
   }
   ```

2. 接口继承接口

   ```js
   interface say {
     say():void
   }
   interface name extends say {
     name:string
   }
   class Person implements name { // 写一个name就可以了，因为name已经继承say的类型
     name = '123';
     say() {
       console.log('hello')
     }
   }
   ```

3. 接口继承类（）不推荐使用

   接口继承实际继承的是类的实例的类型，不包括constructor，构造函数、静态属性或静态方法



### 13.泛型

1. 定义：泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。

2. 泛型约束：

   在函数内部使用泛型变量的时候，由于事先不知道它是哪种类型，所以不能随意的操作它的属性或方法：

   ```ts
   function loggingIdentity<T>(arg: T): T {
       console.log(arg.length);
       return arg;
   }
   
   // index.ts(2,19): error TS2339: Property 'length' does not exist on type 'T'.
   ```

   上例中，泛型 `T` 不一定包含属性 `length`，所以编译的时候报错了。

   这时，我们可以对泛型进行约束，只允许这个函数传入那些包含 `length` 属性的变量。这就是泛型约束：

   ```ts
   interface Lengthwise {
       length: number;
   }
   
   function loggingIdentity<T extends Lengthwise>(arg: T): T {
       console.log(arg.length);
       return arg;
   }
   ```

   多个类型参数之间也可以互相约束：

   ```ts
   function copyFields<T extends U, U>(target: T, source: U): T {
       for (let id in source) {
           target[id] = (<T>source)[id];
       }
       return target;
   }
   
   let x = { a: 1, b: 2, c: 3, d: 4 };
   
   copyFields(x, { b: 10, d: 20 });
   ```

   上例中，我们使用了两个类型参数，其中要求 `T` 继承 `U`，这样就保证了 `U` 上不会出现 `T` 中不存在的字段。

3. 泛型接口

   ```js
   interface CreateArrayFunc {
       <T>(length: number, value: T): Array<T>;
   }
   
   
   interface CreateArrayFunc<T> {
       (length: number, value: T): Array<T>;
   }
   let createArray: CreateArrayFunc<any>;
   ```

4. 可以有默认值









