import React, {useState} from "react"

export function Button({children}) {
    let [col,setCol] = useState("green");
    const st = {
        color: col
    };

    const onClick = () => {
        col==="green"?setCol("red"):setCol("green");
    }

    return (
        <button
            style={st}
            onClick={onClick}>
            {children}
        </button>);

}