import PropTypes from 'prop-types'
import {useState} from "react";
import './TabSelector.css'
export function TabSelector({
    value = null,
    options = [],
    onChange = () => {}
                            }){
    return (
        <div className="tab-selector">
            <ul>{options.map(option => <li
                key={option.value}
                className={`tab-item ${option.value === value ? 'selected' : ''}`}
                onClick={() => onChange(option.value)}
                style={{cursor: 'pointer'}}
            >
                {option.value}
            </li>)}</ul>
        </div>
    )


}

TabSelector.propTypes = {
    value: PropTypes.string,
    options: PropTypes.array,
    onChange: PropTypes.func
}
const _options = [
    { name: "Red", value: "red" },
    { name: "Blue", value: "blue" },
    { name: "Orange", value: "orange" }
];

export function TabSelectorSample(){
    const [color,setColor] = useState("")
    return (
        <div>
            选择颜色: {" "}
            <TabSelector
                options={_options}
                value={color}
                onChange={(color) => setColor(color)}
            />
        </div>
    )
}
