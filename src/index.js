import React from 'react'
import ReactDOM from 'react-dom'
// import App1 from './components/App1'
import App2 from './components/App2.js' // 这里改成了从容器组件中引入带有connect的app3
import store from './redux/store'
import {Provider} from 'react-redux'


//监听
function render() {
    ReactDOM.render(
        <App2 mystor={store} />, // 把store传给子组件
        document.getElementById('root')
    )
}
render()
store.subscribe(render)

// 有了Provider，就不需要做监听了
// 把要渲染的根组件放在Provider组件里，然后store交给Provider就可以了
ReactDOM.render(
  <App2 mystor ={store}/>,
    // <Provider store={store}>
    //     <App3 />  {/* 根组件也改成了app3 */}
    // </Provider>,
    // <App2 store={store} />, // 把store传给子组件
    document.getElementById('root')
)
