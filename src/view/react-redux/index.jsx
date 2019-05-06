import React, { Fragment } from 'react'
import store from './store/index.jsx'
import {connect} from 'react-redux'

const React_redux = (props) =>{
    const {value,list,inputChange,deleteClick,addClick } = props
     return (
            <Fragment>
                <input value={value} onChange={(e) =>{inputChange(e)}} type="text" />
                <button onClick={() =>{addClick(value)}}>提交</button>
                <ul>
                    {
                        list.map((item, index) => {
                            return <li onClick={()=>{deleteClick(index)}} key={index}>{item}</li>
                        })
                    }
                </ul>
            </Fragment>
        )
} 

// class React_redux extends React.Component {
//     render() {
//     const {value,list,inputChange,deleteClick,addClick } = this.props
//         return (
//             <Fragment>
//                 {/* 直接调用this.props.value */}
//                 <input value={value} onChange={(e) =>{inputChange(e)}} type="text" />
//                 <button onClick={() =>{addClick(value)}}>提交</button>
//                 <ul>
//                     {
//                         list.map((item, index) => {
//                             return <li onClick={()=>{deleteClick(index)}} key={index}>{item}</li>
//                         })
//                     }
//                 </ul>
//             </Fragment>
//         )
//     }
// }

//把store中的数据映射到组件的props中
const mapStateToProps = (state/**state中的数据 */) =>{ 
    return {
        value:state.value,
        list:state.list
    }
}

//store.dispatch方法挂载到props上 可以让props里面的方法能够调用dispatch(),去操作store里的数据
const mapDispatchToProps = (dispatch) =>{
    return {
        inputChange: (e) =>{
            const action = {
                type:'change_input_value',
                value:e.target.value
            }
            //直接调用dispatch
            dispatch(action)
        },
        addClick:(value) => {
            const action = {
                type:'add_list_data',
                value,
            }
            dispatch(action)
        },
        deleteClick:(value) =>{
            const action = {
                type:'delete_list_data',
                value,
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(React_redux)  //组件和store做连接