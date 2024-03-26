import { useState } from "react";

export default function StateSnapshot() {
    const [val, changeVal] = useState('green')
    const [x, cx] = useState(0);

    function c() {
        //expmle of State Snapshot. A snapshot is passed instead of the changed value.
        changeVal(val === 'green' ? 'red' : 'green');
        setTimeout(() => alert("This is alerted 2 seconds after value change but still: " + val), 2000)
    }

    //the +3 button changes the state variable 3 times and it is changing the newer var each time. if you change it to cx(x+1). each time it will change the older value. so even after calling cx 3 times the value will only increase by 1
    return (<>
        <h2 onClick={c}>Click To Change: {val}</h2>
        <h3 onClick={() => {
            cx(t => t + 1)
            cx(t => t + 1)
            cx(t => t + 1)
        }
        }>+3:{x}</h3>
    </>);

}