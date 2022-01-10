---
sidebar_position: 1

---
## 1、TypeScript 简介

1. TypeScript 是 JavaScript 的超集。
2. 它对 JS 进行了扩展，向 JS 中引入了类型的概念，并添加了许多新的特性。
3. TS 代码需要通过编译器编译(tsc)为 JS，然后再交由 JS 解析器执行。
4. TS 完全兼容 JS，换言之，任何的 JS 代码都可以直接当成 JS 使用。
5. 相较于 JS 而言，TS 拥有了静态类型，更加严格的语法，更强大的功能；TS 可以在代码执行前就完成代码的检查，减小了运行时异常的出现的几率；TS 代码可以编译为任意版本的 JS 代码，可有效解决不同 JS 运行环境的兼容问题；同样的功能，TS 的代码量要大于 JS，但由于 TS 的代码结构更加清晰，变量类型更加明确，在后期代码的维护中 TS 却远远胜于 JS。
6. 添加了js没有的类型（元祖。。。）
7. 可以在任何支持js的平台运行
8. 即使提示报错，也还是会编译成js代码，可以进行配置，不通过编译

## 2、基本类型

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

- number

  - ```typescript
    let decimal: number = 6;
    let hex: number = 0xf00d;
    let binary: number = 0b1010;
    let octal: number = 0o744;
    let big: bigint = 100n;
    ```

- boolean

  - ```typescript
    let isDone: boolean = false;
    ```

- string

  - ```typescript
    let color: string = "blue";
    color = "red";
    
    let fullName: string = `Bob Bobbington`;
    let age: number = 37;
    let sentence: string = `Hello, my name is ${fullName}.
    
    I'll be ${age + 1} years old next month.`;
    ```

- 字面量

  - 也可以使用字面量去指定变量的类型，通过字面量可以确定变量的取值范围

  - ```typescript
    let color: "red" | "blue" | "black";
    let num: 1 | 2 | 3 | 4 | 5;
    ```

- any:类型是 any，它可以赋值给任意变量

  - ```typescript
    let d: any = 4;
    d = "hello";
    d = true;
    ```

- unknown：和any的区别：any给任何类型进行赋值不会提示报错，unknown任何类型进行赋值会提示报错

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

- void：返回值是空

  - ```typescript
    let unusable: void = undefined;
    ```

- never：没有返回值

  - ```typescript
    function error(message: string): never {
      throw new Error(message);
    }
    ```

- object（没啥用）

  - ```typescript
    let obj: object = {};
    ```

- array：相同类型

  - ```typescript
    let list: number[] = [1, 2, 3];
    let list: Array<number> = [1, 2, 3];
    ```

- tuple：不同类型，固定长度

  - ```typescript
    let x: [string, number];
    x = ["hello", 10];
    ```

- enum

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
    ```

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

- &

  - 同时满足

    ```ts
    let obj:{name:string}&{age:number} = {name:'lili',age:12}
    ```

- ｜（联合类型）表示或者的意思

## 4、webpack

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



## 5、Babel

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

## 6、泛型

泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。

**在类型编程里，泛型就是变量**

### 泛型基础

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

## 7、泛型高级

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



