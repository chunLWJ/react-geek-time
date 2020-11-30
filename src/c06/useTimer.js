import {useEffect, useState} from "react";

export function useTimer(){
    let timerId = null;
    const [date,setDate] = useState(new Date())
    console.log('函数执行')
    useEffect(() => {
        console.log('副作用执行')
        timerId = setInterval(() => {
            console.log('定时器执行中...')
            setDate(new Date())
        },1000)

        return () => {
            console.log('副作用销毁')
            clearInterval(timerId)
        }

    },[])
    return {
        time: date
    }
}