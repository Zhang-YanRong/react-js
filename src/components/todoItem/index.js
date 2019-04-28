import React, { Fragment } from 'react'
import { PropTypes } from "prop-types";

export default class Todoitem extends React.Component {
    click = (e) => {
        if (e.preventDefault) e.preventDefault()
        const {
            index
        } = this.props
        this.props.delete(index)
    }

    render() {
        const {
            content
        } = this.props
        return (
            <Fragment>
                <div onClick={e => { this.click(e) }}>{content} </div>
            </Fragment >
        )
    }
}

Todoitem.propTypes = {
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.instanceOf('格式错误错误')
    ]).isRequired, //默认没有传值情况 不会校验 跟.isRequired 表示必填
    delete: PropTypes.func,
    index: PropTypes.number
}

Todoitem.defaultProps = {
    content: 'hello'
}