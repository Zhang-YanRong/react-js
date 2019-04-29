import { ADD_INPUT_VAlUE, CHANGE_INPUT_VALUE, DELETE_LIST_VALUE } from './actionTypes.jsx'

const defaultState = {
    inputValue: '',
    list: []
}


//reducer可以接收 但不能修改state 需要深拷贝
export default (state = defaultState, action) => {
    //4.处理传过来的action
    if (action.type === CHANGE_INPUT_VALUE) {
        //不能直接操作state,需深拷贝
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        //返回新的state对象
        return newState
    }
    if (action.type === ADD_INPUT_VAlUE) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    if (action.type === DELETE_LIST_VALUE) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(newState.value, 1)
        return newState
    }
    return state
}