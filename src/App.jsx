import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Provider } from 'react-redux'
import store from './view/react-redux/store/index.jsx'

// class App extends Component {
//   render() {
//     return <div>{this.props.children}</div>;
//   }
// }

const App = (props) => {
  // return <div></div>
  return <Provider store={store}>{props.children}</Provider>;
}

export default App;
