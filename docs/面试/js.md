## const let var 的区别

- `var`声明的变量会挂到window上，而`let`和`const`不会
- 同一作用域下`var`可以重复声明同名变量，而`let`和`const`不能
- `let`和`const`声明形成块作用域，不能跨块访问，也不能跨函数访问
- JS 变量存在「创建create、初始化initialize 和赋值assign」，var 的「创建」和「初始化」都被提升，let 的「创建」过程被提升了，但是初始化没有提升；const 只有「创建」和「初始化」，没有「赋值」过程；function 的「创建」「concat:连接数组,不修改concat:连接数组,不修改初始化」和「赋值」都被提升
- `let` 或 `const` 声明的变量拥有暂时性死区（TDZ）：范围为从进入它的作用域，这时它不能被访问（获取或设置），直到到达声明语句。死区（dead zone）是真正短暂的（基于时间）和不受空间条件限制（基于位置）
- ![img](https://pic1.zhimg.com/v2-9c8c4a0a3ce5402b1a74f488d79c74d0.jpg)