import { ADD_LIST_VAlUE, CHANGE_INPUT_VALUE, DELETE_LIST_VALUE, INFO_LIST_VALUE } from './actionTypes.jsx'
import $axios from '../axios/index'


/** 
 * input 值 改变 就改变store 中state 的值 的action
*/
export const getInputChangeActiong = (value) => (
    {
        type: CHANGE_INPUT_VALUE,
        value,
    }
)

/**
 * 添加input的值到 store 中的 list 的action
*/
export const addListValueActiong = (value) => (
    {
        type: ADD_LIST_VAlUE,
        value,
    }
)

/** 
 * 删除store中的list中的值的action
*/
export const DeleteListValueActiong = (value) => (
    {
        type: DELETE_LIST_VALUE,
        value,
    }
)

/** 
 * 初始化store中的list中的值
*/
export const InfoListValueActiong = (value) => (
    {
        type: INFO_LIST_VALUE,
        list: value
    }
)

/**
 * 在redux-thunk中进行axios请求初始化list
 */
export const GetListData = () => {
    //返回的这个函数可以获取store.dispatch方法
    return (dispatch) => {
        $axios.post('/login', {
            name: "admin",
            pass: "123456"
        }).then(res => {
            //在action中创建新的action，并用dispatch方法派发给store
            const action = InfoListValueActiong(Object.keys(res.data))
            dispatch(action)
        })
    }
}