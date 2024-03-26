import { useState } from "react";
import { list } from "./ListData";
export default function DataChange(){
    let tList = list;
    let [l,changeL]=useState(tList);
    const li = l.map(
        i=><li key={i.id}>
            {i.name!=null&&i.name}
            {i.hobbies!=null &&(
            <ul>
                {i.hobbies.map(x=><li>{x}</li>)}
            </ul>)}
            <button onClick={()=>{
                //call delete to backend
                changeL(l.filter(x=>x.id!==i.id))
            }}>Delete</button>
        </li>
    )

    return (<ul>
        {li}
    </ul>);
}