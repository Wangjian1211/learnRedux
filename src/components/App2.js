import React, { Component } from 'react'
// import PropTypes from 'prop-types'


export default class App2 extends Component {
  constructor(pros) {
    super(pros)
  }
    // 改用react-redux后，要先声明需要接收的属性
    // static propTypes = {
    //     count: PropTypes.number.isRequired,
    //     incrementAction: PropTypes.func.isRequired,
    //     decrementAction: PropTypes.func.isRequired,
    //     delayAddAction: PropTypes.func.isRequired
    // }
    
    increment = () => {
        // 1，获取选择框里的值
        const number = this.select.value*1 // *1是为了把字符串转换成数字类型
        // 调用store的方法更新状态
        // this.props.store.dispatch(incrementAction(number))
        // react-redux 这里改成：
        this.props.mystor.dispatch({ type: 'increment', data: number}) 
    }
    decrement = () => {
        // 1，获取选择框里的值
        const number = this.select.value*1 // *1是为了把字符串转换成数字类型
        // 调用store的方法更新状态
        // this.props.store.dispatch(decrementAction(number))
        // react-redux 这里改成：
        // this.props.decrementAction(number)
        this.props.mystor.dispatch({ type: 'decrement', data: number}) 
    }
    delayAdd = () => { // 异步延时增加
        // const number = this.select.value*1
        // this.props.delayAddAction(number)
    }
    render() {
        // const count = this.props.store.getState() 
        // react-redux 这里也要改一下:
        return (
            <div>
                <p>click { this.props.mystor.getState() } time </p>
                <div>
                    <select ref={select => this.select = select} >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>&nbsp;
                    <button onClick={ this.increment } >+</button>&nbsp;
                    <button onClick={ this.decrement }>-</button>&nbsp;
                    <button onClick={this.delayAdd} >异步延时增加</button>
                </div>
            </div>
        )
    }
}
