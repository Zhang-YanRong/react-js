import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../App";
// import Index from "../view/index/index.jsx";
// import Todolist from "../view/todoList/index.jsx";
// import A_t_index from "../view/antd-todolist/index.jsx";
// import ToDoList_UI from '../view/todolistUI/index.jsx';
// import Redux_saga from '../view/todolistUI/redux-saga.jsx'
// import Todoreview from '../view/review/todolist.jsx'
const Index = React.lazy(() => import("../view/index/index.jsx"))
const Todolist = React.lazy(() => import("../view/todoList/index.jsx"))
const A_t_index = React.lazy(() => import("../view/antd-todolist/index.jsx"))
const ToDoList_UI = React.lazy(() => import("../view/todolistUI/index.jsx"))
const Redux_saga = React.lazy(() => import("../view/todolistUI/redux-saga.jsx"))
const Todoreview = React.lazy(() => import("../view/review/todolist.jsx"))


export default class IRoute extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <App>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/" exact component={Index} />
              <Route path="/todolist" component={Todolist} />
              <Route path="/Antd" component={A_t_index} />
              <Route path="/ToDoList_UI" component={ToDoList_UI} />
              <Route path="/Redux_saga" component={Redux_saga} />
              <Route path="/Todoreview" component={Todoreview} />
            </Switch>
          </Suspense>
        </App>
      </BrowserRouter>
    );
  }
}
