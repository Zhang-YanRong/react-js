import React, { Fragment } from 'react'
import { Input, Button, List } from 'antd'

export class Header extends React.Component {
    render() {
        console.log(2)
        return (
            <Fragment>
                <Input value={this.props.value} onChange={(e) => { this.props.getInputValue(e.target.value) }} style={{ "width": "200px" }} />
                <Button onClick={(e) => { this.props.buttonClick(e) }} style={{ "marginLeft": "20px" }} type="primary">submit</Button>
            </Fragment>
        )
    }
}


// export class Item extends React.Component {
//     render() {
//         console.log(1)
//         return (
//             <Fragment>
//                 <List dataSource={this.props.data} style={{ "width": "200px", "marginTop": "15px" }} bordered
//                     renderItem={(item, index) => (
//                         <List.Item onClick={() => { this.props.deleteItem(index) }}>{item}</List.Item>
//                     )}
//                 />
//             </Fragment>
//         )
//     }
// }

// const Header = (props) => {
//     return (
//         <Fragment>
//             <Input value={props.value} onChange={(e) => { props.getInputValue(e.target.value) }} style={{ "width": "200px" }} />
//             <Button onClick={(e) => { props.buttonClick(e) }} style={{ "marginLeft": "20px" }} type="primary">submit</Button>
//         </Fragment>
//     )
// }

export const Item = (props) => {
    // console.log(1)
    return (
        <Fragment>
            <List dataSource={props.data} style={{ "width": "200px", "marginTop": "15px" }} bordered
                renderItem={(item, index) => (
                    <List.Item onClick={() => { props.deleteItem(index) }}>{item}</List.Item>
                )}
            />
        </Fragment>
    )
}

// export default { Header, Item }
