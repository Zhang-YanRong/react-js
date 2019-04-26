import React, { Fragment } from 'react'

export default class Todoitem extends React.Component {
    click = (e) => {
        if (e.preventDefault) e.preventDefault()
        const { index } = this.props
        this.props.delete(index)
    }

    render() {
        const { content } = this.props
        return (
            <Fragment >
                <div onClick={e => { this.click(e) }} > {content} </div>
            </Fragment >
        )
    }
}