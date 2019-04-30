import { ADD_LIST_VAlUE, CHANGE_INPUT_VALUE, DELETE_LIST_VALUE, INFO_LIST_VALUE } from './actionTypes.jsx'

const defaultState = {
    inputValue: '',
    list: []
}


//reducer可以接收 但不能修改state 需要深拷贝
export default (state = defaultState, action) => {
    /**
     * 改变store中 inputValue 的值
     */
    //4.处理传过来的action
    if (action.type === CHANGE_INPUT_VALUE) {
        //不能直接操作state,需深拷贝
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        //返回新的state对象
        return newState
    }

    /**
     * store 中 input 值添加到 list 中，并清除 inputValue 值
     */
    if (action.type === ADD_LIST_VAlUE) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }

    /**
     * 删除 store 中 list 数组中对应的值
     */
    if (action.type === DELETE_LIST_VALUE) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(newState.value, 1)
        return newState
    }

    /**
     * 获取初始 list 的值
     */
    if (action.type === INFO_LIST_VALUE) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list = action.list
        return newState
    }

    return state
}