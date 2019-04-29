# react 写法注意点

### 细节点

> 每个组件都得引入 react 的原因是 react 解析 jsx 语法

> 组件 开头必须以大写开头

> react 中提供 Fragment 类似 vue templete

> 单向数据流：父传子的值，只能在子组件中调用，不能更改

##### 事件绑定的 jsx 写法：

```javascript
<button onClick={(e) => { this.getValue(e, this.state.value) }}>提交</button>
or
<button onClick={(e) => {this.getValue.bind(this)}>提交</button>
```

> 获取标签内容：传递事件 e, 在方法中用 e.target

> immutable: state 不允许做任何的改变

> class 要写成 className

> label 上的 for 要写成 htmlFor （帮助 input 聚焦光标）

##### innerHtml 写法：

```javascript
//值是对象形势，所以俩括号
this.state.list.map((v, index) => {
  return (
    <li
      onClick={e => {
        this.delete(e, index);
      }}
      key={index + "g"}
      dangerouslySetInnerHTML={{ __html: v }}
    />
  );
});
```

### 父组件 -> 子组件：（属性的形式）(可以传值/function)

父组件中：

```javascript
<Todoitem content={data} />
```

子组件中：

```javascript
<div>{this.props.content}</div>
```

### 子组件调用父组件事件及传值：

> 同样的通过父传子，以属性的方式 将父组件中的方法传递给子组件，

父组件中：

```javascript
    delete = (index) => {
        let arr = [...this.state.list]
        arr.splice(index, 1)
        this.setState({
            list: arr
        })
    }

    <Todoitem content={v} index={index} delete={() => { this.delete(index) }} />
```

子组件中：

```javascriptReact
    <div onClick={e => {his.click(e);}}>
        {this.props.content}
    </div>;

    click = e => {
        if (e.preventDefault) e.preventDefault();
        this.props.delete(this.props.index);
    };
```

### ref 传值（子组件中的方法可以调用子组件的 ref）

父组件：

```javascriptReact
export default class Father extends Component {
    componentDidMount () {
        console.log( this.refs['child-h1'] )
        // => undefined 父组件不能直接调用，因为 this 指向不同

        console.log( this.refs['anyName'].refs['child-h1'] )
        // => h1 可以拿到这个 h1 父组件调用上面子组件的 ref 写法
    }

    //render 函数中得这么写
    render (){
        return (
            <div>
                <ChildComponent ref="anyName"></ChildComponent>
            </div>
        ）
    }
}
```

子组件：

```javascriptReact
class ChildComponent extends Component {
    componentDidMount () {
        console.log( this.refs['child-h1'] ) // => h1 可以拿到这个 h1
    }
    render () {
        return <div> <h1 ref="child-h1">我是子组件</h1> </div> }
        //注意这里写成字符串 传递过去的是 ref 所在的整个标签
}
```

> ref 传的是 dom 元素
> `<div ref = {(dom) => {this.ul = dom}}></div>`
> //this.ul dom 当前 dom 元素 把 ul 挂在当前组件上在事件中 console.log(this.ul)

##### setState 写法：

> setState 可以接受参数 preveState(修改之前的数据) 等价于 this.state

> setState 是异步的

```javascript
this.setState({
    list: arr
})
this.setState(() => { //新版写法
    return {list: arr}
})

click = (e) =>{
    this.setState(() => ( //新版+es6 写法
        const arr =this.state.value
        { list: arr }
    ))
}

click = (e) =>{
    this.setState((preveState) => ( //新版+es6 写法
        const arr = preveState.value
        { list: arr }
    ))
}

//setState 可以有第二个参数：
this.serState((preveState) => {

}, () => {
//this is callback
//setState 是异步的，所以需要在 setState 改变值后的操作应该在回调函数中执行
})
```

### react 是视图层框架 :

