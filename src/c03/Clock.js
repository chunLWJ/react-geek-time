import {useEffect, useState} from "react";
import moment from "moment";

export function Clock(){
    const [date,setDate] = useState(new Date())
    let timerId = null;
    console.log('更新或执行函数')
    useEffect(() => {
        console.log('副作用')
        timerId = setInterval(() => {
            setDate(new Date())
            console.log('定时器执行')
        },1000)

        return () => {
            console.log('清除定时器')
           clearInterval(timerId)
        }
    },[])

    return (
        <div>
            <h1>您好!</h1>
            <h2>当前时间：{moment(date).format('yyyy/MM/DD hh:mm:ss')}</h2>
        </div>
    )
}