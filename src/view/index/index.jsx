import React from "react"
import { Link } from 'react-router-dom'
import './index.css'
// import Header from '../../components/header/header'
export default class Index extends React.Component {
    render() {
        return (
            <div className="box" >
                <p>
                    <Link to="/ToDoList_UI">todolist-No.1</Link>
                </p>
                <p>
                    <Link to="/Antd">todolist-No.2-antd</Link>
                </p>
                <p>
                    <Link to="/ToDoList_UI">todolist-No.3-UI逻辑分离/Redux_thunk</Link>
                </p>
                <p>
                    <Link to="/ToDoList_UI">todolist-No.4-Redux_saga</Link>
                </p>
                <p>
                    <Link to="/Todoreview">todolist-No.5-review</Link>
                </p>
            </div>
        )
    }
}