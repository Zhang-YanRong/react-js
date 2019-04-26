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
        console.log(this.refs['refValue'].value)
    }

    render() {
        return (
            <Fragment>
                <div>
                    <label htmlFor="insertArea">输入内容：</label>
                    <input id="insertArea" value={this.props.value} ref="refValue" onChange={(e) => { this.inputChage(e) }} placeholder="请输入想要做的事" type="text" />
                    <button onClick={(e) => { this.click(e) }}>提交</button>
                </div>
            </Fragment>
        )
    }
}