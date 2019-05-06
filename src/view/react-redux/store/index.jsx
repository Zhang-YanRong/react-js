import { createStore } from 'redux'
import reducer from './reducer.jsx'
const store = createStore(reducer)

export default store;