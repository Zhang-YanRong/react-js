import { ADD_INPUT_VAlUE, CHANGE_INPUT_VALUE, DELETE_LIST_VALUE } from './actionTypes.jsx'

//input 值 改变 就改变store 中state 的值 的action
export const getInputChangeActiong = (value) => (
    {
        type: CHANGE_INPUT_VALUE,
        value,
    }
)

//添加input的值到 store 中的 list 的action
export const getInputValueActiong = (value) => (
    {
        type: ADD_INPUT_VAlUE,
        value,
    }
)

//删除store中的list中的值的action
export const DeleteListValueActiong = (value) => (
    {
        type: DELETE_LIST_VALUE,
        value,
    }
)