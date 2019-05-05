import React, { Fragment, Suspense } from 'react'
import { Header, Item } from './todo-UI.jsx'
import store from './storeReview/index.jsx'
import { getData, updateValue, addData, deleteItem } from './storeReview/createAction.jsx'
// const { Header, Item } = React.lazy(() => import('./todo-UI.jsx'));


export default class Todolist extends React.Component {
    constructor(props) {
        super(props)
        //1.必须在这里声明state
        this.state = store.getState()
        //监听store改变更新组件中的state
        store.subscribe(this.updataStoreData)
    }

    //获取input的值
    getInputValue = (value) => {
        const action = updateValue(value)
        store.dispatch(action)
    }

    //把store中的数据更新到组件中的state
    updataStoreData = () => {
        this.setState(store.getState())
    }

    //添加值到data中
    addData = (e) => {
        if (e.preventDefault) {
            e.preventDefault()
        }
        const action = addData()
        store.dispatch(action)
    }

    //item delete
    deleteItem = (index) => {
        const action = deleteItem(index)
        store.dispatch(action)
    }

    render() {
        console.log(3)
        return (
            <Fragment>
                <Suspense fallback={<div>Loading...</div>}>
                    <Header
                        value={this.state.value}
                        getInputValue={(value) => { this.getInputValue(value) }}
                        buttonClick={(e) => { this.addData(e) }}
                    />
                    <Item deleteItem={(index) => { this.deleteItem(index) }} data={this.state.data} />
                </Suspense>
            </Fragment>
        )
    }

    componentDidMount() {
        //2.获取store中的值
        const action = getData();
        store.dispatch(action)
    }
}