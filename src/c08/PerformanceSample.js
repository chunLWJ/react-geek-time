import React, {useContext, useEffect, useMemo, useReducer, useState} from 'react'
import {MyContext} from "./ContextManager";
import PropTypes from 'prop-types'

const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1)
        },2000)
    })
}

const initState = { count: 0,step: 0, number: 0 }
const reducer = (state,action) => {
    switch (action.type) {
        case 'stepInc': return {...state,step: state.step + 1};
        case 'numberInc': return {...state,number: state.number + 1};
        case 'countInc': return {...state,count: state.step + state.number};
        default: return state
    }
}
export default function () {


    const [state,dispatch] = useReducer(reducer,initState)
    return (
        <MyContext.Provider value={ {state,dispatch} }>
            <PerformanceChild fetchData={fetchData} />
        </MyContext.Provider>
    )

    // state 的值还是由 一层一层 向下传递
    // const [state,dispatch] = useReducer(reducer,initState)
    // const {step,number,count} = state
    // return (
    //     <MyContext.Provider value={ {dispatch} }>
    //         <PerformanceChild step={step} number={number} count={count} fetchData={fetchData} />
    //     </MyContext.Provider>
    // )

    // // Context 复杂度 过高
    // const [step,setStep] = useState(0)
    // const [count,setCount] = useState(0)
    // const [number,setNumber] = useState(0)
    // return (
    //     <MyContext.Provider value={{setStep,setCount,setNumber,fetchData}}>
    //         <PerformanceChild step={step} number={number} count={count} />
    //     </MyContext.Provider>
    // )
}
function PerformanceChild({fetchData}){
    // 上下下文存在 state 和 reducers
    // 只有函数才是 props 传入
    const { state: {step,count,number},dispatch } = useContext(MyContext)
    console.log('子渲染函数')
    useEffect(() => {
        console.log('子 副作用函数')
        fetchData().then(res => {
            console.log('res',res)
        })
    },[])

    // React.memo: 只会对 Prop 浅比较，但是对于 useContext 上下文等是无法判断的

    // useMemo 依赖某些值的变化才会触发渲染函数
    // 多次触发 count++ 不应该触发渲染函数，count++ 触发是另外两个值的相加，多次触发值始终是一样的
    return useMemo(() => {
        console.log('useMemo')
        return (
            <div>
                {console.log('返回值')}
                <p>step is: {step}</p>
                <p>count is: {count}</p>
                <p>number is: {number}</p>
                <br />
                <div>
                    <button onClick={() => dispatch({type: 'stepInc'})}>step ++</button>
                    <button onClick={() => dispatch({type: 'countInc'})}>count ++</button>
                    <button onClick={() => dispatch({type: 'numberInc'})}>number ++</button>
                </div>
            </div>
        )
    },[count,number,step])
}
PerformanceChild.propTypes = {
    fetchData: PropTypes.func
}

// function PerformanceChild(props){
//     // 更新函数变成一个 reducer，更新的时候传入对应的 action 即可
//     // state 传入的方向还是 props，一层一层向下传递
//     const { dispatch } = useContext(MyContext)
//     console.log('子渲染函数')
//     useEffect(() => {
//       console.log('子 副作用函数')
//       props.fetchData().then(res => {
//           console.log('res',res)
//       })
//     },[])
//
//     return (
//         <div>
//             <p>step is: {props.step}</p>
//             <p>count is: {props.count}</p>
//             <p>number is: {props.number}</p>
//             <br />
//             <div>
//                 <button onClick={() => dispatch({type: 'stepInc'})}>step ++</button>
//                 <button onClick={() => dispatch({type: 'countInc'})}>count ++</button>
//                 <button onClick={() => dispatch({type: 'numberInc'})}>number ++</button>
//             </div>
//         </div>
//     )
// }
// PerformanceChild.propTypes = {
//     step: PropTypes.number,
//     count: PropTypes.number,
//     number: PropTypes.number,
//     fetchData: PropTypes.func
// }

// function PerformanceChild(props){
//     // 更新函数 由 context 传递
       // state 的传入是由 props，一层一层向下传递
//     const { setStep,setCount,setNumber,fetchData } = useContext(MyContext)
//     console.log('子渲染函数')
//     useEffect(() => {
//         console.log('子 副作用函数')
//         fetchData().then(res => {
//             console.log('res',res)
//         })
//     },[])
//
//     return (
//         <div>
//             <p>step is: {props.step}</p>
//             <p>count is: {props.count}</p>
//             <p>number is: {props.number}</p>
//             <br />
//             <div>
//                 <button onClick={() => setStep(props.step + 1)}>step ++</button>
//                 <button onClick={() => setCount(props.count + 1)}>count ++</button>
//                 <button onClick={() => setNumber(props.number + 1)}>number ++</button>
//             </div>
//         </div>
//     )
// }
// PerformanceChild.propTypes = {
//     step: PropTypes.number,
//     count: PropTypes.number,
//     number: PropTypes.number
// }