# react-redux

#### 用法

```javascriptReact
yarn add react-redux
```

store/index.jsx

```javascriptReact
import { createStore } from 'redux'
import reducer from './reducer.jsx'

const store = createStore(reducer)

export default store;
```

App.jsx

```javascriptReact
import { Provider } from 'react-redux'
import store from './view/react-redux/store/index.jsx'

const App = (props) => {
    //Provider 包裹下的所有组件都能直接用store中的数据
    return <Provider store={store}>{props.children}</Provider>;
}
```

页面中

```javascriptReact
import React, { Fragment } from 'react'
import {connect} from 'react-redux'

const React_redux = (props) =>{
    const {value,list,inputChange,deleteClick,addClick } = props
     return (
            <Fragment>
                <input value={value} onChange={(e) =>{inputChange(e)}} type="text" />
                <button onClick={() =>{addClick(value)}}>提交</button>
                <ul>
                    {
                        list.map((item, index) => {
                            return <li
                                    onClick={()=>{deleteClick(index)}}
                                    key={index}
                                   >{item}</li>
                        })
                    }
                </ul>
            </Fragment>
        )
}

//把store中的数据映射到组件的props中
const mapStateToProps = (state/**state中的数据 */) =>{
    return {
        value:state.value,
        list:state.list
    }
}

//store.dispatch方法挂载到props上 可以让props里面的方法能够调用dispatch(),去操作store里的数据
const mapDispatchToProps = (dispatch) =>{
    return {
        inputChange: (e) =>{
            const action = {
                type:'change_input_value',
                value:e.target.value
            }
            //直接调用dispatch
            dispatch(action)
        },
        addClick:(value) => {
            const action = {
                type:'add_list_data',
                value,
            }
            dispatch(action)
        },
        deleteClick:(value) =>{
            const action = {
                type:'delete_list_data',
                value,
            }
            dispatch(action)
        }
    }
}

//用 `connect` 把组件和 `store` 做连接,导出的是 `connect` 的返回值
export default connect(mapStateToProps,mapDispatchToProps)(React_redux)

```
