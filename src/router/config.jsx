import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../App";
import Index from "../view/index/index";
import Todolist from "../view/todoList/index.js";
import A_t_index from "../view/antd-todolist/index.jsx";



export default class IRoute extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <App>
          <Switch>
            <Route path="/index" component={Index} />
            <Route path="/todolist" component={Todolist} />
            <Route path="/Antd" component={A_t_index} />
          </Switch>
        </App>
      </BrowserRouter>
    );
  }
}
