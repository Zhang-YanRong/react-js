import React from 'react'

export default class header extends React.Component{
    constructor(props){
        //constructor 和 super 同时用，且需要用到peops的时候，constructor
        super(props)//处理props值绑定到当前对象上
        this.state = { isLiked: false }
        console.log(props,1111)

    }

    clickFn = (e,word) => {
        console.log(e,word)
        this.setState({
            isLiked : !this.state.isLiked
        })
        console.log(this.props,666)
        // console.log(this.state)
    }

    render(){
        const name = this.props.name
        console.log(this.props)
        return(
            <div onClick={e => this.clickFn(e,"hello")}> 
                {this.state.isLiked ? "this is header" : name}
            </div>
        )
    }
}