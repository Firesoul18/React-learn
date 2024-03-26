import { useState } from "react";
import './Chat.css';
export default function Chat() {
    
    const friends = [
        {
            id: 1,
            name: "Alan"
        }, {
            id: 2,
            name: "Bob"
        }, {
            id: 3,
            name: "Ravi"
        }
    ]

    const p = [{ id: 1, text: "" }, { id: 2, text: "" }, { id: 3, pending: "" }];

    const [pending, setPending] = useState(p);

    // const [friends, setFriends] = useState(items);

    const [current, changeCurrent] = useState(friends[0])


    function update(e,id) {
            setPending(
                pending.map(
                    p => {
                        if (id === p.id) {
                            console.log(id,p.id)
                            return { id: id, text: e.target.value }
                        } else {
                            return p;
                        }
                    }
                )
            )
            console.log(pending)
    }

    function change(id) {
        return () => { changeCurrent(friends.find(x => id === x.id)) }
    }

    return (
    <div className="mains">
        <SideBar items={friends} change={change} current={current} ></SideBar>
        <OpenChat current={current} p={pending} update={update}></OpenChat>
    </div>);

}

function OpenChat({ current, p, update }) {
    let textItem = p.find(x => x.id === current.id);
    console.log(textItem)
    return (
        <div className="chat">
            {/* use key so that it doesn't behave strange */}
            <textarea key={current.id} value={textItem.text} onChange={(e)=>{update(e,current.id)}}></textarea>
            <div className="buttons">
                <button className="btn">Send</button>
                <button className="btn" onClick={e=>{e.target.value=""; update(e,current.id)}}>Reset</button>
            </div>
        </div>
    )
}

function SideBar({ items, change, current }) {
    return (
        <ul className="friends">
            {items.map((i) => {
                let t = "friend";
                // console.log(current)
                if (i.id === current.id) {
                    t += " current"
                }
                return <li key={i.id} onClick={change(i.id)} className={t}>{i.name}</li>
            })}
        </ul>
    );



}