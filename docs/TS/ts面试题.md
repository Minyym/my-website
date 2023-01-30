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