import {bindActionCreators, combineReducers, createStore} from "redux";


function run() {
    // state
    const initialState = {
        count: 0
    }

    const counter = (state = initialState,action) => {
        switch (action.type) {
            case 'PLUS_ONE':
                return {count: state.count + 1}
            case 'MINUS_ONE':
                return {count: state.count - 1}
            case 'CUSTOM_COUNT':
                // 一般 action 应该是这样的格式
                // {
                //      type: ActionName,
                //      payload: {}
                // }
                return {count: state.count + action.payload.count}
            default:
                return state
        }
    }
    const todos = (state = {}) => state

    // 单应用
    // const store = createStore(counter)
    // 创建多应用
    const store = createStore(combineReducers({
        todos,
        counter
    }))

    // Action creator
    function plusOne(){
        return {type: 'PLUS_ONE'}
    }
    function minusOne(){
        return {type: 'MINUS_ONE'}
    }
    function customCount(count) {
        return {type: 'CUSTOM_COUNT',payload: {count}}
    }

    store.subscribe(() => {
        console.log(store.getState()) // 监听 订阅变化
    })
    store.dispatch(minusOne())
    store.dispatch(plusOne())
    store.dispatch(customCount(5))

    // 来看看一些实用的函数
    minusOne = bindActionCreators(minusOne,store.dispatch)
    plusOne = bindActionCreators(plusOne, store.dispatch) // 绑定 store，且触发指定 事件
    customCount = bindActionCreators(customCount,store.dispatch)
    minusOne()
    plusOne()
    customCount(5)

}

export function PureRedux(){
    return (
        <div>
            <button onClick={run}>运行</button>
            <p>* 请打开控制台查看运行结果</p>
        </div>
    )
}