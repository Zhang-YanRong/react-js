# redux

> redux = reducer + flux

### 图文理解

![redux图](https://github.com/479496771/react-js/blob/master/md-img/redux.png)

> A: action creators "要借什么书"

> B: store "管理员"

> C: reducers "记录本"

> D: react Components “需要书”

流程：

> D -> A -> B -> C

> 1.组件 D 向 A 索要书（数据）//索要需求传给 action creators

> 2.A 向 store 向管理员要书（）//通过 action creators 把这个信息传递给 store

> 3.store 不知道要什么书 ，查询 reducers 获取数据 //store 得去查询数据是什么才能给

> 4.获取到数据, store 把这个数据返回给组件

### 特点：

##### 1.store 必须唯一，即只有一个 index.js

```javascript
import { createStore } from 'redux'
import reducer from './reducer.jsx'
//store 调用 reducer 把 action 传给 reducer 去处理 返回数据
const store = createStore(reducer, window.**REDUX_DEVTOOLS_EXTENSION** && window.**REDUX_DEVTOOLS_EXTENSION**())
export default store;
```

##### 2.只有 store 能改变自己的内容（store 拿到 reducer 的返回值，改变 store 中的值）

##### 3.reducer 必须是一个纯函数（给定固定的输入，就有固定的输出），不能有副作用（修改传进来的参数）

### store 特有方法

> createStore 创建 store
> store.disPatch(action) 派发 action 到 store
> store.getState() 获取 store 所有数据的内容
> store.subscribe() 监听 store 的改变，触发传进去的回调函数

##### 组件中：

```javascriptReact
export default class A_t_index extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    //5.监听 store 变化（所有的 action 完成都公用 5 和 6）
    store.subscribe(this.handleStoreChange);
  }

  handleStoreChange = () => {
    //6.让组件重新获取 store 的值
    this.setState(store.getState());
  };

  inputChagne = e => {
    //1.创建action
    const action = {
      type: "change_input_value",
      value: e.target.value
    };
    //2.action 传给 store
    store.dispatch(action);
  };

  addValue = () => {
    const action = {
      type: "add_input_value",
      value: this.state.inputValue
    };
    store.dispatch(action);
  };

  delete = (e, index) => {
    const action = {
      type: "delete_input_value",
      value: index
    };
    store.dispatch(action);
  };

  render() {
    return (
      <div style={{ margin: "20px" }}>
        //输入框
        <Search
          placeholder="input search text"
          value={this.state.inputValue}
          onChange={e => {this.inputChagne(e);}}
          onSearch={value => console.log(value)}
          style={{ width: 200 }}
        />
        //提交按钮
        <Button
          type="primary"
          onClick={e => {this.addValue(); }}
          style={{ marginLeft: "20px" }}
        >
          Submit
        </Button>
        //list组件
        <List
          style={{ marginTop: "20px", width: "200px" }}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item
              onClick={e => {this.delete(e, index);}}
            >
              {item}
            </List.Item>
          )}
        />
      </div>
    );
  }
}
```

##### store.jsx 文件中：

```javascriptReact
import { createStore } from 'redux'
import reducer from './reducer.jsx'

//store 调用 reducer 把 action 传给 reducer 去处理 返回数据
//window.**REDUX_DEVTOOLS_EXTENSION** && window.**REDUX_DEVTOOLS_EXTENSION**() 是 redux 的 chrome 调试插件
const store = createStore(reducer, window.**REDUX_DEVTOOLS_EXTENSION** && window.**REDUX_DEVTOOLS_EXTENSION**())

export default store;
```

##### reducer.jsx 文件中

```javascript
//给 state 设置默认值
const defaultState = {
  inputValue: "",
  list: []
};

//reducer 可以接收 但不能修改 state 需要深拷贝
export default (state = defaultState, action) => {
  //4.处理传过来的 action
  if (action.type === "change_input_value") {
    //不能直接操作 state,需深拷贝
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    //返回新的 state 对象
    return newState;
  }
  if (action.type === "add_input_value") {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = "";
    return newState;
  }
  if (action.type === "delete_input_value") {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(newState.value, 1);
    return newState;
  }
  return state;
};
```

##### 分离 actionType:

```javascriptReact
//创建 actionTypes.jsx,列出所有的 actionType
export const ADD_INPUT_VAlUE = "add_input_value";
export const CHANGE_INPUT_VALUE = "change_input_value";
export const DELETE_LIST_VALUE = "delete_input_value";
```

##### 分离 action 操作，

```javascriptReact
//创建 actionCreate.jsx
import {
  ADD_INPUT_VAlUE,
  CHANGE_INPUT_VALUE,
  DELETE_LIST_VALUE
} from "./actionTypes.jsx";

//input 值 改变 就改变 store 中 state 的值 的 action
export const getInputChangeActiong = value => ({
  type: CHANGE_INPUT_VALUE,
  value
});

//添加 input 的值到 store 中的 list 的 action
export const getInputValueActiong = value => ({
  type: ADD_INPUT_VAlUE,
  value
});

//删除 store 中的 list 中的值的 action
export const DeleteListValueActiong = value => ({
  type: DELETE_LIST_VALUE,
  value
});
```

##### 更新后的 index.jsx 文件

```javascriptReact
import React, { Fragment } from "react";
import { Input, Button, List } from "antd";
import {
  getInputChangeActiong,
  getInputValueActiong,
  DeleteListValueActiong
} from "../../store/actionCreate.jsx";
import store from "../../store/";

const Search = Input.Search;

export default class A_t_index extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    //5.监听store变化
    store.subscribe(this.handleStoreChange);
  }

  inputChagne = e => {
    //1.创建action
    const action = getInputChangeActiong(e.target.value);
    //2.action 传给 store
    store.dispatch(action);
  };

  handleStoreChange = () => {
    //6.让组件重新获取store的值
    this.setState(store.getState());
  };

  addValue = () => {
    const action = getInputValueActiong(this.state.inputValue);
    store.dispatch(action);
  };

  delete = (e, index) => {
    const action = DeleteListValueActiong(index);
    store.dispatch(action);
  };

  render() {
    return (
      <div style={{ margin: "20px" }}>
        <Search
          placeholder="input search text"
          value={this.state.inputValue}
          onChange={e => {this.inputChagne(e);}}
          onSearch={value => console.log(value)}
          style={{ width: 200 }}
        />
        <Button
          type="primary"
          onClick={e => {this.addValue();}}
          style={{ marginLeft: "20px" }}
        >
          Submit
        </Button>
        <List
          style={{ marginTop: "20px", width: "200px" }}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item onClick={e => {this.delete(e, index);}}>
              {item}
            </List.Item>
          )}
        />
      </div>
    );
  }
}
```

### redux-thunk

[官方文档](https://github.com/reduxjs/redux-thunk target="\_blank")

> redux 创建 stroe 的时候用 thunk 中间件，时 redux 的中间件

```javascript
yarn add redux-thunk
```

[redux-devtools（chrome 插件）](https://github.com/reduxjs/redux-devtools target="\_blank")

在 stroe 中写法：

```javascript
import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer.jsx";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));

//store调用reducer 把action传给reducer 去处理 返回数据
const store = createStore(reducer, enhancer);

export default store;
```

> 使用了 redux-thunk，在 create 中返回的 action 不单单只能时对象，还能够是方法

##### 调用 redux-thunk 的 action(axios)

actionCreate 文件中做异步工作：

```javascript
export const GetListData = () => {
  //返回的这个函数可以获取store.dispatch方法
  return dispatch => {
    $axios
      .post("/login", {
        name: "admin",
        pass: "123456"
      })
      .then(res => {
        //InfoListValueActiong 方法在本文件中，可以直接调用这个action,更改store
        //在action中创建新的action，并用dispatch方法派发给store
        const action = InfoListValueActiong(Object.keys(res.data));
        dispatch(action);
      });
  };
};
```

组件的 componentDidMount()周期中创建 action,调用 actionCreate 中的方法：

```javascript
  componentDidMount() {
    const action = GetListData()
    store.dispatch(action)
  }
```

### redux-thunk 中间件(把 dispatch 方法的升级)(解决异步代码拆分)

![redux图](https://github.com/479496771/react-js/blob/master/md-img/redux-thunk.png)

##### 图解如下

> 1.view 通过 store.dispatch 会派发 action

> 2.action 通过 dispatch 派发给 store (这个 dispath 在 action 返回的方法中可以当参数传进去调用)

> 3.store 接收 action ，连同之前的 state 一起传给 reducer,

> 4.reducer 返回一个新的 data 给 store

> 5.store 改变自己的 state

中间件指 action 和 store 之间

dispatch 接收到对象，就把对象传给 store;如果接收到的是一个方法，会先让这个方法执行，

### redux-log 中间件

### redux-saga(异步代码拆分)
