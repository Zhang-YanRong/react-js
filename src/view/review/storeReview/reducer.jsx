import { UPDATE_VALUE, ADD_DATA, DELETE_ITEM, GET_DATA } from './actionType'

const data = {
    data: [1, 2, 3, 4, 5],
    value: ''
}

export default (state = data, action) => {
    if (action.type === UPDATE_VALUE) {
        let newData = JSON.parse(JSON.stringify(state))
        newData.value = action.value
        return newData
    }
    if (action.type === GET_DATA) {
        let newData = JSON.parse(JSON.stringify(state))
        return newData
    }
    if (action.type === ADD_DATA) {
        let newData = JSON.parse(JSON.stringify(state))
        newData.data.push(newData.value)
        newData.value = ''
        return newData
    }
    if (action.type === DELETE_ITEM) {
        let newData = JSON.parse(JSON.stringify(state))
        newData.data.splice(action.value, 1)
        return newData
    }
    return state
}