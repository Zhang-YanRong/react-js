import React from 'react'

import { Input, Button, List } from 'antd';
const Search = Input.Search;


/**
 * UI组件
 */
// class ToDoListUi extends React.Component {
//     render() {
// return (
//     <div style={{ "margin": "20px" }}>
//         <Search placeholder="input search text"
//             value={this.props.inputValue}
//             onChange={(e) => { this.props.inputChagne(e) }}
//             onSearch={value => console.log(value)}
//             style={{ width: 200 }}
//         />
//         <Button type="primary" onClick={() => { this.props.addValue() }} style={{ "marginLeft": "20px" }}>Submit</Button>
//         <List
//             style={{ "marginTop": "20px", "width": "200px" }}
//             bordered
//             dataSource={this.props.list}
//             renderItem={(item, index) => (<List.Item onClick={(e) => { this.props.delete(e, index) }}>{item}</List.Item>)}
//         />
//     </div>
// )
//     }
// }


/**
 * 无状态组件
 */
const ToDoListUi = (props) => {
    return (
        <div style={{ "margin": "20px" }}>
            111
            <Search placeholder="input search text"
                value={props.inputValue}
                onChange={(e) => { props.inputChagne(e) }}
                onSearch={value => console.log(value)}
                style={{ "width": "200px", "color": "#000" }}
            />
            <Button type="primary" onClick={() => { props.addValue() }} style={{ "marginLeft": "20px" }}>Submit</Button>
            <List
                style={{ "marginTop": "20px", "width": "200px" }}
                bordered
                dataSource={props.list}
                renderItem={(item, index) => (<List.Item onClick={(e) => { props.delete(e, index) }}>{item}</List.Item>)}
            />
        </div>
    )
}



export default ToDoListUi