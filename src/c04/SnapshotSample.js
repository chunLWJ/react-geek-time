import {useEffect, useState} from "react";
import './SnapshotSample.css'
export function SnapshotSample(){
    const [message,setMessages] = useState([])
    let interval = null;
    console.log('函数执行中')
    useEffect(() => {
        interval = setInterval(() => {
            console.log('定时器执行中')
            if (message.length > 200) {
                clearInterval(interval)
                return
            }
            setMessages((prevState => {
              return [
                  `msg ${prevState.length}`,
                  ...prevState
              ]
            }))
        },1000)

        return () => {
            console.log('销毁')
            clearInterval(interval)
        }
    },)

    return(
        <div
            className="snapshot-sample"
        >
            {message.map(message => <div key={message}>{message}</div>)}
        </div>
    )
}