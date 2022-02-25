import { number } from "prop-types"
// 包含所有的action对象


// 增加的action
export const incrementAction = (number) => ({
    type: 'increment',
    data: number
})
// 减少的action
export const decrementAction = (number) => ({
    type: 'decrement',
    data: number
})
// 异步延时增加
export const delayAddAction = (number) => {
    return dispatch => {
        setTimeout(() => {
            // 所有的异步action  都有同步action去分事件
            dispatch(incrementAction(number))
        }, 1000);
    }
}
