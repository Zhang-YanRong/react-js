import { UPDATE_VALUE, ADD_DATA, DELETE_ITEM, GET_DATA } from './actionType'

export const updateValue = (value) => ({
    type: UPDATE_VALUE,
    value,
})

export const addData = (value) => ({
    type: ADD_DATA,
    value,
})

export const deleteItem = (value) => ({
    type: DELETE_ITEM,
    value,
})

export const getData = (value) => ({
    type: GET_DATA,
    data: value
})