import {useState} from "react";
import {bindActionCreators, createStore} from "redux";
import {connect, Provider} from "react-redux";
import PropTypes from 'prop-types'

const initialState = {count: 0}
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

const store = createStore(counter)
store.subscribe(() => {
    console.log(store.getState())
})

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


export function Counter(props){

    const [countValue,setCountValue] = useState(0)
    const {count,plusOne,minusOne,customCount} = props
    return (
        <div className="counter">
            <button onClick={minusOne}>-</button>
            <span style={{display: 'inline-block',margin: '0 10px'}}>
                {count}
            </span>
            <button onClick={plusOne}>+</button>

            <input type="number" value={countValue} onChange={event => {
                if (event.target.value === '') {
                    setCountValue('')
                } else {
                    setCountValue(Math.floor(+event.target.value))
                }
            } } />
            <button onClick={() => {
                console.log(countValue)
                console.log(typeof  countValue)
                customCount(Number(countValue || 0))
            }}>
                Add
            </button>
        </div>
    )
}
Counter.propTypes = {
    count: PropTypes.number.isRequired,
    plusOne: PropTypes.func.isRequired,
    minusOne: PropTypes.func.isRequired,
    customCount: PropTypes.func.isRequired
}


// 映射 state
function mapStateToProps(state) {
    return {
        count: state.count
    }
}
// 映射 dispatch
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        plusOne,
        minusOne,
        customCount
    },dispatch)
}
// 映射相关组件
const ConnectedCounter = connect(mapStateToProps,mapDispatchToProps)(Counter)
// React Redux 有个十分重要的思想，组件是分 功能 和 视图两种组件
// 这种将 Counter 链接到 指定的 redux，是一种功能组件

export function CounterSample(){
    return (
        <Provider store={store}>
            <ConnectedCounter />
        </Provider>
    )
}