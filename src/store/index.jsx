//redux-thunk
// import { createStore, applyMiddleware, compose } from 'redux'
// import reducer from './reducer.jsx'
// import thunk from 'redux-thunk'

// //配置thunk-tools的使用
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
// const enhancer = composeEnhancers(applyMiddleware(thunk));

// //store调用reducer 把action传给reducer 去处理 返回数据
// const store = createStore(
//     reducer,
//     enhancer
// )

// export default store;


import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer.jsx'

//配置thunk-tools的使用
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers();

//store调用reducer 把action传给reducer 去处理 返回数据
const store = createStore(
    reducer,
    enhancer
)

export default store;