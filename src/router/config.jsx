import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../App";
import Index from "../view/index/index.jsx";
import Todolist from "../view/todoList/index.jsx";
import A_t_index from "../view/antd-todolist/index.jsx";
import ToDoList_UI from '../view/todolistUI/index.jsx';
import Redux_saga from '../view/todolistUI/redux-saga.jsx'


export default class IRoute extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <App>
          <Switch>
            <Route path="/index" component={Index} />
            <Route path="/todolist" component={Todolist} />
            <Route path="/Antd" component={A_t_index} />
            <Route path="/ToDoList_UI" component={ToDoList_UI} />
            <Route path="/Redux_saga" component={Redux_saga} />
          </Switch>
        </App>
      </BrowserRouter>
    );
  }
}
