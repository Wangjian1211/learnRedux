// 包含多个reducer函数的文件

export function counter(state = 9, action) {
    switch(action.type) {
        case 'increment':
            return state + action.data
        case 'decrement':
            if (state - action.data >= 0) {
                return state - action.data
            } else {
                alert('次数不能为负！')
                return state
            }
            // break
        default:
            return state
    }
}
