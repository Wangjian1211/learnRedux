import {createStore, applyMiddleware} from 'redux'
import {counter} from './reducers'

// 生成一个store对象，连接管理员counter
const store = createStore(
	counter,
)

export default store 
