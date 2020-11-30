import PropTypes from 'prop-types'
import {useState} from "react";

// 这个例子看着也不是很懂，Hooks 表达的不是很明显，但是 Class 表达是 从 Prop 中更新 state，参考 getDerivedStateFromProps 生命周期
export function StatefulTabSelector({
    initialValue,
    options = []
                                    }){
    const [color,setColor] = useState(initialValue)

    return (
        <div className="tab-selector">
            <ul>{options.map(option => <li
                key={option.value}
                className={`tab-item ${option.value === color ? 'selected' : ''}`}
                onClick={() => setColor(option.value)}
                style={{cursor: 'pointer'}}
            >
                {option.value}
            </li>)}</ul>
        </div>
    )
}
StatefulTabSelector.propTypes = {
    initialValue: PropTypes.string.isRequired,
    value: PropTypes.string,
    options: PropTypes.array,
    onChange: PropTypes.func
}


const _options = [
    { name: "Red", value: "red" },
    { name: "Blue", value: "blue" },
    { name: "Orange", value: "orange" }
];


export function StatefulTabSelectSample(){
    return (
        <div>
            选择颜色: <StatefulTabSelector
                options={_options}
                initialValue="red"
            />
        </div>
    )
}
