const data = {
    list: [1, 2, 3],
    value: 'hello'
}
export default (state = data, action) => {
    const newData = JSON.parse(JSON.stringify(state))

    switch(action.type){
        case 'change_input_value':
            newData.value = action.value
            return newData
        
        case 'add_list_data':
            newData.list.push(action.value)
            newData.value = ''
            return newData
        
        case 'delete_list_data':
            newData.list.splice(action.value,1)
            return newData
    }
    return state
}