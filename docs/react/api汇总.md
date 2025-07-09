## 生命周期

![](https://cdn.jsdelivr.net/gh/Min-wys/figure-bed/img/20220816160247.png)

## 组件类

### memo

- `React.memo`和`PureComponent`作用类似，可以用作性能优化，`React.memo` 是**高阶组件**，函数组件和类组件都可以使用， 和区别`PureComponent`是 `React.memo`只能对`props`的情况确定是否渲染，而`PureComponent`是针对`props`和`state`。

- `React.memo` 接受两个参数，第一个参数原始组件本身，第二个参数，可以根据一次更新中`props`是否相同决定原始组件是否重新渲染。是一个返回布尔值，`true` 证明组件无须重新渲染，`false`证明组件需要重新渲染，这个和类组件中的`shouldComponentUpdate()`正好相反 。

- **React.memo: 第二个参数 返回 `true` 组件不渲染 ， 返回 `false` 组件重新渲染。** 

- **shouldComponentUpdate: 返回 `true` 组件渲染 ， 返回 `false` 组件不渲染。**

  

### **StrictMode**

- `StrictMode`见名知意，严格模式，用于检测`react`项目中的潜在的问题，。与 `Fragment` 一样， `StrictMode` 不会渲染任何可见的 `UI` 。它为其后代元素触发额外的检查和警告。
- 严格模式检查仅在开发模式下运行；它们不会影响生产构建。
- `StrictMode`目前有助于：
  - ①识别不安全的生命周期。
  - ②关于使用过时字符串 `ref API` 的警告
  - ③关于使用废弃的 `findDOMNode` 方法的警告
  - ④检测意外的副作用
  - ⑤检测过时的 `context API`

## 工具类

### createElement

- 一提到`createElement`，就不由得和`JSX`联系一起。我们写的`jsx`，最终会被 `babel`，用`createElement`编译成`react`元素形式。

- 如果我们在`render`里面这么写：

  ```js
  render(){
      return <div className="box" >
          <div className="item"  >生命周期</div>
          <Text  mes="hello,world"  />
          <React.Fragment> Flagment </React.Fragment>
          { /*  */ }
          text文本
      </div>
  }
  ```

  会被编译成这样：

  ```js
  render() {
      return React.createElement("div", { className: "box" },
              React.createElement("div", { className: "item" }, "\u751F\u547D\u5468\u671F"),
              React.createElement(Text, { mes: "hello,world" }),
              React.createElement(React.Fragment, null, " Flagment "),
              "text\u6587\u672C");
      }
  ```

### cloneElement

- `createElement`把我们写的`jsx`，变成`element`对象;  而`cloneElement`的作用是以 `element` 元素为样板克隆并返回新的 `React` 元素。返回元素的 `props` 是将新的 `props` 与原始元素的 `props` 浅层合并后的结果。

- 那么`cloneElement`感觉在我们实际业务组件中，可能没什么用，但是在**一些开源项目，或者是公共插槽组件中**用处还是蛮大的，比如说，我们可以在组件中，劫持`children element`，然后通过`cloneElement`克隆`element`，混入`props`。经典的案例就是 `react-router`中的`Swtich`组件，通过这种方式，来匹配唯一的 `Route`并加以渲染。

- 我们设置一个场景，在组件中，去劫持`children`，然后给`children`赋能一些额外的`props`:

```js
function FatherComponent({ children }){
    const newChildren = React.cloneElement(children, { age: 18})
    return <div> { newChildren } </div>
}

function SonComponent(props){
    console.log(props)
    return <div>hello,world</div>
}

class Index extends React.Component{    
    render(){      
        return <div className="box" >
            <FatherComponent>
                <SonComponent name="alien"  />
            </FatherComponent>
        </div>   
    }
}
```

### getDerivedStateFromProps

- `getDerivedStateFromProps` 会在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。它应返回一个对象来更新 state，如果返回 `null` 则不更新任何内容。
- 如果把 getDerivedStateFromProps 英文分解 get ｜ Derived | State ｜ From ｜ Props 翻译 **得到 派生的 state 从 props 中** ，正如它的名字一样，这个生命周期用于，在初始化和更新阶段，接受父组件的 props 数据， 可以对 props 进行格式化，过滤等操作，返回值将作为新的 state 合并到 state 中，供给视图渲染层消费。



## hooks

### useImperativeHandle



- 正常情况下 ref 是不能挂在到函数组件上的，因为函数组件没有实例，但是 useImperativeHandle 为我们提供了一个类似实例的东西。

- 它帮助我们通过 useImperativeHandle 的第 2 个参数，所返回的对象的内容挂载到 父组件的 ref.current 上。

- forwardRef会创建一个React组件，这个组件能够将其接受的 ref 属性转发到其组件树下的另一个组件中。

- 使用`useImperativeHandle` 时，它可以让你自定义父组件通过 `ref` 可以访问到的子组件的实例值。通过这种方式，你可以有选择地暴露特定的方法给父组件使用。

  ```JS
  import React, { forwardRef, useImperativeHandle, useEffect, useRef } from 'react'
  
  const TestRef = forwardRef((props, ref) => {// 在 React 中，forwardRef是一个用于将子组件的引用转发到父组件的函数
    useImperativeHandle(ref, () => ({
  // useImperativeHandle是一个 React Hook，它允许自定义使用 ref 时暴露给父组件的实例值。
  // 第一个参数 ref 是一个引用，通常是通过 forwardRef 创建并从父组件传递下来的。这个引用可以用来访问子组件的实例或 DOM 元素。
  // 第二个参数是一个函数，这个函数返回一个对象，该对象定义了暴露给父组件的属性和方法。
      open() {
        console.log("open")
      }
    }))
     return <div>1</div>
  })
  
  function App () {
    const ref = useRef()
    useEffect(() => {
      ref.current.open()
    },[])
    
    return(
      <>
        <div>哈哈哈哈</div>
        <TestRef ref={ref}></TestRef>
      </>
    )
  }
  export default App
  ```

### useRef

- useRef 可以创建出一个 ref 原始对象，只要组件没有销毁，ref 对象就一直存在，那么完全可以把一些不依赖于视图更新的数据储存到 ref 对象中。这样做的好处有两个：
  - 第一个能够直接修改数据，不会造成函数组件冗余的更新作用。
  - 第二个 useRef 保存数据，如果有 useEffect ，useMemo 引用 ref 对象中的数据，无须将 ref 对象添加成 dep 依赖项，因为 useRef 始终指向一个内存空间，**所以这样一点好处是可以随时访问到变化后的值。**

## fragment

在 React 中，`<Fragment>`标签不会额外创建 DOM 结构。

1. 目的和功能
   - `<Fragment>`主要用于在组件返回多个元素时，将这些元素组合在一起，而不需要在 DOM 中添加额外的包裹节点。例如，在不使用`<Fragment>`时，如果要返回两个相邻的`<div>`元素，通常需要将它们包裹在一个父元素中，像这样：

```jsx
   const MyComponent = () => {
       return (
           <div>
               <div>Element 1</div>
               <div>Element 2</div>
           </div>
       );
   };
```

- 这里会在 DOM 中创建一个额外的`<div>`节点。但是如果使用`<Fragment>`，就可以避免这种情况：

```jsx
   import React, { Fragment } from 'react';
   const MyComponent = () => {
       return (
           <Fragment>
               <div>Element 1</div>
               <div>Element 2</div>
           </Fragment>
       );
   };
```

- 或者使用更简洁的语法（React v16.2.0 及以上版本支持）：

```jsx
   const MyComponent = () => {
       return (
           <>
               <div>Element 1</div>
               <div>Element 2</div>
           </>
       );
   };
```

- 在这种情况下，`<Fragment>`（或者`<> </>`语法糖）只是一种逻辑分组的方式，不会在最终的 DOM 树中添加对应的节点。

1. 内部实现原理
   - React 在渲染过程中，当遇到`<Fragment>`标签时，会将其内部的子元素直接渲染到其父元素下，而不会为`<Fragment>`本身创建实际的 DOM 节点。这有助于保持 DOM 结构的简洁性，并且可以减少不必要的节点对布局和性能的潜在影响。例如，在处理列表等场景中，避免额外的 DOM 节点可以使样式和布局的计算更加高效。



## 高阶组件

在开发React组件时，大多数情况下可能会遇到多个组件都需要某个功能的问题，而且这个功能往往和界面并没有直接关系，所以也不能简单地抽取成一个新的组件，但如果让同样的逻辑在各个组件里各自实现，无疑会导致重复代码的增加。

去掉这些重复性代码的方式有很多，而高阶组件正是其中之一。在**高阶组件**（HOC）的众多实现方式中有两种常用的实现方式，即**代理**和**继承**。

### 代理式高阶组件

当谈到高阶组件时，代理式高阶组件是一种常见的实现方式。代理式高阶组件允许在不修改原始组件的情况下，对其进行包装并添加额外的功能或行为。如下例所示。

```typescript
typescript

 代码解读
复制代码// WrappedComponent为要被包装的组件
const A = function (WrappedComponent){
    return function (props) { // 第一个组件(完整的生命周期)
        const _props = { name: '鲨鱼辣椒', age: 18, ...props }
        return <WrappedComponent {..._props} /> // 第二个组件(完整的生命周期)
    }
}
```

上例中`A`组件就是一个**代理式的高阶组件**，它接收一个组件作为参数，并返回一个新的组件。这个新的组件其实就是传入的`WrappedComponent`组件，但有所不同的是，`WrappedComponent`组件的`props`参数已经不再是之前的`props`了，而是经过加工后的`props`，即`_props`（`_props`为其增添了新的属性，即name与age）。

代理式的高阶组件需要注意的是，`WrappedComponent`组件与所返回的新组件是**两个完全不同的组件**，既然是两个完全不同的组件，那么就要经历各自所不同的生命周期。换句话说，一次渲染，**需要经历两次生命周期**。

### 继承式高阶组件

继承式高阶组件也是一种常见的高阶组件实现方式。它通过继承原始组件的类（class）来实现，也正是由于继承类的缘故，所以它也会继承原始组件的所有属性和方法，这样一来就可以在包装组件中对其进行扩展、修改或重写等。

```typescript
typescript

 代码解读
复制代码// WrappedComponent为要被包装的组件
function A(WrappedComponent){
    // 这里的新组件继承于WrappedComponent组件
    return class SonComponent extends WrappedCpmponent {
        render() {
            this.props = { name: '鲨鱼辣椒', age: 18, ...this.props }
            return super.render() // WrappedCpmponent完整的生命周期
        }
    }
}
```

上例中的`A`组件就是一个**继承式的高阶组件**，它接收一个组件作为参数，并返回一个组件。这个返回的组件是继承于`WrappedComponent`的组件，但有所不同的是，它不再返回一个全新的组件，而是返回**父组件的值**（JSX），因为`super.render`就是在调用父组件的`render`方法。也正是由于这个缘故，所以继承式的高阶组件只会经历一次生命周期。

注意，当使用继承式的高阶组件时，可能会需要不断的继承或依赖某些组件，这样势必会导致组件层级过深，从而增加代码的复杂性和难理解性。此外，由于继承式的高阶组件可以对原始组件的内部实现进行修改，所以这样可能会带来一些副作用和难以预测的行为（尤其是当多个组件都继承自同一个组件时）。

假设`A`、`B`两个组件都继承自`C`组件，而`A`组件重写了`C`组件的`play`方法，但`B`组件却依赖于`A`组件原始的`play`方法，如此一来就出现了冲突。一种常见的解决方案就是通过`TypeScript`中一些类（Class）常用的关键词来对类（A）进行限制，例如`readonly`、`private`、`抽象类`等等。

### 小结

在实际开发中，有些组件可能并不是我们自己开发的，它有可能来自于同事或第三方组件库。或者，即使是我们自己开发的，但如果这个组件的内部逻辑过于复杂，而我们又希望不要去触碰这些过于复杂的逻辑，这时候高阶组件就有了用武之地，它通过一个**独立于原有组件的函数**来产生一个**新的组件**，并且对原有组件没有任何侵害。
