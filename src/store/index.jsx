import { createStore } from 'redux'
import reducer from './reducer.jsx'

//store调用reducer 把action传给reducer 去处理 返回数据
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;