下图中 A 组件和 B 组件没有嵌套和调用关系，但是就是想 A 给 B 传值，只能 A -> 1 -> 2 -> 3 -> 4 -> B

所以就需要数据层框架：redux、mbox、fluex

### PropTypes :类型校验

```javascript
yarn add prop-types
```

```javascript
import { PropTypes } from "prop-types";

Todoitem.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf("格式错误错误")
  ]).isRequired, //默认没有传值情况 不会校验 跟.isRequired 表示必填
  delete: PropTypes.func,
  index: PropTypes.number
};

Todoitem.defaultProps = {
  content: "hello"
};
```

[PropTypes 官方文档](https://reactjs.org/docs/typechecking-with-proptypes.html" target="\_blank")

> 当组件中的 state 或者 props 发生改变的时候，render 函数会重新执行

### 虚拟 DOM

> 虚拟 DOM 就是一个 js 对象，用它描述真实 DOM

### react 虚拟 DOM 渲染过程：

> 1.state 数据

> 2.JSX 模板 （react 将 jsx 转化成 js 对象即虚拟 DOM）

> 3.数据 + 模板 生成虚拟 DOM

> 4.虚拟 DOM 转化成真实 DOM

> 5.state 改变

> 6.数据 + 模板 生成新的虚拟 DOM

> 7.比较原始虚拟 DOM 和新的虚拟 DOM 的区别（用到 diff 算法），找到改变的值

> 8.直接找到改变值的 DOM，操作 DOM 改变成现有的值

> （js 操作 js 对象比较简单，js 操作 DOM 就比较耗性能）

#### render 函数中，底层的 react 是调用 React.creatElement 来生成虚拟 DOM 再生成真实 DOM

```javascript
render (){
    return <div><span></span></div>
    //等价于
    return React.createElement('div',{},React.createElement('span',{},'item'))
}
```

#### 虚拟 DOM 优点：

> 1.性能提升

> 2.夸端应用 react native

### Diff 算法：

> 虚拟 DOM 节点同层比较，从顶层开始比较，如有不同，就不会继续比较
> key 值比较

#### 生命周期函数：组件在某一时刻，自动执行的函数

> `initialization` 初始化过程（constructor,定义 state,获取 props）

> `mounting`(挂载)：

> `componentWillMount`(){} //在组件即将被挂载到页面中执行

> `componentDidMount`(){} //在组件挂载到页面之后执行，在这里进行数据请求，也可以放在 constructor 中，但是最好放在这里

##### 页面加载时候 执行顺序

`initialization -> componentWillmount -> render -> componentDidMount`

##### 组件数据（props/state）发生变化：

> `componentWillReceiveProps`(当一个组件从父组件接收参数，只要父组件的 render 函数被【重新】执行了，子组件的声明周期函数就会执行)

> `shouldComponentUpdate`（必须 return 布尔值，返回 true, 正常更新，false 不会更新，不会执行 render 函数）

> `componentWillUpdate` (组件被更新之前，但是在 shouldComponentUpdate 之后，必须返回 true)

> `componentDidUpdate`(组件更新完成之后执行)

##### 页面渲染完成后，更新数据执行顺序:

> `componentWillReceiveProps`(子组件从父组件获取 props) -> `shouldComponentUpdate` -> `componentWillUpdate` -> `render` -> `componentDidUpdate`

##### 所有的生命周期函数都可以不写，必须有 render 函数， 因为组件是继承自 component 的，在其中内置了除 render 函数的所有生命周期的函数

> `shouldComponentUpdate` 应用场景，父组件更新，不想子组件更新时候(降低 react 比对频率)，可以在子组件的 `shouldComponentUpdate` 生命周期中 return false

```javascript
shouldComponentUpdate (nextProps,nextState){
    if(nextProps.content !== this.props.content) {
        return true
    } else {
        return false
    }
}
```

##### charles 抓取前端 http 请求,接口模拟,返回数据到指定 json 文件

### react-transition-group 动画包
