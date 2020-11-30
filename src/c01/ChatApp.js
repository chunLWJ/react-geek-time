import PropTypes from 'prop-types'
import {useState} from "react";

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
        </div>
    )
}
