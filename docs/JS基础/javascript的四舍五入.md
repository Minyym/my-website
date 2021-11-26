---
sidebar_position: 2
---

## JavaScript的四舍五入

- 在javascrit有以下几种四舍五入的操作
  - 向上取整`ceil`
  - 向下取整`floor`
  - 四舍五入`round`
  - 固定精度`tiFixed`
  - 固定长度`toPrecision`
  - 取整`parseInt`位运算

### 向上取整 ceil

- ceil是天花板的意思，大于这个数并距离该数最近的整数


- ​	`Math.ceil(10.1) // 11`


### 向下取整floor

- floor是地板的意思，小于这个数并距离该数最近的整数


- ​	`Math.floor(10.9) // 10`


### 四舍五入round

- round的作用是对一个浮点数进行四舍五入。并保留整数位


- ​	`Math.round(10.3) // 10`


### 固定精度toFixed

- 作用是对一个浮点数进行四舍五入并保留固定的小数位


- ​	`100.123.toFixed(2) // 100.12`


### 固定长度toPrecidion

- toPrecison 也是 Number 原型上实现的一个处理浮点数的方法，和 toFixed 不同的是，它是**对一个浮点数进行四舍五入并保留固定长度的有效数字，包括整数部分。**


- ​	`99.1234.toPrecidion(5) // 99.123`


### 取整parseInt

- parseInt 是 全局对象 window上的一个方法，其作用是对一个可转换的数值取整，分为以下两种情况：


> 1. 将字符串数值转化为 Number 整数，对字符串的每一个字符进行转化，直到遇到不可转化的字符（包括小数点）停止。
>
> 2. 对浮点类型数值取整，忽略小数部分，不做四舍五入处理

- ​		`parseInt('100') // 100    parseInt('100as') // 100`
- ​		`parseInt(100.123) // 100  parseInt(100.5) // 100`
