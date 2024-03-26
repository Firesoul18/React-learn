import { useState } from "react"

export default function Clock(){
    const [time,setTime] = useState(new Date().toLocaleTimeString())
    let st ={
        backgroundColor:'#3498db',
        color:'#ffffff',
        textAlign:'center',
        fontSize:'24px',
        padding: '20px',
        borderRadius: '20px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2);'
    }

    setInterval(()=>setTime(new Date().toLocaleTimeString()))
    return(
    <div style={st}>
        {time}
    </div>);
}