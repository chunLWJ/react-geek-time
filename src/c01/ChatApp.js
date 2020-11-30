import PropTypes from 'prop-types'
import {useState} from "react";
import {useTimer} from "../c06/useTimer";
import moment from "moment";

function MessageLsit(props){
    return <ul>
        {props.messages.map( (message,index) => <li key={index}>{message}</li> )}
    </ul>
}
MessageLsit.propTypes = {
    messages: PropTypes.array.isRequired
}

export function ChatApp(){
    const [messages,setMessages] = useState([])
    const [inputMsg, setInputMsg] = useState("")

    // 复用函数都应该以 use 开头
    const {time} = useTimer()

    let handleAdd = function(){
        if (inputMsg !== "") {
            setMessages([...messages,inputMsg])
            setInputMsg("")
        }
    }
    return (
        <div>
            <MessageLsit messages={messages} />
            <div>
                <input type="text" value={inputMsg} onChange={(event) => setInputMsg(event.target.value)} />
                <button onClick={handleAdd}>添加</button>
            </div>
            <h2>{moment(time).format('yyyy/MM/DD hh:mm:ss')}</h2>
        </div>
    )
}
