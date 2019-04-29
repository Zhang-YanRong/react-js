import React, { Fragment } from 'react';

import { Input, Button, List } from 'antd';
import { getInputChangeActiong, getInputValueActiong, DeleteListValueActiong } from '../../store/actionCreate.jsx'
import store from '../../store/'

const Search = Input.Search;

export default class A_t_index extends React.Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    //5.监听store变化
    store.subscribe(this.handleStoreChange)
  }

  inputChagne = (e) => {
    //1.创建action
    const action = getInputChangeActiong(e.target.value)
    //2.action 传给 store
    store.dispatch(action)
  }

  handleStoreChange = () => {
    //6.让组件重新获取store的值
    this.setState(store.getState())
  }

  addValue = () => {
    const action = getInputValueActiong(this.state.inputValue)
    store.dispatch(action)
  }

  delete = (e, index) => {
    const action = DeleteListValueActiong(index)
    store.dispatch(action)
  }

  render() {
    return (
      <div style={{ "margin": "20px" }}>
        <Search placeholder="input search text" value={this.state.inputValue} onChange={(e) => { this.inputChagne(e) }} onSearch={value => console.log(value)} style={{ width: 200 }} />
        <Button type="primary" onClick={(e) => { this.addValue() }} style={{ "marginLeft": "20px" }}>Submit</Button>
        <List
          style={{ "marginTop": "20px", "width": "200px" }}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (<List.Item onClick={(e) => { this.delete(e, index) }}>{item}</List.Item>)}
        />
      </div>
    );
  }
}
