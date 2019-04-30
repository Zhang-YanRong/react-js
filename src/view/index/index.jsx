import React from "react"
import './index.css'
import Header from '../../components/header/header'
export default class Index extends React.Component {
    render() {
        return (
            <div className="box" >
                <Header name="开心" />
                this is index
            </div>
        )
    }
}