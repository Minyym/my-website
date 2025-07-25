# Rxjs

- 文档：https://cn.rx.js.org/manual/overview.html

- RxJS 是一个库，它通过使用 observable 序列来编写异步和基于事件的程序。它提供了一个核心类型 [Observable](https://cn.rx.js.org/manual/overview.html#observable)，附属类型 (Observer、 Schedulers、 Subjects) 和受 [Array#extras] 启发的操作符 (map、filter、reduce、every, 等等)，这些数组操作符可以把异步事件作为集合来处理。

  可以把 RxJS 当做是用来处理事件的 [Lodash](https://lodash.com/) 。

  ReactiveX 结合了 [观察者模式](https://en.wikipedia.org/wiki/Observer_pattern)、[迭代器模式](https://en.wikipedia.org/wiki/Iterator_pattern) 和 [使用集合的函数式编程](http://martinfowler.com/articles/collection-pipeline/#NestedOperatorExpressions)，以满足以一种理想方式来管理事件序列所需要的一切。

  在 RxJS 中用来解决异步事件管理的的基本概念是：

  - **Observable (可观察对象):** 表示一个概念，这个概念是一个可调用的未来值或事件的集合。
  - **Observer (观察者):** 一个回调函数的集合，它知道如何去监听由 Observable 提供的值。
  - **Subscription (订阅):** 表示 Observable 的执行，主要用于取消 Observable 的执行。
  - **Operators (操作符):** 采用函数式编程风格的纯函数 (pure function)，使用像 `map`、`filter`、`concat`、`flatMap` 等这样的操作符来处理集合。
  - **Subject (主体):** 相当于 EventEmitter，并且是将值或事件多路推送给多个 Observer 的唯一方式。
  - **Schedulers (调度器):** 用来控制并发并且是中央集权的调度员，允许我们在发生计算时进行协调，例如 `setTimeout` 或 `requestAnimationFrame` 或其他。