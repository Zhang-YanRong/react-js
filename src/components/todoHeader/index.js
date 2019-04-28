import React, { Fragment } from 'react'

export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: this.props.value,
            refValue: '这是ref传值'
        }
    }

    click = (e) => {
        if (e.preventDefault) e.preventDefault()
        this.props.addValue()
    }

    inputChage = (e) => {
        if (e.preventDefault) e.preventDefault()
        const { value } = e.target
        this.props.getValue(value)
        // console.log(this.input, this) //可以替换e.target  ref 可以把dom值挂在当前组件this上
    }

    //组件挂载前
    componentWillMount() {
        console.log('componentWillMount')
    }

    //组件挂载后
    componentDidMount() {
        console.log('componentDidMount')
        //在这里进行ajax请求
    }

    //组件被更新之前
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate')
        return true
    }

    //组件被更新之前，但是在shouldComponentUpdate之后，必须返回true
    componentWillUpdate() {
        console.log('componentWillUpdate')
    }

    //组件更新完成之后执行
    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    //从父组件获取props 值更新 父组件的render函数 重新 执行的时候
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps')
    }

    //组件即将从父组件中移除的时候触发
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
    render() {
        console.log('render')
        return (
            <Fragment>
                <div>
                    <label htmlFor="insertArea">输入内容：</label>
                    <input id="insertArea" value={this.props.value} ref={(value) => { this.input = value }} onChange={(e) => { this.inputChage(e) }} placeholder="请输入想要做的事" type="text" />
                    <button ref="refValue" onClick={(e) => { this.click(e) }}>提交</button>
                </div>
            </Fragment>
        )
    }
}