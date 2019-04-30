import React, { Fragment } from 'react';

import { getInputChangeActiong, addListValueActiong, DeleteListValueActiong, InfoListValueActiong, GetListData } from '../../store/actionCreate.jsx'
import store from '../../store/'
import ToDoListUi from './todolistUI.jsx'
// import $axios from '../../axios/index'
export default class ToDoList_UI extends React.Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    //5.监听store变化
    store.subscribe(this.handleStoreChange)
  }

  /**
   * input输出值改变触发事件
   */
  inputChagne = (e) => {
    //1.创建action
    const action = getInputChangeActiong(e.target.value)
    //2.action 传给 store
    store.dispatch(action)
  }

  /**
   * store改变后触发的事件
   */
  handleStoreChange = () => {
    //6.让组件重新获取store的值
    this.setState(store.getState())
  }

  /**
   * button触发的给List添加值
   */
  addValue = () => {
    if (this.state.inputValue.trim() === "") {
      return
    }
    const action = addListValueActiong(this.state.inputValue)
    store.dispatch(action)
  }

  /**
   * 删除List里面每行的值
   */
  delete = (e, index) => {
    const action = DeleteListValueActiong(index)
    store.dispatch(action)
  }

  render() {
    return (
      <Fragment>
        <ToDoListUi
          inputValue={this.state.inputValue}
          inputChagne={(e) => { this.inputChagne(e) }}
          list={this.state.list}
          addValue={() => { this.addValue() }}
          delete={(e, index) => { this.delete(e, index) }}
        ></ToDoListUi>
      </Fragment>
    );
  }

  componentDidMount() {
    // $axios.post('/login', {
    //   name: "admin",
    //   pass: "123456"
    // }).then(res => {
    //   const action = InfoListValueActiong(Object.keys(res.data))
    //   store.dispatch(action)
    // })

    const action = GetListData()
    store.dispatch(action)
  }
}
