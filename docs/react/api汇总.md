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

