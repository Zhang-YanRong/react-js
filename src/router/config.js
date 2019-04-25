import React from 'react'
import { HashRouter, Route, Switch } from "react-router-dom";
import App from "../App"
import Index from '../view/index/index'
export default class IRoute extends React.Component{
    render(){
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path="/index" component={Index} />
                    </Switch>
                </App>
            </HashRouter>
        )
    }
}
