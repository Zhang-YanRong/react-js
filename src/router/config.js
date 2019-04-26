import React from 'react'
import {
    BrowserRouter,
    Route,
    Switch
} from "react-router-dom";
import App from "../App"
import Index from '../view/index/index'
import Todolist from '../view/todoList/index.js'
export default class IRoute extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <App>
                    <Switch>
                        <Route path="/index" component={Index} />
                        <Route path="/todolist" component={Todolist} />
                    </Switch>
                </App>
            </BrowserRouter>
        )
    }
}
