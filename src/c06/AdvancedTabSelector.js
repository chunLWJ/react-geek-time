import PropTypes from 'prop-types'
import {useState} from "react";

export function AdvancedTabSelector({
    value = "",
    options = [],
    onChange = () => {},
    children = () => {}
                                    }){
    return (
        <div className="tab-selector">
            <ul>{options.map(option => (
                <li
                    key={option.value}
                    className={`tab-item ${option.value === value ? 'selected' : ''}`}
                    onClick={() => onChange(option.value)}
                >
                    {option.name}
                </li>
            ))}</ul>
            <br />
            <br />
            {children(value)}
        </div>
    )
}

AdvancedTabSelector.propTypes = {
    value: PropTypes.string,
    options: PropTypes.array,
    onChange: PropTypes.func,
    children: PropTypes.func
}

const colors = [
    { name: "Red", value: "red" },
    { name: "Blue", value: "blue" },
    { name: "Orange", value: "orange" }
];

const animals = [
    { name: "Tiger", value: "tiger" },
    { name: "Elephant", value: "elephant" },
    { name: "Cow", value: "cow" }
];
export function AdvancedTabSelectorSample(){
    const [color,setColor] = useState("")
    return (
        <div>
            <h3>选择颜色：</h3>
            {/* 复用，children */}
            <AdvancedTabSelector options={colors} value={color} onChange={color => setColor(color)}>
                {
                    (color) => (
                        <span
                            style={{
                                display: 'inline-block',
                                backgroundColor: color || 'white',
                                width: '40px',
                                height: '40px'
                            }}
                        >

                        </span>
                    )
                }
            </AdvancedTabSelector>
        </div>
    )
}