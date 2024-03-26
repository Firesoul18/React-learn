import { useReducer } from "react";

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

const drafts = {
    1:'hello',2:'',3:''
}

function reducer(state,action){
    switch (action.type) {
        case 'changed':
            return {
                ...state,
                id:action.id,
                name:(friends.find(x=>x.id===action.id)).name
            }
    
        case 'edited':
            return {
                ...state,
                drafts:{...state.drafts,[action.id]:action.message}
            }
        
        case 'reset':
            return{
                ...state,
                drafts:{...state.drafts,[action.id]:''}
            }
        default:
            break;
    }
}

export default function ChatWithReducer(){
    const selected = {...friends[0],drafts:drafts}
    const [state,dispatch] = useReducer(reducer,selected)

    return (
        <div className="mains">
            <SideBar items={friends} dispatch={dispatch} current={state} ></SideBar>
            <OpenChat current={state} dispatch={dispatch}></OpenChat>
        </div>);
    
    }
    
    function OpenChat({ current, dispatch }) {
        // let textItem = p.find(x => x.id === current.id);
        let text = current.drafts[current.id]
        console.log(text)
        return (
            <div className="chat">
                {/* use key so that it doesn't behave strange */}
                <textarea key={current.id} value={text} onChange={(e)=>{dispatch({type:'edited',id:current.id,message:e.target.value})}}></textarea>
                <div className="buttons">
                    <button className="btn">Send</button>
                    <button className="btn" onClick={e=>{e.target.value=""; dispatch({type:'edited', id:current.id, message:''})}}>Reset</button>
                </div>
            </div>
        )
    }
    
    function SideBar({ items, dispatch, current }) {
        return (
            <ul className="friends">
                {items.map((i) => {
                    let t = "friend";
                    // console.log(current)
                    if (i.id === current.id) {
                        t += " current"
                    }
                    return <li key={i.id} onClick={()=>dispatch({type:'changed',id:i.id})} className={t}>{i.name}</li>
                })}
            </ul>
        );
    
    
    
    }