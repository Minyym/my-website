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

  ```JS
  import React, { forwardRef, useImperativeHandle, useEffect, useRef } from 'react'
  
  const TestRef = forwardRef((props, ref) => {
    useImperativeHandle(ref, () => ({
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
