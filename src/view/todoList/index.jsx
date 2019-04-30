import React, {
    Fragment
} from 'react'
import Header from '../../components/todoHeader/index'
import Todoitem from '../../components/todoItem/index'
import $axios from '../../axios/index'
import { CSSTransition } from 'react-transition-group';
import './index.css'
export default class Todolist extends React.Component {
    constructor(props) {
        super(props) //调用父类 Component 的方法
        this.state = { //组件中存值
            value: '',
            list: [],
            show: true
        }
    }


    getValue = (value) => {
        this.setState({
            value,
        })
        //在input值改变的时候打印子组件的ref值
        console.log(this.refs['childRefValue'].refs['refValue'])
    }

    addValue = (e) => {
        // this.setState({
        //     list: [...this.state.list, this.state.value],
        //     value: ''
        // })
        this.setState((preveState) => {
            if (preveState.value.length > 0) {
                return {
                    list: [...preveState.list, preveState.value],
                    value: ''
                }
            } else {
                return
            }

        })
    }

    delete = (index) => {
        let arr = [...this.state.list]
        arr.splice(index, 1)
        // this.setState({
        //     list: arr 
        // })
        // this.setState(() => {  //新版写法
        //     return {list: arr}
        // })
        this.setState(() => (  //新版+es6写法
            { list: arr }
        ))

    }

    getItemJsx = () => {
        return this.state.list.map((v, index) => {
            return (
                <li key={index + 'q'} >
                    <Todoitem
                        content={v}
                        index={index}
                        delete={() => { this.delete(index) }}
                    />
                    {/* <li onClick={(e) => { this.delete(e, index) }} key={index + 'g'} dangerouslySetInnerHTML={{ __html: v }}></li> */}
                </li>
            )
        })
    }

    componentDidMount() {
        $axios.post('/login', {
            name: "admin",
            pass: "123456"
        }).then(res => {
            console.log(res.data)
        })
    }

    showOrHide = () => {
        this.setState((preveState) => (
            {
                show: !preveState.show
            }
        ))
    }

    render() {
        return (
            <Fragment >
                {/* <div>
                    <label htmlFor="insertArea">输入内容：</label>
                    <input id="insertArea" onChange={e => { this.getValue(e) }} value={this.state.value} placeholder="请输入想要做的事" type="text" />
                    <button onClick={(e) => { this.addValue(e) }}>提交</button>
                </div> */}
                <Header ref="childRefValue"
                    name={this.state.show ? 'hide' : 'show'}
                    value={this.state.value}
                    getValue={(value) => { this.getValue(value) }}
                    addValue={() => { this.addValue() }}
                />
                <CSSTransition
                    in={this.state.show}
                    timeout={6000}
                    classNames="fade"
                >
                    <span>这是CSSTransition</span>
                </CSSTransition>
                <button onClick={() => { this.showOrHide() }} >{this.state.show ? '隐藏' : '展示'}</button>
                <ul> {this.getItemJsx()} </ul>

            </Fragment>
        )
    }
}